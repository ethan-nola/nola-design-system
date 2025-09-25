# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is the **NOLA Design System** - a comprehensive educational design system built for NOLA Education. It provides age-appropriate, accessible UI components with interactive Storybook documentation and a distributable component registry. Stories are located in the `registry/` directory and are built into a registry format that can be consumed via the shadcn CLI.

**Architecture:**
- **Framework:** Next.js with TypeScript
- **Package Manager:** Bun (preferred, as evidenced by `bun.lock`)
- **Storybook:** v9.x with Next.js Vite builder
- **Testing:** Vitest with Playwright for browser-based component tests
- **Styling:** Tailwind CSS with NOLA educational design system themes
- **Registry System:** Custom registry built via `shadcn build` command

## Quick Start

1. **Install bun (if not already installed):**
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```
   Or use npm as alternative (though bun is preferred for this project)

2. **Install dependencies:**
   ```bash
   bun install
   # or: npm install
   ```

3. **Start development servers:**
   ```bash
   # Next.js app (registry viewer)
   bun dev          # or: npm run dev

   # Storybook (component documentation)
   bun storybook    # or: npm run storybook
   ```

4. **Build registry:**
   ```bash
   bun registry:build    # or: npm run registry:build
   ```

## Development Commands

### Core Development
- `bun dev` (or `npm run dev`) - Start Next.js development server with Turbopack
- `bun build` (or `npm run build`) - Build Next.js app and Storybook for production
- `bun start` (or `npm run start`) - Start production Next.js server

### Storybook
- `bun storybook` (or `npm run storybook`) - Start Storybook dev server on port 6006
- `bun storybook:build` (or `npm run storybook:build`) - Build static Storybook to `public/storybook`
- `bun storybook:test` (or `npm run storybook:test`) - Run Storybook test-runner

### Testing
- `bun test` (or `npm test`) - Run all tests (unit + Storybook)
- `bun test:unit` (or `npm run test:unit`) - Run unit tests only
- `bun test:storybook` (or `npm run test:storybook`) - Run Storybook component tests with Playwright

### Code Quality
- `bun lint` (or `npm run lint`) - Run ESLint
- `bun type-check` (or `npm run type-check`) - Run TypeScript compiler checks
- `bun format:write` (or `npm run format:write`) - Format code with Prettier
- `bun format:check` (or `npm run format:check`) - Check code formatting

### Registry Management
- `bun registry:build` (or `npm run registry:build`) - Build registry to `./public/v2/r`
- `bun registry:dev` (or `npm run registry:dev`) - Build registry in watch mode

## Project Structure

```
registry/
├── ui/                    # UI component stories
│   ├── button-story/      # Each component has its own directory
│   │   └── button.stories.tsx
│   └── ...
└── tokens/               # Design token documentation
    ├── color-story/
    │   └── color.stories.tsx
    └── ...

components/ui/            # shadcn/ui components
.storybook/              # Storybook configuration
app/                     # Next.js app for registry viewer
registry.json            # Registry manifest
components.json          # shadcn/ui configuration
```

## Story Development Workflow

### Creating New Stories

1. **Create story directory:**
   ```bash
   mkdir registry/ui/component-name-story
   ```

2. **Write story file:**
   - Use `@storybook/nextjs-vite` types
   - Import from `@/components/ui/component-name`
   - Follow JSDoc pattern for story descriptions
   - Include common variants: Default, Loading, Disabled, etc.

3. **Update registry.json:**
   - Add entry with dependencies
   - Use `registryDependencies` for shadcn/ui components
   - Use `dependencies` for npm packages

4. **Test story:**
   ```bash
   bun storybook          # or: npm run storybook
   bun test:storybook     # or: npm run test:storybook
   ```

### Story Structure Template

```typescript
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Component } from "@/components/ui/component";

/**
 * Brief description of the component's purpose
 */
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

/**
 * Brief description of this story variant
 */
export const Default: Story = {};
```

### Required Stories

Each component story should include:
- **Default**: Basic component usage
- **Interactive components**: Add `play` function test stories for state changes
- **Common variants**: Loading, Disabled, Small, Large, WithIcon (as applicable)

### Story Categories & Naming

- **UI Components**: `ui/ComponentName` - Core shadcn/ui components
- **Design Tokens**: `design/TokenName` - Color, typography, spacing documentation
- **Educational Themes**: `themes/ThemeName` - NOLA educational theme variants

**JSDoc Documentation:**
- Follow existing JSDoc comment pattern for each story export
- Example: `/** Use the 'outline' button to reduce emphasis on secondary actions */`
- Main component gets descriptive JSDoc explaining overall purpose

### Design Token Stories

Design token stories (in `registry/tokens/`) document CSS custom properties:
- Use `getComputedStyle()` to read actual values
- Display both CSS variable names and computed colors/values
- Group by functional vs component tokens

## Testing Strategy

- **Unit Tests:** Basic component functionality
- **Storybook Tests:** Browser-based interaction testing with Playwright
- **Accessibility:** Built-in a11y addon checks
- **Visual Regression:** Stories serve as visual baselines

Tests run in Chromium via Playwright browser provider.

### Interactive Testing

**Test-only Stories:**
- Use `tags: ["!dev", "!autodocs"]` for test-only stories
- Include both success and error case tests for forms/validation

**Play Functions:**
- Use `play` functions with `userEvent` and `expect` for interactions
- Test components with state changes and user interactions
- Example:
```typescript
export const InteractiveTest: Story = {
  tags: ["!dev", "!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(button).toBeDisabled();
  }
};
```

## Registry System

The registry allows components to be installed via shadcn CLI:

```bash
# Install from NOLA Design System registry
npx shadcn@latest add @nola/button-story

# Install educational themes
npx shadcn@latest add @nola/theme-foundation
npx shadcn@latest add @nola/theme-pathways
npx shadcn@latest add @nola/theme-professional

# Or direct URL (when deployed)
npx shadcn@latest add https://registry.nolaeducation.org/v2/r/button-story.json
```

**Registry Configuration:**
- `registry.json` - Manifest of all installable components
- `components.json` - shadcn/ui configuration with aliases
- `shadcn build` - Generates registry files in `public/v2/r`

### Registry Entry Format

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

**Dependencies:**
- `registryDependencies`: shadcn/ui components (e.g., `["button", "form"]`)
- `dependencies`: External npm packages (e.g., `["lucide-react", "zod"]`)

## Environment & Deployment

- **Development Ports:**
  - Next.js: http://localhost:3000
  - Storybook: http://localhost:6006

- **Build Outputs:**
  - Registry: `public/v2/r/`
  - Storybook: `public/storybook/`
  - Next.js: `.next/`

## Troubleshooting

### Common Issues

1. **Storybook build fails:**
   - Ensure all `@/components/ui/*` imports are valid
   - Check that `registryDependencies` in `registry.json` match actual files

2. **Registry build fails:**
   - Verify `registry.json` syntax
   - Ensure all referenced story files exist
   - Check that dependencies are properly declared

3. **Test failures:**
   - Storybook tests require stories to be built first
   - Browser tests may be flaky - check for async interactions

### Development Tips

- Always use `@/components/ui/*` imports in stories (required for registry build)
- Use `lucide-react` for consistent iconography
- Include interactive `play` functions for stateful components
- Tag test-only stories with `["!dev", "!autodocs"]`
- Run `bun lint && bun type-check` (or `npm run lint && npm run type-check`) before committing

## Common Implementation Patterns

### Form Components
- Use `react-hook-form` with `zod` validation
- Include both success/error test scenarios
- Use `action()` from Storybook for form submissions
- Example:
```typescript
/**
 * Form with validation and error states
 */
export const FormWithValidation: Story = {
  play: async ({ canvasElement }) => {
    // Test both success and error scenarios
  }
};
```

### Charts
- Use `recharts` with `ChartContainer` wrapper
- Define `ChartConfig` for consistent theming
- Support responsive design

### Code Style Guidelines

**TypeScript:**
- Use `satisfies Meta<typeof Component>` for type safety
- Prefer explicit types over `any`
- Define schemas with `zod` for forms

**Imports:**
- **Always use**: `@/components/ui/` imports (required for registry build)
- **Framework**: `@storybook/nextjs-vite` for type imports
- **Icons**: `lucide-react` for consistent iconography

## Related Documentation

- [Storybook 9.x Documentation](https://storybook.js.org/docs)
- [shadcn/ui Registry Documentation](https://ui.shadcn.com/docs/registry)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vitest Documentation](https://vitest.dev/guide/)