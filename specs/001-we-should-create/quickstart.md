# Quickstart: Educational Theme Development

## Prerequisites
- NOLA Design System repository cloned and set up
- Bun installed (or npm as fallback)
- Basic understanding of CSS custom properties
- Familiarity with next-themes library

## Development Environment Setup

### 1. Start Development Servers
```bash
# Terminal 1: Start Next.js development server
bun dev

# Terminal 2: Start Storybook documentation
bun storybook
```

### 2. Verify Current State
- Next.js app: http://localhost:3000
- Storybook docs: http://localhost:6006
- Confirm existing light/dark theme switching works

## Phase 1: Foundation Theme Implementation

### 1. Add Foundation Theme CSS
**File**: `app/globals.css`
**Location**: After existing `.dark` theme definition

```css
.foundation {
  --background: oklch(0.98 0.05 220);
  --foreground: oklch(0.15 0 0);
  --primary: oklch(0.45 0.25 220);
  --primary-foreground: oklch(0.95 0 0);
  --secondary: oklch(0.65 0.20 280);
  --secondary-foreground: oklch(0.95 0 0);
  /* ... additional tokens ... */

  --min-touch-target: 48px;
  --font-size-base: 16px;
  --line-height-base: 1.6;
  --focus-width: 3px;
  --border-radius: 0.75rem;
}
```

### 2. Update next-themes Configuration
**File**: `app/layout.tsx` (or theme provider location)

```typescript
<ThemeProvider
  attribute="class"
  themes={['light', 'dark', 'foundation']}
  defaultTheme="light"
  enableSystem
>
  {children}
</ThemeProvider>
```

### 3. Test Foundation Theme
```bash
# In browser dev tools console
document.documentElement.className = 'foundation'

# Or programmatically
import { useTheme } from 'next-themes'
const { setTheme } = useTheme()
setTheme('foundation')
```

### 4. Verify Component Rendering
Navigate through existing components and confirm:
- ✅ Larger touch targets on buttons and form inputs
- ✅ Higher contrast colors throughout interface
- ✅ Vibrant blue/purple/green color scheme
- ✅ Larger base font size (16px)
- ✅ More prominent focus indicators

## Phase 2: Pathways Theme Implementation

### 1. Add Pathways Theme CSS
**File**: `app/globals.css`

```css
.pathways {
  --background: oklch(0.99 0.02 185);
  --foreground: oklch(0.15 0 0);
  --primary: oklch(0.50 0.20 185);
  --primary-foreground: oklch(0.95 0 0);
  --secondary: oklch(0.40 0.25 270);
  --secondary-foreground: oklch(0.95 0 0);
  /* ... additional tokens ... */

  --min-touch-target: 44px;
  --font-size-base: 15px;
  --line-height-base: 1.5;
  --focus-width: 2px;
  --border-radius: 0.625rem;
}
```

### 2. Update Themes Array
```typescript
themes={['light', 'dark', 'foundation', 'pathways']}
```

### 3. Test Pathways Theme
```typescript
setTheme('pathways')
```

### 4. Verify Modern Design Patterns
- ✅ Teal/purple/coral color scheme
- ✅ Balanced touch targets and spacing
- ✅ Contemporary typography (15px base)
- ✅ Standard accessibility features

## Phase 3: Professional Theme Implementation

### 1. Add Professional Theme CSS
**File**: `app/globals.css`

```css
.professional {
  --background: oklch(1 0 0);
  --foreground: oklch(0.12 0 0);
  --primary: oklch(0.25 0.15 230);
  --primary-foreground: oklch(0.95 0 0);
  --secondary: oklch(0.35 0.10 220);
  --secondary-foreground: oklch(0.95 0 0);
  /* ... additional tokens ... */

  --min-touch-target: 40px;
  --font-size-base: 14px;
  --line-height-base: 1.4;
  --focus-width: 1px;
  --border-radius: 0.5rem;
}
```

### 2. Complete Themes Configuration
```typescript
themes={['light', 'dark', 'foundation', 'pathways', 'professional']}
```

### 3. Test Professional Theme
```typescript
setTheme('professional')
```

### 4. Verify Information-Dense Design
- ✅ Navy/slate/gold color scheme
- ✅ Compact touch targets and spacing
- ✅ Efficient typography (14px base)
- ✅ Subtle, professional interactions

## Phase 4: Storybook Integration

### 1. Update Storybook Preview
**File**: `.storybook/preview.ts`

```typescript
import { ThemeProvider } from 'next-themes'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider
        attribute="class"
        themes={['light', 'dark', 'foundation', 'pathways', 'professional']}
        defaultTheme="light"
      >
        <Story />
      </ThemeProvider>
    ),
  ],
  // ... existing configuration
}
```

### 2. Add Theme Switching Toolbar
**File**: `.storybook/preview.ts` (parameters section)

```typescript
parameters: {
  backgrounds: { disable: true }, // Disable default backgrounds
  theme: {
    values: [
      { name: 'Light', value: 'light' },
      { name: 'Dark', value: 'dark' },
      { name: 'Foundation', value: 'foundation' },
      { name: 'Pathways', value: 'pathways' },
      { name: 'Professional', value: 'professional' },
    ],
    default: 'light',
  },
}
```

### 3. Test Storybook Theme Switching
1. Open Storybook (http://localhost:6006)
2. Navigate to any component story
3. Use theme switcher in toolbar
4. Verify all themes apply correctly to story previews

## Phase 5: Theme Switching UI (Optional)

### Add Theme Selector Component
**File**: `components/theme-selector.tsx`

```typescript
'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeSelector() {
  const { theme, setTheme, themes } = useTheme()

  return (
    <div className="flex gap-2">
      {themes?.map((t) => (
        <Button
          key={t}
          variant={theme === t ? 'default' : 'outline'}
          size="sm"
          onClick={() => setTheme(t)}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </Button>
      ))}
    </div>
  )
}
```

## Validation Checklist

### ✅ Theme Implementation
- [ ] Foundation theme CSS variables defined
- [ ] Pathways theme CSS variables defined
- [ ] Professional theme CSS variables defined
- [ ] All themes added to ThemeProvider configuration
- [ ] Theme persistence working via localStorage

### ✅ Component Compatibility
- [ ] All existing buttons respect theme touch targets
- [ ] Form inputs scale appropriately per theme
- [ ] Color contrast meets accessibility requirements
- [ ] Typography scales work across all components
- [ ] Focus indicators display correctly per theme

### ✅ Storybook Integration
- [ ] Theme switcher appears in Storybook toolbar
- [ ] All component stories render correctly in each theme
- [ ] Theme changes apply immediately in story previews
- [ ] No component stories break with educational themes

### ✅ Accessibility Validation
- [ ] Foundation theme meets enhanced contrast requirements
- [ ] Touch targets meet age-appropriate minimums
- [ ] Focus indicators are visible and appropriate
- [ ] Typography remains readable across all themes
- [ ] Color-blind accessibility maintained

### ✅ Performance Validation
- [ ] Theme switching is instantaneous (no flicker)
- [ ] CSS bundle size impact is minimal
- [ ] localStorage persistence works reliably
- [ ] SSR hydration works without theme mismatch

## Troubleshooting

### Theme Not Applying
1. Check browser dev tools for HTML class attribute
2. Verify CSS custom property values in computed styles
3. Confirm ThemeProvider wraps entire component tree
4. Test localStorage persistence in dev tools Application tab

### Component Styles Not Updating
1. Ensure components use CSS custom properties, not hardcoded values
2. Check for CSS specificity issues overriding theme variables
3. Verify component classes inherit theme context properly

### Storybook Integration Issues
1. Clear Storybook cache: `bun storybook --no-manager-cache`
2. Verify theme decorator wraps all stories
3. Check for conflicting background or theme addons

---
*Quickstart guide complete - Ready for implementation*