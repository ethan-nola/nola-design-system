# Theme API Contract

## Overview
This contract defines the theme switching interface for the NOLA Design System. The "API" is primarily CSS-based with JavaScript hooks provided by next-themes.

## Theme Selection API

### setTheme(theme: string): void
**Description**: Set the active theme for the application
**Implementation**: next-themes `setTheme` function

**Request**:
```typescript
setTheme('foundation' | 'pathways' | 'professional' | 'light' | 'dark')
```

**Response**: Immediate CSS class application to document element
```html
<html class="foundation">
  <!-- Theme CSS custom properties active -->
</html>
```

**Side Effects**:
- localStorage updated with theme preference
- CSS custom properties recalculated
- Component styles update without re-render
- Storybook preview synchronized (if active)

### theme: string | undefined
**Description**: Current active theme name
**Implementation**: next-themes `theme` hook value

**Response**:
```typescript
'foundation' | 'pathways' | 'professional' | 'light' | 'dark' | undefined
```

### themes: string[]
**Description**: Available theme options
**Implementation**: next-themes configuration

**Response**:
```typescript
['light', 'dark', 'foundation', 'pathways', 'professional']
```

## CSS Custom Properties Contract

### Theme Variable Structure
Each theme must provide all required CSS custom properties in the `:root` scope when active.

### Foundation Theme Variables
```css
.foundation {
  /* Primary Colors */
  --primary: oklch(0.45 0.25 220); /* Vibrant blue */
  --primary-foreground: oklch(0.95 0 0);

  /* Secondary Colors */
  --secondary: oklch(0.65 0.20 280); /* Warm purple */
  --secondary-foreground: oklch(0.95 0 0);

  /* Background Colors */
  --background: oklch(0.98 0.05 220); /* Light blue tint */
  --foreground: oklch(0.15 0 0);

  /* Interactive States */
  --accent: oklch(0.55 0.25 140); /* Soft green */
  --accent-foreground: oklch(0.95 0 0);

  /* Touch Targets */
  --min-touch-target: 48px;
  --button-padding-x: 24px;
  --button-padding-y: 16px;

  /* Typography */
  --font-size-base: 16px;
  --line-height-base: 1.6;
  --letter-spacing-base: -0.01em;

  /* Focus Indicators */
  --focus-width: 3px;
  --border-radius: 0.75rem;
}
```

### Pathways Theme Variables
```css
.pathways {
  /* Primary Colors */
  --primary: oklch(0.50 0.20 185); /* Modern teal */
  --primary-foreground: oklch(0.95 0 0);

  /* Secondary Colors */
  --secondary: oklch(0.40 0.25 270); /* Deep purple */
  --secondary-foreground: oklch(0.95 0 0);

  /* Interactive States */
  --accent: oklch(0.65 0.30 25); /* Energetic coral */
  --accent-foreground: oklch(0.95 0 0);

  /* Touch Targets */
  --min-touch-target: 44px;
  --button-padding-x: 20px;
  --button-padding-y: 12px;

  /* Typography */
  --font-size-base: 15px;
  --line-height-base: 1.5;
  --letter-spacing-base: 0;

  /* Focus Indicators */
  --focus-width: 2px;
  --border-radius: 0.625rem;
}
```

### Professional Theme Variables
```css
.professional {
  /* Primary Colors */
  --primary: oklch(0.25 0.15 230); /* Navy blue */
  --primary-foreground: oklch(0.95 0 0);

  /* Secondary Colors */
  --secondary: oklch(0.35 0.10 220); /* Slate gray */
  --secondary-foreground: oklch(0.95 0 0);

  /* Interactive States */
  --accent: oklch(0.70 0.20 65); /* Gold accents */
  --accent-foreground: oklch(0.10 0 0);

  /* Touch Targets */
  --min-touch-target: 40px;
  --button-padding-x: 16px;
  --button-padding-y: 8px;

  /* Typography */
  --font-size-base: 14px;
  --line-height-base: 1.4;
  --letter-spacing-base: 0.01em;

  /* Focus Indicators */
  --focus-width: 1px;
  --border-radius: 0.5rem;
}
```

## Accessibility Contract

### Contrast Requirements
All theme color pairs must meet minimum contrast ratios:
- **Foundation**: 7:1 for enhanced readability
- **Pathways**: 4.5:1 WCAG AA compliance
- **Professional**: 4.5:1 WCAG AA compliance

### Touch Target Requirements
Minimum touch target sizes by theme:
- **Foundation**: 48px × 48px minimum
- **Pathways**: 44px × 44px standard
- **Professional**: 40px × 40px compact

### Focus Indicator Requirements
Focus ring specifications by theme:
- **Foundation**: 3px width, high contrast
- **Pathways**: 2px width, balanced contrast
- **Professional**: 1px width, subtle contrast

## Storage Contract

### LocalStorage Schema
**Key**: `nola-theme`
**Values**: `'light' | 'dark' | 'foundation' | 'pathways' | 'professional'`
**Default**: `'light'`

**Example**:
```typescript
localStorage.setItem('nola-theme', 'foundation');
const currentTheme = localStorage.getItem('nola-theme'); // 'foundation'
```

## Storybook Integration Contract

### Theme Toolbar
Storybook must provide theme switching toolbar with options:
- Light (Default shadcn/ui)
- Dark (Default shadcn/ui)
- Foundation (Ages 11-14)
- Pathways (Ages 14-18)
- Professional (Ages 18+)

### Story Decoration
All stories inherit theme context automatically:
```typescript
export const decorators = [
  (Story) => (
    <ThemeProvider themes={['light', 'dark', 'foundation', 'pathways', 'professional']}>
      <Story />
    </ThemeProvider>
  ),
];
```

## Error Handling

### Invalid Theme Selection
```typescript
// Invalid theme names default to 'light'
setTheme('invalid'); // Fallback to 'light' theme
```

### Missing CSS Variables
```css
/* Fallback values required for all custom properties */
.theme-class {
  --primary: var(--primary, oklch(0.2 0 0)); /* fallback to dark gray */
}
```

### Storage Failures
```typescript
// localStorage failures should not break theme switching
try {
  localStorage.setItem('nola-theme', theme);
} catch {
  // Continue with in-memory theme state
}
```

---
*Theme API contract complete - Ready for quickstart guide*