# Data Model: Educational Theme System

## Core Entities

### Theme
**Description**: A complete set of educational design tokens that transform UI component appearance
**Storage**: CSS custom properties in globals.css, theme names in next-themes configuration

**Properties**:
- `name`: string - Theme identifier ('foundation', 'pathways', 'professional')
- `displayName`: string - Human readable name ('Foundation', 'Pathways', 'Professional')
- `ageGroup`: string - Target age group ('11-14', '14-18', '18+')
- `colorTokens`: ColorTokens - Color design tokens
- `typographyTokens`: TypographyTokens - Typography design tokens
- `spacingTokens`: SpacingTokens - Spacing and sizing tokens
- `interactionTokens`: InteractionTokens - Interactive state tokens
- `accessibilityTokens`: AccessibilityTokens - Accessibility-specific tokens

**Validation Rules**:
- Theme name must be unique and lowercase
- All color tokens must meet WCAG 2.1 AA contrast requirements
- Touch targets must meet age-appropriate minimum sizes
- Typography scales must maintain readability

**State Transitions**:
- Default → Foundation/Pathways/Professional (theme selection)
- Any theme → Any other theme (theme switching)
- Theme selection persists in localStorage

### ColorTokens
**Description**: Color design token values for a specific educational theme

**Properties**:
- `primary`: string - Primary brand color (oklch format)
- `primaryForeground`: string - Primary text color
- `secondary`: string - Secondary accent color
- `secondaryForeground`: string - Secondary text color
- `background`: string - Main background color
- `foreground`: string - Main text color
- `muted`: string - Muted background color
- `mutedForeground`: string - Muted text color
- `accent`: string - Accent color for highlights
- `accentForeground`: string - Accent text color
- `destructive`: string - Error/warning color
- `border`: string - Border color
- `input`: string - Form input border color
- `ring`: string - Focus ring color
- `card`: string - Card background color
- `cardForeground`: string - Card text color
- `popover`: string - Popover background color
- `popoverForeground`: string - Popover text color

**Theme-Specific Values**:
- **Foundation**: Vibrant blues, warm purples, soft greens
- **Pathways**: Modern teals, deep purples, energetic corals
- **Professional**: Navy blues, slate grays, gold accents

### TypographyTokens
**Description**: Typography design token values for educational appropriateness

**Properties**:
- `baseFontSize`: string - Root font size ('16px', '15px', '14px')
- `lineHeight`: number - Base line height ratio (1.6, 1.5, 1.4)
- `letterSpacing`: string - Character spacing ('-0.01em', '0', '0.01em')
- `fontWeight`: object - Weight scale adjustments
- `headingScale`: object - Heading size multipliers

**Age-Appropriate Scaling**:
- **Foundation**: 16px base, 1.6 line height, relaxed spacing
- **Pathways**: 15px base, 1.5 line height, balanced spacing
- **Professional**: 14px base, 1.4 line height, compact spacing

### SpacingTokens
**Description**: Spacing and sizing tokens for touch targets and layout

**Properties**:
- `minTouchTarget`: string - Minimum touch target size ('48px', '44px', '40px')
- `baseSpacing`: string - Base spacing unit ('1rem', '0.875rem', '0.75rem')
- `buttonPadding`: object - Button padding values
- `formSpacing`: object - Form element spacing
- `cardPadding`: object - Card content padding

**Educational Requirements**:
- **Foundation**: 48px minimum touch targets, generous spacing
- **Pathways**: 44px standard touch targets, balanced spacing
- **Professional**: 40px compact touch targets, efficient spacing

### InteractionTokens
**Description**: Interactive state design tokens

**Properties**:
- `borderRadius`: string - Corner radius ('0.75rem', '0.625rem', '0.5rem')
- `focusWidth`: string - Focus indicator width ('3px', '2px', '1px')
- `shadowIntensity`: number - Drop shadow opacity (0.15, 0.1, 0.05)
- `transitionDuration`: string - Animation timing ('200ms', '150ms', '100ms')
- `hoverScale`: number - Hover transform scale (1.02, 1.01, 1.005)

**Age-Appropriate Feedback**:
- **Foundation**: Prominent interactions, clear feedback, slower transitions
- **Pathways**: Balanced interactions, modern feedback, standard timing
- **Professional**: Subtle interactions, efficient feedback, fast transitions

### AccessibilityTokens
**Description**: Accessibility-specific design tokens

**Properties**:
- `contrastRatio`: number - Minimum contrast ratio (7.0, 4.5, 4.5)
- `focusIndicator`: object - Focus ring specifications
- `reducedMotion`: boolean - Respect motion preferences
- `highContrast`: boolean - Support high contrast mode
- `screenReaderText`: object - Screen reader optimization

**Educational Standards**:
- **Foundation**: Enhanced contrast, large focus indicators, clear hierarchies
- **Pathways**: Standard accessibility with modern patterns
- **Professional**: Efficient accessibility for information density

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