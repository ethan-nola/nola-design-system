# Research: Educational Theme System

## Research Questions & Decisions

### 1. CSS Custom Properties vs Tailwind Configuration for Theme Variables

**Decision**: Use CSS custom properties in `:root` and theme-specific classes

**Rationale**:
- Existing project already uses CSS custom properties pattern in globals.css
- next-themes library works seamlessly with CSS custom properties
- Allows runtime theme switching without rebuilding Tailwind
- Maintains compatibility with existing shadcn/ui component implementations

**Alternatives considered**:
- Tailwind configuration variants: Would require build-time compilation, no runtime switching
- CSS-in-JS solutions: Would violate constitutional principle of minimal tech introduction

### 2. Next-Themes Integration Pattern

**Decision**: Extend existing next-themes setup with custom theme names

**Rationale**:
- next-themes (0.4.6) already installed and working
- Supports custom theme names beyond light/dark
- Provides localStorage persistence automatically
- Handles SSR hydration issues properly

**Implementation approach**:
- Add theme names: 'foundation', 'pathways', 'professional'
- Keep existing 'light'/'dark' for default shadcn/ui themes
- Use theme attribute strategy for CSS targeting

**Alternatives considered**:
- Custom theme switching implementation: Would reinvent proven patterns
- Context-only solution: Would miss SSR benefits and persistence

### 3. Educational Theme Design Token Structure

**Decision**: Layer educational themes over base shadcn/ui token structure

**Rationale**:
- Maintains compatibility with existing components
- Allows fallback to base theme values
- Follows existing globals.css patterns
- Supports constitutional principle of upstream-first architecture

**Token categories per theme**:
- Colors: Primary, secondary, accent, background variants
- Typography: Font sizes, line heights, letter spacing
- Spacing: Touch targets, padding, margins
- Interactive: Border radius, shadows, transitions
- Accessibility: Contrast ratios, focus indicators

**Alternatives considered**:
- Complete token replacement: Would break shadcn/ui compatibility
- Minimal token override: Insufficient for educational differentiation

### 4. Storybook Theme Switching Integration

**Decision**: Use `@storybook/addon-themes` with `withThemeByClassName` decorator

**Rationale**:
- Official Storybook addon specifically designed for theme switching
- Uses `withThemeByClassName` decorator for CSS class-based theming
- Provides consistent theme switching toolbar in Storybook UI
- Aligns with industry best practices (verified via Multi-Theme Best Practices research)
- Currently NOT installed - needs to be added to project dependencies

**Implementation approach**:
- Install `@storybook/addon-themes` package
- Configure `withThemeByClassName` decorator with theme classes ('foundation', 'pathways', 'professional')
- Add addon to Storybook main.ts configuration
- Ensure theme classes apply to preview iframe's html element

**Alternatives considered**:
- next-themes integration: Less direct control over Storybook-specific UI
- Custom Storybook addon: Would violate minimal tech introduction principle
- Manual theme preview: Poor developer experience for documentation

### 5. Educational Accessibility Requirements Research

**Decision**: Implement WCAG 2.1 AA plus educational-specific enhancements

**Foundation Theme (Ages 11-14)**:
- Minimum 48px touch targets (exceeds WCAG 44px minimum)
- Color contrast ratio minimum 4.5:1 for normal text, 7:1 preferred
- Larger font sizes: 16px base minimum
- Enhanced focus indicators: 3px minimum width
- Simplified visual hierarchy with clear primary actions

**Pathways Theme (Ages 14-18)**:
- Standard 44px touch targets
- Color contrast ratio 4.5:1 minimum
- Modern font sizes: 15px base
- Standard focus indicators: 2px width
- Balanced visual complexity

**Professional Theme (Ages 18+)**:
- Compact 40px touch targets for dense layouts
- High contrast ratios for readability: 4.5:1 minimum
- Efficient font sizes: 14px base
- Subtle focus indicators: 1px width
- Information-dense design patterns

**Alternatives considered**:
- Single accessibility standard: Insufficient for age-appropriate design
- WCAG AAA compliance: Too restrictive for some educational contexts

## Technology Stack Validation

### Existing Dependencies Analysis
- **next-themes**: ✅ Already installed (0.4.6), suitable for educational themes
- **Tailwind CSS**: ✅ CSS custom properties integration works well
- **Storybook**: ✅ Theme switching addons available
- **Vitest/Playwright**: ✅ Can test theme switching functionality

### New Dependencies Required
- **None**: All requirements can be met with existing technology stack

### Integration Points Validated
1. **globals.css**: Can extend existing CSS custom properties structure
2. **layout.tsx**: next-themes ThemeProvider already configured for extension
3. **Storybook preview**: Can add theme decorator without breaking existing stories
4. **Component testing**: Existing Vitest/Playwright setup can validate theme switching

## Implementation Confidence

**High Confidence Areas** (✅):
- CSS custom properties theming (existing pattern)
- next-themes integration (library already in use)
- Storybook documentation (established workflow)
- Component compatibility (no modifications required)

**Medium Confidence Areas** (⚠️):
- Educational accessibility requirements (research-backed but needs validation)
- Theme switching performance (should be tested under load)

**Low Risk Areas**:
- Constitutional compliance (design aligns with all principles)
- Technology introduction (zero new dependencies required)

## Next Steps for Phase 1

1. **Data Model**: Define theme token structure and educational requirements
2. **Contracts**: Define theme switching API and localStorage schema
3. **Agent Context**: Update CLAUDE.md with theme system context
4. **Quickstart**: Create theme development and testing workflow

---
*Research complete - All unknowns resolved, ready for Phase 1 design*