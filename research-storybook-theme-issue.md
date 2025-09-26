# Storybook Theme Switching Issue Research Report

**Date**: September 26, 2025  
**Issue**: Color story component not updating when themes switch in Storybook

## Problem Analysis

### Root Cause Identified
The issue is in the `SwatchList` component in `/registry/tokens/color-story/color.stories.tsx`. The component uses:

```javascript
const styles = getComputedStyle(document.documentElement);
const color = styles.getPropertyValue(value);
```

**Problems:**
1. **React doesn't re-render when CSS custom properties change** - The `getComputedStyle` call happens during render, but React doesn't know when CSS variables change
2. **Stale closure** - The computed style values are calculated once during render and cached
3. **No reactive dependency** - There's no state or effect that triggers re-rendering when the theme changes

### Technical Details
- CSS custom properties change when `@storybook/addon-themes` applies class changes to the iframe's `<html>` element  
- The `withThemeByClassName` decorator correctly applies theme classes (`foundation`, `pathways`, etc.)
- But React components don't automatically detect these DOM attribute changes
- The `getComputedStyle` calls return the **current** values, but React never re-executes them

## Industry Solutions Research

### 1. MutationObserver Pattern (Recommended)
Found in production React components that handle theme detection:

```javascript
useEffect(() => {
  const detectTheme = () => {
    // Re-read computed styles and update state
    const computedStyle = getComputedStyle(document.documentElement);
    const bgColor = computedStyle.getPropertyValue("--background");
    setThemeValues(bgColor); // Trigger re-render
  };

  const observer = new MutationObserver(detectTheme);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class", "data-theme"],
  });

  return () => observer.disconnect();
}, []);
```

### 2. Custom Hook for CSS Variables
```javascript
function useCSSVariable(propertyName) {
  const [value, setValue] = useState('');
  
  useEffect(() => {
    const updateValue = () => {
      const newValue = getComputedStyle(document.documentElement)
        .getPropertyValue(propertyName);
      setValue(newValue);
    };
    
    updateValue(); // Initial read
    
    const observer = new MutationObserver(updateValue);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    
    return () => observer.disconnect();
  }, [propertyName]);
  
  return value;
}
```

### 3. State-driven Re-rendering
Force component updates by linking to React state changes that happen when themes switch.

## Storybook-Specific Considerations

### Theme Decorator Behavior
- `withThemeByClassName` applies classes to the iframe's `<html>` element
- Classes like `foundation`, `pathways`, `professional` are correctly applied
- CSS cascade works perfectly - the issue is purely React not re-rendering

### Iframe Context
- Storybook stories run inside an iframe with separate document context
- `document.documentElement` correctly refers to the iframe's `<html>` element
- No cross-frame issues - the problem is React reactivity, not DOM access

## Recommended Solutions

### Solution 1: Add MutationObserver to SwatchList (Minimal Change)
```javascript
const SwatchList = ({ colors }: { colors: Record<string, string> }) => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      forceUpdate(); // Force re-render when theme classes change
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex overflow-clip rounded-md border shadow">
      {Object.entries(colors).map(([name, value], idx) => {
        const styles = getComputedStyle(document.documentElement);
        const color = styles.getPropertyValue(value);
        // ... rest of component
      })}
    </div>
  );
};
```

### Solution 2: Custom Hook (Reusable)
```javascript
function useCSSCustomProperty(propertyName: string) {
  const [value, setValue] = useState(() => 
    getComputedStyle(document.documentElement).getPropertyValue(propertyName)
  );
  
  useEffect(() => {
    const updateValue = () => {
      const newValue = getComputedStyle(document.documentElement)
        .getPropertyValue(propertyName);
      setValue(newValue);
    };
    
    const observer = new MutationObserver(updateValue);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    
    return () => observer.disconnect();
  }, [propertyName]);
  
  return value;
}

// Usage in SwatchList:
const color = useCSSCustomProperty(value);
```

### Solution 3: Global State Integration
Create a theme context that updates when Storybook theme changes, then subscribe components to that context.

## Performance Considerations

### MutationObserver Efficiency
- **Pros**: Only triggers on actual DOM changes, not continuous polling
- **Cons**: Small overhead for each component instance
- **Recommendation**: Use debouncing if multiple components need updates

### Re-render Frequency
- Theme changes are infrequent user actions (not performance critical)
- CSS property reads are fast (browser-optimized)
- Minor impact on overall Storybook performance

## Implementation Recommendation

**Use Solution 1 (MutationObserver in SwatchList)** because:
1. ✅ Minimal code change to existing story
2. ✅ Addresses root cause directly  
3. ✅ No architectural changes required
4. ✅ Proven pattern from production React apps
5. ✅ Works specifically with `@storybook/addon-themes`

## Alternative Investigation

### Why @storybook/addon-themes Doesn't Fix This
The addon correctly applies theme classes, but React components must explicitly **opt into reactivity** for CSS custom property changes. This is by design - React doesn't automatically watch all possible DOM changes.

### Next Steps
1. Implement Solution 1 in the SwatchList component
2. Test theme switching across all educational themes
3. Verify performance impact is negligible
4. Consider extracting to custom hook if pattern is needed elsewhere

## References
- [React + CSS Variables Reactivity](https://nikitahl.com/handling-css-variables-with-react/)
- [MutationObserver for Theme Detection](https://github.com/preetsuthar17/HextaUI) 
- [Storybook Theme Addon Documentation](https://storybook.js.org/addons/@storybook/addon-themes)
- [CSS Custom Properties Best Practices](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
