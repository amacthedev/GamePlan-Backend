# Contributing to GamePlan

## Getting Set Up

Follow the [Getting Started](./README.md#getting-started) section in the README to set up your local environment.

## Branch Naming

Use this format for all branches:

```
<type>/<short-description>
```

**Types:**
- `feature/` — New functionality (e.g., `feature/calendar-endpoints`)
- `fix/` — Bug fixes (e.g., `fix/auth-refresh-token`)
- `refactor/` — Code restructuring (e.g., `refactor/middleware-organization`)
- `docs/` — Documentation updates (e.g., `docs/api-endpoints`)
- `ci/` — CI/CD changes (e.g., `ci/add-e2e-tests`)

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes and commit
3. Push your branch and open a PR against `main`
4. Ensure CI checks pass (build + lint + tests)
5. Get at least 1 code review from a teammate
6. Merge via squash-and-merge

## Backend Module Pattern

When adding a new feature to the backend, follow this structure:

```
packages/backend/src/modules/<feature>/
├── <feature>.controller.ts   # Request handling (parse req, call service, send res)
├── <feature>.service.ts      # Business logic (database queries, data processing)
├── <feature>.routes.ts       # Route definitions with middleware
└── <feature>.schemas.ts      # Zod validation schemas for request bodies
```

**Example:** To add a "teams" feature:
```
packages/backend/src/modules/teams/
├── teams.controller.ts
├── teams.service.ts
├── teams.routes.ts
└── teams.schemas.ts
```

Then register the routes in `packages/backend/src/app.ts`.

## pnpm Cheat Sheet

| npm command | pnpm equivalent |
|-------------|-----------------|
| `npm install` | `pnpm install` |
| `npm install <pkg>` | `pnpm add <pkg>` |
| `npm install -D <pkg>` | `pnpm add -D <pkg>` |
| `npm run <script>` | `pnpm <script>` |

**Adding a dependency to a specific package:**
```bash
# Add to backend
pnpm --filter @gameplan/backend add express

# Add dev dependency to frontend
pnpm --filter @gameplan/frontend add -D vitest
```

**Running a script in a specific package:**
```bash
pnpm --filter @gameplan/backend dev
pnpm --filter @gameplan/frontend lint
```

## Coding Conventions

- **TypeScript** everywhere — no `any` types
- **Zod** for request validation on all endpoints
- **RBAC** on every protected endpoint — use `authenticate` and `authorize` middleware
- Test files go next to the source file: `foo.ts` → `foo.test.ts`
