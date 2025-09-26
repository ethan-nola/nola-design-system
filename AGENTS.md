# AGENTS.md

## Project Overview

This is a shadcn/ui Storybook registry focused on component documentation and
distribution. Development centers on the `registry/` directory for Storybook
stories that serve both documentation and installable component purposes.

## Quick Commands

### Development
- **Dev server**: `bun run storybook` (port 6006)
- **Build**: `bun run build` (builds Next.js app + Storybook)
- **Lint**: `bun run lint`
- **Type check**: `bun run type-check`
- **Format**: `bun run format:write`

### Testing
- **Test all**: `bun run test` (includes constitutional compliance)
- **Test Storybook**: `bun run test:storybook` (browser tests)
- **Test unit**: `bun run test:unit`
- **Constitutional compliance**: `bun run test:constitutional` ⚠️ **CRITICAL**
- **Compliance report**: `bun run test:constitutional:report`

## Registry Development

### File Structure

- Stories: `registry/*.stories.tsx` for UI components
- Design tokens: `registry/tokens/*.stories.tsx` for Tailwind CSS token
  documentation
- Registry config: `registry.json` maps stories to dependencies

### Story Categories

- `ui/ComponentName` - Core shadcn/ui components
- `design/TokenName` - Design token documentation (color, typography, spacing,
  etc.)

### Story Naming & Documentation

- Follow existing JSDoc comment pattern for each story export
- Example:
  `/** Use the 'outline' button to reduce emphasis on secondary actions */`
- Main component gets descriptive JSDoc explaining overall purpose

## Storybook Conventions

### Story Structure

```typescript
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Component } from "@/components/ui/component";

const meta: Meta<typeof Component> = {
  title: "ui/Component",
  component: Component,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    // Default args here unless story needs variants
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;
```

### Required Stories

- `Default`: Basic component usage
- Interactive components with state changes need `play` function test stories
- Common variants: Loading, Disabled, Small, Large, WithIcon as applicable

### Testing Stories

- Use `tags: ["!dev", "!autodocs"]` for test-only stories
- Include both success and error case tests for forms/validation
- Use `play` functions with `userEvent` and `expect` for interactions

## Code Style

### Imports

- **Always use**: `@/components/ui/` imports (required for registry build)
- **Framework**: `@storybook/nextjs-vite` for type imports
- **Icons**: `lucide-react` for consistent iconography

### TypeScript

- Use `satisfies Meta<typeof Component>` for type safety
- Prefer explicit types over `any`
- Define schemas with `zod` for forms

## Registry System

### Dependencies

- `registryDependencies`: shadcn/ui components (e.g., `["button", "form"]`)
- `dependencies`: External npm packages (e.g., `["lucide-react", "zod"]`)

### Registry Entry

Each story needs corresponding entry in `registry.json`:

```json
{
  "name": "component-story",
  "title": "Component Story",
  "type": "registry:ui",
  "meta": { "type": "ui", "story": "ui-component" },
  "registryDependencies": ["component"],
  "dependencies": ["external-lib"],
  "files": [{ "path": "registry/component.stories.tsx", "type": "registry:ui" }]
}
```

## Testing Strategy

### Core Testing
- **Storybook tests**: Browser-based with Playwright
- **Accessibility**: a11y addon configured with 'todo' level
- **Visual testing**: Stories serve as visual regression tests

### Constitutional Compliance Testing ⚠️ **MANDATORY**

**CRITICAL for AI Agents**: Always run constitutional compliance tests before extensive design system work.

```bash
# Before starting significant architectural changes
bun run test:constitutional

# Generate detailed violation analysis
bun run test:constitutional:report
```

**5 Enforced Constitutional Principles:**
1. **Upstream-First Component Architecture** - Prevents shadcn/ui compatibility violations
2. **Theme-Component Separation** - Blocks theme logic in component code
3. **Registry Publishing Compliance** - Ensures proper theme distribution
4. **Research-Driven Development** - Validates educational decisions
5. **Quality-First Implementation** - Prevents technical debt accumulation

**When Constitutional Testing is Required:**
- Before modifying core components in `components/ui/`
- When adding or changing educational themes
- After architectural refactoring
- Before committing extensive changes
- When working on registry system

**Automated Safeguards:**
- Pre-commit hooks block critical constitutional violations
- CI/CD validates compliance on every push
- Failed constitutional tests prevent merging to main branch

### Quality Assurance Workflow
- Run `bun run test:constitutional` before extensive work
- Run `bun run lint && bun run type-check` before completing tasks
- Generate compliance report for detailed analysis when needed

## Common Patterns

### Form Components

- Use `react-hook-form` with `zod` validation
- Include both success/error test scenarios
- Use `action()` from Storybook for form submissions

### Charts

- Use `recharts` with `ChartContainer` wrapper
- Define `ChartConfig` for consistent theming
- Support responsive design

### Design Tokens

- Use `getComputedStyle()` to read CSS custom properties
- Display both CSS variable names and computed values
- Organize by functional vs component token types
- **Theme Reactivity**: Components displaying CSS custom properties must implement theme switching reactivity (see below)

### Theme Switching & CSS Custom Properties

**Problem**: React components using `getComputedStyle()` to read CSS variables don't automatically re-render when Storybook theme switching changes the CSS custom properties.

**Solution**: Use MutationObserver pattern to watch for theme class/attribute changes:

```typescript
import { useEffect, useReducer } from 'react';

const SwatchList = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  
  useEffect(() => {
    const observer = new MutationObserver(() => {
      forceUpdate(); // Re-render when theme classes change
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Now getComputedStyle() calls will reflect current theme
  const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary');
};
```

**Industry Validation**: This is the standard, production-proven approach used by major design systems (IBM Carbon, Material-UI, Mantine). It's officially recommended by Storybook for CSS custom property reactivity.

**Reference**: See `STORYBOOK_SOLUTION_ANALYSIS.md` for comprehensive industry research and validation.

## Important Notes

### Development Focus
- **Focus on registry development**: Only work on `registry/` directory and Storybook files
- **Maintain consistency**: Follow existing patterns in story structure and naming
- **Test interactivity**: Add play functions for components with state changes
- **Registry dependencies**: Use correct dependency types (registry vs npm)
- **Always use @/ imports**: Required for registry build system

### Constitutional Compliance Requirements ⚠️ **CRITICAL**

**MANDATORY for AI Agents working on this design system:**

1. **Before Starting Work**: Run `bun run test:constitutional` to establish baseline
2. **During Development**: Constitutional tests should pass continuously
3. **Before Completion**: Generate compliance report with `bun run test:constitutional:report`
4. **Architecture Changes**: Any component or theme modifications require constitutional validation

**Violation Response Protocol:**
- If constitutional tests fail, address violations before proceeding
- Use compliance report to understand specific architectural issues
- Never disable or bypass constitutional compliance checks
- Seek clarification if constitutional principles conflict with requirements

**Educational Mission Alignment:**
- All work must support K-12 and post-graduate educational contexts
- Maintain age-appropriate design patterns across Foundation, Pathways, Professional themes
- Preserve WCAG AA accessibility compliance
- Ensure registry-first distribution for educational theme consumption

Always maintain consistency with existing patterns, pass constitutional compliance tests, and run quality checks before completion.
