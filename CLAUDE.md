# nola-design-system Development Guidelines

Auto-generated from all feature plans. Last updated: 2025-09-26

## Active Technologies
- TypeScript 5.x with Next.js 15.x and React 19.x + next-themes (0.4.6), Tailwind CSS 4.x, Storybook 9.x, shadcn/ui components (001-we-should-create)

## Project Structure
```
backend/
frontend/
tests/
```

## Commands

### Core Development
- `npm test` or `bun test` - Run all tests (unit + Storybook + constitutional)
- `npm run lint` or `bun lint` - ESLint code quality checks
- `npm run type-check` or `bun type-check` - TypeScript validation

### Constitutional Compliance (CRITICAL)
- `npm run test:constitutional` or `bun test:constitutional` - Run all constitutional compliance tests
- `npm run test:constitutional:report` or `bun test:constitutional:report` - Generate detailed compliance report
- **MANDATORY**: Run constitutional tests before extensive changes to design system architecture

## Code Style
TypeScript 5.x with Next.js 15.x and React 19.x: Follow standard conventions

## Recent Changes
- 2025-09-26: **MAJOR**: Implemented complete Constitutional Compliance Testing System with 5-principle architectural enforcement
- 2025-09-26: Registry-first educational theme architecture completed (Foundation, Pathways, Professional themes)
- 2025-09-26: Automated CI/CD and pre-commit constitutional compliance protection deployed
- 001-we-should-create: Added TypeScript 5.x with Next.js 15.x and React 19.x + next-themes (0.4.6), Tailwind CSS 4.x, Storybook 9.x, shadcn/ui components
- Theme switching: Implemented industry-standard MutationObserver pattern for CSS custom property reactivity in Storybook stories

## Constitutional Compliance System

**CRITICAL FRAMEWORK**: The NOLA Design System enforces 5 Constitutional Principles through automated testing:

1. **Upstream-First Component Architecture** - Maintains shadcn/ui compatibility
2. **Theme-Component Separation** - Complete isolation between themes and components
3. **Registry Publishing Compliance** - All themes distributed via standard registry
4. **Research-Driven Development** - Educational decisions backed by evidence
5. **Quality-First Implementation** - No technical debt or temporary fixes

**Automated Protection**: Pre-commit hooks and CI/CD prevent constitutional violations from reaching production.

**MANDATORY for AI Agents**: Always run `bun test:constitutional` before extensive architectural changes.

## Theme Switching Implementation
Components displaying CSS custom properties use MutationObserver pattern for theme reactivity. This is the production-proven approach used by IBM Carbon, Material-UI, and other major design systems. See STORYBOOK_SOLUTION_ANALYSIS.md for validation.

## Educational Theme System
**Registry-First Architecture**: 3 age-appropriate themes (Foundation 11-14, Pathways 14-18, Professional 18+) distributed via shadcn CLI. All themes maintain WCAG AA compliance and educational research backing.

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->
