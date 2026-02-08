# CLAUDE.md

Guidance for working on `collector-api`.

## Commands

```bash
# Development
npm run dev              # Start dev server (tsx watch)
npm run build            # Build (tsup)
npm run lint             # Biome + tsc --noEmit

# Testing
npm test                 # Unit + integration (Vitest)
npm run test:unit        # Unit tests only
npm run test:integration # Integration tests only (needs Postgres)

# Database
npx prisma migrate deploy --config prisma.config.ts
npx prisma migrate dev --config prisma.config.ts
npx prisma studio --config prisma.config.ts
npx prisma generate --config prisma.config.ts
```

## Architecture

Clean-ish layering with Fastify + Prisma.

```
src/
├── domain/           # Entities + repository interfaces
├── infrastructure/   # Config, logger, DI, Prisma repos
├── features/         # HTTP controllers + use cases
├── plugins/          # Fastify plugins (DI, auth, health, swagger, etc.)
├── app.ts            # App setup and plugin registration
└── server.ts         # Server entry point
```

### Notes for CI/CD / K8s (future)

- Keep `npm test` deterministic: integration tests expect a reachable Postgres (`DATABASE_URL`).
- Docker build uses `prisma generate` and the `dist/` output from `tsup`.
