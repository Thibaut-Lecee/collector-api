import { z } from 'zod';

export function makeConfig() {
  const schema = z.object({
    CORS_ORIGIN: z
      .string()
      .transform((val) => val.split(',').map((origin) => origin.trim()))
      .pipe(z.array(z.url()))
      .optional(),
    ADMIN_ROLE_NAME: z.string().min(1).optional(),
    DATABASE_URL: z.string(),
    GRAFANA_URL: z.string().url().optional(),
    NODE_ENV: z.enum(['development', 'production', 'test']),
    LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).catch('info'),
    PORT: z.coerce.number().int().min(1).max(65535).catch(3000),
  });

  const parsedEnv = schema.parse(process.env);

  const zitadelIssuer = process.env.ZITADEL_ISSUER || 'http://localhost:8080';
  const zitadelInternalIssuer = process.env.ZITADEL_INTERNAL_ISSUER || zitadelIssuer;

  return {
    corsOrigin: parsedEnv.CORS_ORIGIN,
    DATABASE_URL: parsedEnv.DATABASE_URL,
    env: parsedEnv.NODE_ENV,
    logLevel: parsedEnv.LOG_LEVEL,
    loggerEnabled: parsedEnv.NODE_ENV !== 'test',
    port: parsedEnv.PORT,
    adminRoleName: parsedEnv.ADMIN_ROLE_NAME ?? 'admin',
    grafanaUrl: parsedEnv.GRAFANA_URL,
    zitadelIssuer,
    zitadelInternalIssuer,
    zitadelClientId: process.env.ZITADEL_CLIENT_ID || '',
    zitadelClientSecret: process.env.ZITADEL_CLIENT_SECRET || '',
  };
}

export type ApplicationConfig = ReturnType<typeof makeConfig>;
