# Data Model: Educational Theme System

## Core Entities

### Theme
**Description**: A complete set of educational design tokens that transform UI component appearance
**Storage**: CSS custom properties in globals.css, theme names in next-themes configuration
**Architecture**: 3-tier token structure (Raw → Semantic → Component)

**Properties**:
- `name`: string - Theme identifier ('foundation', 'pathways', 'professional')
- `displayName`: string - Human readable name ('Foundation', 'Pathways', 'Professional')
- `ageGroup`: string - Target age group ('11-14', '14-18', '18+')
- `version`: string - Theme version for compatibility tracking
- `rawTokens`: RawTokens - Tier 1: Base values (colors, sizes)
- `semanticTokens`: SemanticTokens - Tier 2: Theme-specific mappings
- `componentTokens`: ComponentTokens - Tier 3: Component-level overrides (optional)
- `extensionPoints`: string[] - Documented tokens safe for consumer override

**Validation Rules**:
- Theme name must be unique and lowercase
- All color tokens must meet WCAG 2.1 AA contrast requirements
- Touch targets must meet age-appropriate minimum sizes
- Typography scales must maintain readability

**State Transitions**:
- Default → Foundation/Pathways/Professional (theme selection)
- Any theme → Any other theme (theme switching)
- Theme selection persists in localStorage

### RawTokens
**Description**: Tier 1 - Raw design values that form the foundation of all themes

**Properties**:
- `colors`: object - Base color palette (e.g., `blue500: oklch(...)`, `purple500: oklch(...)`)
- `fontSizes`: object - Base font size scale (e.g., `sm: 14px`, `base: 16px`, `lg: 18px`)
- `spacing`: object - Base spacing scale (e.g., `1: 4px`, `2: 8px`, `3: 12px`)
- `borderRadius`: object - Base radius values (e.g., `sm: 4px`, `md: 8px`, `lg: 12px`)
- `shadows`: object - Base shadow definitions
- `breakpoints`: object - Screen size breakpoints

### SemanticTokens
**Description**: Tier 2 - Theme-specific semantic mappings that reference raw tokens

**Properties**:
- `primary`: string - Maps to raw color (e.g., `var(--blue-500)`)
- `primaryForeground`: string - Contrasting text color
- `secondary`: string - Secondary color mapping
- `secondaryForeground`: string - Secondary text color
- `background`: string - Theme background color
- `foreground`: string - Theme text color
- `accent`: string - Accent color mapping
- `destructive`: string - Error color mapping
- `baseFontSize`: string - Theme-specific base size
- `minTouchTarget`: string - Age-appropriate touch target size
- `focusWidth`: string - Theme-appropriate focus indicator width

**Theme-Specific Mappings**:
- **Foundation**: `primary: var(--blue-500)`, `minTouchTarget: 48px`
- **Pathways**: `primary: var(--teal-500)`, `minTouchTarget: 44px`
- **Professional**: `primary: var(--navy-600)`, `minTouchTarget: 40px`

### ComponentTokens
**Description**: Tier 3 - Component-level token overrides (optional layer for complex components)

**Properties**:
- `buttonPrimaryBg`: string - Button-specific background override
- `cardBorderRadius`: string - Card-specific radius override
- `inputFocusRing`: string - Input-specific focus style
- `navigationHeight`: string - Navigation component height

**Usage**: Only needed for components requiring theme-specific behavior beyond semantic tokens


## Relationships

### Theme → Tokens (1:1)
Each theme has exactly one set of each token type. Tokens are embedded within theme definitions to maintain atomic theme switching.

### Theme → Storage (1:1)
Each theme maps to one CSS custom properties definition in globals.css and one localStorage entry for persistence.

### Theme → Components (1:Many)
Each theme applies to all existing shadcn/ui components without modification. Components consume tokens through CSS custom properties.

## Validation Rules

### Color Contrast Validation
```typescript
// All color pairs must meet WCAG contrast requirements
validateContrast(foreground: string, background: string, level: 'AA' | 'AAA'): boolean
```

### Touch Target Validation
```typescript
// Touch targets must meet educational age requirements
validateTouchTarget(size: string, theme: ThemeName): boolean
```

### Typography Validation
```typescript
// Typography must maintain readability across age groups
validateTypography(tokens: TypographyTokens, ageGroup: string): boolean
```

## State Management

### Theme Selection State
- **Storage**: localStorage key 'nola-theme'
- **Default**: 'light' (base shadcn/ui theme)
- **Values**: 'light' | 'dark' | 'foundation' | 'pathways' | 'professional'
- **Persistence**: Automatic via next-themes
- **Hydration**: Handled by next-themes SSR support

### Theme Application State
- **CSS Variables**: Applied via document class names
- **Storybook**: Synchronized via theme decorator
- **Component Props**: No theme props needed (CSS inheritance)

---
*Data model complete - Ready for contract generation*