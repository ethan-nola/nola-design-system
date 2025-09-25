# Tasks: Educational Theme System

**Input**: Design documents from `/specs/001-we-should-create/`
**Prerequisites**: plan.md, research.md, data-model.md, contracts/theme-api.md, quickstart.md

## Execution Flow (main)
```
1. Load plan.md from feature directory ✅
   → Tech stack: TypeScript 5.x + Next.js 15.x + React 19.x, next-themes 0.4.6, Storybook 9.x
   → Structure: Next.js web application with Storybook documentation
2. Load design documents ✅
   → data-model.md: Theme, RawTokens, SemanticTokens entities
   → contracts/theme-api.md: CSS custom properties + next-themes integration
   → research.md: CSS custom properties approach, @storybook/addon-themes
3. Generate tasks by category ✅
   → Setup: dependency installation, Storybook addon configuration
   → Tests: theme validation, accessibility compliance, component compatibility
   → Core: 3-tier token implementation, theme CSS definitions
   → Integration: next-themes configuration, Storybook integration
   → Polish: documentation updates, performance validation
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Web application structure**: Next.js at repository root
- **CSS**: `app/globals.css` for theme definitions
- **Storybook**: `.storybook/` configuration files
- **Tests**: Component stories serve as integration tests

## Phase 3.1: Setup & Dependencies
- [ ] **T001** Install @storybook/addon-themes package dependency
- [ ] **T002** [P] Configure ESLint and Prettier for new CSS custom properties
- [ ] **T003** Verify development environment (bun dev + bun storybook)

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These validation tests MUST be implemented and MUST FAIL before implementation**
- [ ] **T004** [P] Theme switching validation test in `tests/theme-switching.test.ts`
- [ ] **T005** [P] Accessibility contrast validation test in `tests/accessibility.test.ts`
- [ ] **T006** [P] Touch target validation test in `tests/touch-targets.test.ts`
- [ ] **T007** [P] CSS custom properties validation test in `tests/css-tokens.test.ts`

## Phase 3.3: Core Implementation (ONLY after tests are failing)

### 3.3.1: 3-Tier Token Architecture
- [ ] **T008** [P] Foundation theme raw tokens in `app/globals.css` (.foundation class)
- [ ] **T009** [P] Pathways theme raw tokens in `app/globals.css` (.pathways class)
- [ ] **T010** [P] Professional theme raw tokens in `app/globals.css` (.professional class)

### 3.3.2: Theme Configuration
- [ ] **T011** Update next-themes configuration in `app/layout.tsx` with educational theme names
- [ ] **T012** Update ThemeProvider themes array: ['light', 'dark', 'foundation', 'pathways', 'professional']

### 3.3.3: Semantic Token Mapping
- [ ] **T013** Foundation semantic tokens: --primary, --secondary, --accent mappings in globals.css
- [ ] **T014** Pathways semantic tokens: teal, purple, coral color mappings in globals.css
- [ ] **T015** Professional semantic tokens: navy, slate, gold color mappings in globals.css

## Phase 3.4: Storybook Integration
- [ ] **T016** Configure @storybook/addon-themes in `.storybook/main.ts` addons array
- [ ] **T017** Configure withThemeByClassName decorator in `.storybook/preview.ts`
- [ ] **T018** Test theme switching in Storybook toolbar across all component stories

## Phase 3.5: Component Token Overrides (Optional)
- [ ] **T019** [P] Foundation component tokens: enhanced touch targets and focus indicators
- [ ] **T020** [P] Pathways component tokens: modern interaction patterns
- [ ] **T021** [P] Professional component tokens: compact and efficient styling

## Phase 3.6: Integration & Validation
- [ ] **T022** Validate theme persistence via localStorage across browser sessions
- [ ] **T023** Validate SSR hydration with next-themes (no flash of incorrect theme)
- [ ] **T024** Cross-browser testing (Chrome, Firefox, Safari, Edge)

## Phase 3.7: Polish & Documentation
- [ ] **T025** [P] Update component stories with theme examples and documentation
- [ ] **T026** [P] Performance validation: theme switching <100ms, minimal CSS bundle impact
- [ ] **T027** [P] Accessibility validation: WCAG 2.1 AA compliance across all themes
- [ ] **T028** Manual testing following `quickstart.md` validation checklist

## Dependencies
- Setup (T001-T003) before everything
- Tests (T004-T007) before implementation (T008-T028)
- Raw tokens (T008-T010) before semantic tokens (T013-T015)
- next-themes config (T011-T012) before Storybook integration (T016-T018)
- Core implementation before validation (T022-T024)
- Implementation before polish (T025-T028)

## Parallel Example
```bash
# Launch foundation theme implementation tasks together:
Task: "Foundation theme raw tokens in app/globals.css (.foundation class)"
Task: "Pathways theme raw tokens in app/globals.css (.pathways class)"
Task: "Professional theme raw tokens in app/globals.css (.professional class)"

# Launch validation tests together:
Task: "Theme switching validation test in tests/theme-switching.test.ts"
Task: "Accessibility contrast validation test in tests/accessibility.test.ts"
Task: "Touch target validation test in tests/touch-targets.test.ts"
```

## Task Generation Rules Applied

1. **From Contracts (theme-api.md)**:
   - CSS custom properties contract → Token implementation tasks (T008-T015)
   - next-themes integration → Configuration tasks (T011-T012)
   - Storybook integration → Addon setup tasks (T016-T018)

2. **From Data Model**:
   - Theme entity → CSS class implementation tasks [P] (T008-T010)
   - RawTokens entity → Raw token definition tasks [P] (T008-T010)
   - SemanticTokens entity → Semantic mapping tasks (T013-T015)

3. **From Quickstart Scenarios**:
   - Each phase validation → Integration test tasks [P] (T004-T007)
   - Manual testing checklist → Validation tasks (T022-T024)

4. **Ordering**:
   - Setup → Tests → Raw Tokens → Semantic Tokens → Integration → Validation → Polish
   - Dependencies prevent parallel execution where files overlap

## Validation Checklist
*GATE: Checked before execution*

- [✅] All contracts have corresponding validation tests (theme-api.md → T004-T007)
- [✅] All entities have implementation tasks (Theme/RawTokens/SemanticTokens → T008-T015)
- [✅] All tests come before implementation (T004-T007 before T008+)
- [✅] Parallel tasks truly independent (different CSS classes, different test files)
- [✅] Each task specifies exact file path (app/globals.css, .storybook/main.ts, etc.)
- [✅] No task modifies same file as another [P] task

## Notes
- [P] tasks target different CSS classes or different files entirely
- Tests must fail before implementing to follow TDD approach
- Commit after each completed task
- Focus on CSS-only approach - no component modifications per constitution
- @storybook/addon-themes required but not yet installed (T001 critical)

## Key Implementation Files
- **`app/globals.css`**: All theme CSS custom properties
- **`app/layout.tsx`**: next-themes configuration
- **`.storybook/main.ts`**: Addon registration
- **`.storybook/preview.ts`**: Theme decorator configuration
- **`tests/`**: Theme validation and accessibility compliance tests