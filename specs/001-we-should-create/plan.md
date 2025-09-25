
# Implementation Plan: Educational Theme System

**Branch**: `001-we-should-create` | **Date**: 2025-09-25 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-we-should-create/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, `GEMINI.md` for Gemini CLI, `QWEN.md` for Qwen Code or `AGENTS.md` for opencode).
7. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
8. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
9. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
Implement three educational themes (Foundation, Pathways, Professional) with theme-switching capabilities for both the Next.js application and Storybook documentation. Build theme system using existing CSS custom properties and next-themes integration, without modifying core shadcn/ui components. Focus on age-appropriate design tokens while maintaining WCAG 2.1 AA compliance and constitutional principles of theme-component separation.

## Technical Context
**Language/Version**: TypeScript 5.x with Next.js 15.x and React 19.x
**Primary Dependencies**: next-themes (0.4.6), Tailwind CSS 4.x, Storybook 9.x, shadcn/ui components
**Storage**: localStorage for theme persistence, no database required
**Testing**: Vitest with browser testing via Playwright, Storybook interaction tests
**Target Platform**: Modern browsers supporting CSS custom properties and localStorage
**Project Type**: web - Next.js application with Storybook documentation
**Performance Goals**: Instant theme switching without page refresh, minimal CSS bundle impact
**Constraints**: No component code modifications, maintain shadcn/ui compatibility, WCAG 2.1 AA compliance
**Scale/Scope**: 3 educational themes, 47+ existing components, Storybook documentation system

**User Arguments**: We should use the existing project as a guide for development and technology choices, we should try not to extend it too much, only introducing new technologies if they are absolutely necessary. This project is in a functional state and we just need to extend it with custom themes.

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

✅ **I. Upstream-First Component Architecture**: PASS - No modifications to core shadcn/ui components, only CSS theming layer
✅ **II. Theme-Component Separation**: PASS - Themes applied via CSS custom properties, no component logic changes
✅ **III. Registry Publishing Compliance**: PASS - Themes will be distributed as registry entries compatible with shadcn CLI
✅ **IV. Research-Driven Development**: PASS - Will research existing theming patterns before implementation
✅ **V. Quality-First Implementation**: PASS - Comprehensive testing via existing Storybook stories and components

**Overall Result**: PASS - No constitutional violations detected

## Project Structure

### Documentation (this feature)
```
specs/[###-feature]/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
# Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure]
```

**Structure Decision**: Web application (Option 2) - Next.js frontend with Storybook documentation, no backend required

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - For each NEEDS CLARIFICATION → research task
   - For each dependency → best practices task
   - For each integration → patterns task

2. **Generate and dispatch research agents**:
   ```
   For each unknown in Technical Context:
     Task: "Research {unknown} for {feature context}"
   For each technology choice:
     Task: "Find best practices for {tech} in {domain}"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate API contracts** from functional requirements:
   - For each user action → endpoint
   - Use standard REST/GraphQL patterns
   - Output OpenAPI/GraphQL schema to `/contracts/`

3. **Generate contract tests** from contracts:
   - One test file per endpoint
   - Assert request/response schemas
   - Tests must fail (no implementation yet)

4. **Extract test scenarios** from user stories:
   - Each story → integration test scenario
   - Quickstart test = story validation steps

5. **Update agent file incrementally** (O(1) operation):
   - Run `.specify/scripts/bash/update-agent-context.sh claude`
     **IMPORTANT**: Execute it exactly as specified above. Do not add or remove any arguments.
   - If exists: Add only NEW tech from current plan
   - Preserve manual additions between markers
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

**Output**: data-model.md, /contracts/*, failing tests, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `.specify/templates/tasks-template.md` as base
- Generate tasks from Phase 1 design docs (contracts, data-model, quickstart)
- Install `@storybook/addon-themes` package dependency
- Implement 3-tier CSS token architecture (Raw → Semantic → Component)
- Theme CSS implementation tasks [P] (independent themes can be developed simultaneously)
- next-themes configuration task with educational theme names
- Storybook addon integration tasks [P] (independent of main app)
- Theme validation and testing tasks (contrast ratios, touch targets, accessibility)
- Implementation tasks following enhanced quickstart guide phases

**Ordering Strategy**:
- Constitutional compliance: Research-driven development (validate patterns first)
- Dependency order: Package installation → 3-tier CSS structure → Theme definitions → Integration → Validation
- Mark [P] for parallel execution (Foundation, Pathways, Professional themes can be developed simultaneously)
- Test-driven approach: Theme validation tests before final implementation
- Semantic versioning: Include version metadata in theme definitions

**Estimated Output**: 18-22 numbered, ordered tasks in tasks.md

**Key Task Categories**:
1. **Dependency Tasks**: Install `@storybook/addon-themes` package
2. **Architecture Tasks**: Implement 3-tier token structure (Raw/Semantic/Component)
3. **CSS Implementation**: Create theme variable definitions with versioning [P]
4. **Integration Tasks**: Configure next-themes and Storybook addon with `withThemeByClassName`
5. **Validation Tasks**: Test theme switching, accessibility compliance, component compatibility
6. **Documentation Tasks**: Update component stories and usage examples

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |


## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS (no violations introduced in design)
- [x] All NEEDS CLARIFICATION resolved
- [x] Complexity deviations documented: None - existing tech stack used throughout

---
*Based on Constitution v2.1.1 - See `/memory/constitution.md`*
