# Collector API

API Fastify + Prisma (PostgreSQL) pour le projet `collector`.

## Prérequis

- Node.js (voir `.nvmrc`)
- Docker (pour PostgreSQL en local)

## Démarrage rapide (local)

```bash
npm -C collector-api install
cp collector-api/.env.example collector-api/.env
docker compose -f collector-api/docker-compose.yml up -d
npx --prefix collector-api prisma migrate deploy --config collector-api/prisma.config.ts
npx --prefix collector-api prisma generate --config collector-api/prisma.config.ts
npm -C collector-api run dev
```

Swagger (dev uniquement) : `http://localhost:3000/api-docs`

## Scripts utiles

```bash
npm -C collector-api test
npm -C collector-api run test:unit
npm -C collector-api run test:integration
npm -C collector-api run build
npm -C collector-api run lint
```

## Notes CI/CD & Minikube (à venir)

- Les tests d’intégration nécessitent un Postgres accessible via `DATABASE_URL`.
- Le `Dockerfile` exécute `prisma generate` puis lance `dist/server.js`.
