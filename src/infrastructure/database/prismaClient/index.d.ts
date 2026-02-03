/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model ShortenedUrl
 *
 */
export type ShortenedUrl = $Result.DefaultSelection<Prisma.$ShortenedUrlPayload>;
/**
 * Model Visit
 *
 */
export type Visit = $Result.DefaultSelection<Prisma.$VisitPayload>;
/**
 * Model Article
 *
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>;
/**
 * Model ArticleCategories
 *
 */
export type ArticleCategories = $Result.DefaultSelection<Prisma.$ArticleCategoriesPayload>;
/**
 * Model ArticleImages
 *
 */
export type ArticleImages = $Result.DefaultSelection<Prisma.$ArticleImagesPayload>;
/**
 * Model category
 *
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>;
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ShortenedUrls
 * const shortenedUrls = await prisma.shortenedUrl.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ShortenedUrls
   * const shortenedUrls = await prisma.shortenedUrl.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.shortenedUrl`: Exposes CRUD operations for the **ShortenedUrl** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ShortenedUrls
   * const shortenedUrls = await prisma.shortenedUrl.findMany()
   * ```
   */
  get shortenedUrl(): Prisma.ShortenedUrlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visit`: Exposes CRUD operations for the **Visit** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Visits
   * const visits = await prisma.visit.findMany()
   * ```
   */
  get visit(): Prisma.VisitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Articles
   * const articles = await prisma.article.findMany()
   * ```
   */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleCategories`: Exposes CRUD operations for the **ArticleCategories** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ArticleCategories
   * const articleCategories = await prisma.articleCategories.findMany()
   * ```
   */
  get articleCategories(): Prisma.ArticleCategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleImages`: Exposes CRUD operations for the **ArticleImages** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ArticleImages
   * const articleImages = await prisma.articleImages.findMany()
   * ```
   */
  get articleImages(): Prisma.ArticleImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends bigint
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1, A2> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    ShortenedUrl: 'ShortenedUrl';
    Visit: 'Visit';
    Article: 'Article';
    ArticleCategories: 'ArticleCategories';
    ArticleImages: 'ArticleImages';
    category: 'category';
    User: 'User';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'shortenedUrl' | 'visit' | 'article' | 'articleCategories' | 'articleImages' | 'category' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      ShortenedUrl: {
        payload: Prisma.$ShortenedUrlPayload<ExtArgs>;
        fields: Prisma.ShortenedUrlFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ShortenedUrlFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShortenedUrlPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ShortenedUrlFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShortenedUrlPayload>;
          };
          findFirst: {
            args: Prisma.ShortenedUrlFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShortenedUrlPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ShortenedUrlFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShortenedUrlPayload>;
          };
          findMany: {
            args: Prisma.ShortenedUrlFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShortenedUrlPayload>[];
          };
          create: {
            args: Prisma.ShortenedUrlCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShortenedUrlPayload>;
          };
          createMany: {
            args: Prisma.ShortenedUrlCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ShortenedUrlCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShortenedUrlPayload>[];
          };
          delete: {
            args: Prisma.ShortenedUrlDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShortenedUrlPayload>;
          };
          update: {
            args: Prisma.ShortenedUrlUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShortenedUrlPayload>;
          };
          deleteMany: {
            args: Prisma.ShortenedUrlDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ShortenedUrlUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ShortenedUrlUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShortenedUrlPayload>[];
          };
          upsert: {
            args: Prisma.ShortenedUrlUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShortenedUrlPayload>;
          };
          aggregate: {
            args: Prisma.ShortenedUrlAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateShortenedUrl>;
          };
          groupBy: {
            args: Prisma.ShortenedUrlGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ShortenedUrlGroupByOutputType>[];
          };
          count: {
            args: Prisma.ShortenedUrlCountArgs<ExtArgs>;
            result: $Utils.Optional<ShortenedUrlCountAggregateOutputType> | number;
          };
        };
      };
      Visit: {
        payload: Prisma.$VisitPayload<ExtArgs>;
        fields: Prisma.VisitFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.VisitFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VisitPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.VisitFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>;
          };
          findFirst: {
            args: Prisma.VisitFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VisitPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.VisitFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>;
          };
          findMany: {
            args: Prisma.VisitFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>[];
          };
          create: {
            args: Prisma.VisitCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>;
          };
          createMany: {
            args: Prisma.VisitCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.VisitCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>[];
          };
          delete: {
            args: Prisma.VisitDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>;
          };
          update: {
            args: Prisma.VisitUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>;
          };
          deleteMany: {
            args: Prisma.VisitDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.VisitUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.VisitUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>[];
          };
          upsert: {
            args: Prisma.VisitUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>;
          };
          aggregate: {
            args: Prisma.VisitAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVisit>;
          };
          groupBy: {
            args: Prisma.VisitGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VisitGroupByOutputType>[];
          };
          count: {
            args: Prisma.VisitCountArgs<ExtArgs>;
            result: $Utils.Optional<VisitCountAggregateOutputType> | number;
          };
        };
      };
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>;
        fields: Prisma.ArticleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>;
          };
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>;
          };
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[];
          };
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>;
          };
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[];
          };
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>;
          };
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>;
          };
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[];
          };
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>;
          };
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateArticle>;
          };
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ArticleGroupByOutputType>[];
          };
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>;
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number;
          };
        };
      };
      ArticleCategories: {
        payload: Prisma.$ArticleCategoriesPayload<ExtArgs>;
        fields: Prisma.ArticleCategoriesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ArticleCategoriesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoriesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ArticleCategoriesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoriesPayload>;
          };
          findFirst: {
            args: Prisma.ArticleCategoriesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoriesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ArticleCategoriesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoriesPayload>;
          };
          findMany: {
            args: Prisma.ArticleCategoriesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoriesPayload>[];
          };
          create: {
            args: Prisma.ArticleCategoriesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoriesPayload>;
          };
          createMany: {
            args: Prisma.ArticleCategoriesCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ArticleCategoriesCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoriesPayload>[];
          };
          delete: {
            args: Prisma.ArticleCategoriesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoriesPayload>;
          };
          update: {
            args: Prisma.ArticleCategoriesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoriesPayload>;
          };
          deleteMany: {
            args: Prisma.ArticleCategoriesDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ArticleCategoriesUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ArticleCategoriesUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoriesPayload>[];
          };
          upsert: {
            args: Prisma.ArticleCategoriesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoriesPayload>;
          };
          aggregate: {
            args: Prisma.ArticleCategoriesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateArticleCategories>;
          };
          groupBy: {
            args: Prisma.ArticleCategoriesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ArticleCategoriesGroupByOutputType>[];
          };
          count: {
            args: Prisma.ArticleCategoriesCountArgs<ExtArgs>;
            result: $Utils.Optional<ArticleCategoriesCountAggregateOutputType> | number;
          };
        };
      };
      ArticleImages: {
        payload: Prisma.$ArticleImagesPayload<ExtArgs>;
        fields: Prisma.ArticleImagesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ArticleImagesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleImagesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ArticleImagesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleImagesPayload>;
          };
          findFirst: {
            args: Prisma.ArticleImagesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleImagesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ArticleImagesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleImagesPayload>;
          };
          findMany: {
            args: Prisma.ArticleImagesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleImagesPayload>[];
          };
          create: {
            args: Prisma.ArticleImagesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleImagesPayload>;
          };
          createMany: {
            args: Prisma.ArticleImagesCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ArticleImagesCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleImagesPayload>[];
          };
          delete: {
            args: Prisma.ArticleImagesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleImagesPayload>;
          };
          update: {
            args: Prisma.ArticleImagesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleImagesPayload>;
          };
          deleteMany: {
            args: Prisma.ArticleImagesDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ArticleImagesUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ArticleImagesUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleImagesPayload>[];
          };
          upsert: {
            args: Prisma.ArticleImagesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticleImagesPayload>;
          };
          aggregate: {
            args: Prisma.ArticleImagesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateArticleImages>;
          };
          groupBy: {
            args: Prisma.ArticleImagesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ArticleImagesGroupByOutputType>[];
          };
          count: {
            args: Prisma.ArticleImagesCountArgs<ExtArgs>;
            result: $Utils.Optional<ArticleImagesCountAggregateOutputType> | number;
          };
        };
      };
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>;
        fields: Prisma.categoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>;
          };
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>;
          };
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[];
          };
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>;
          };
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[];
          };
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>;
          };
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>;
          };
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[];
          };
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>;
          };
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategory>;
          };
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>;
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number;
          };
        };
      };
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    shortenedUrl?: ShortenedUrlOmit;
    visit?: VisitOmit;
    article?: ArticleOmit;
    articleCategories?: ArticleCategoriesOmit;
    articleImages?: ArticleImagesOmit;
    category?: categoryOmit;
    user?: UserOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ShortenedUrlCountOutputType
   */

  export type ShortenedUrlCountOutputType = {
    visits: number;
  };

  export type ShortenedUrlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visits?: boolean | ShortenedUrlCountOutputTypeCountVisitsArgs;
  };

  // Custom InputTypes
  /**
   * ShortenedUrlCountOutputType without action
   */
  export type ShortenedUrlCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ShortenedUrlCountOutputType
     */
    select?: ShortenedUrlCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ShortenedUrlCountOutputType without action
   */
  export type ShortenedUrlCountOutputTypeCountVisitsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: VisitWhereInput;
  };

  /**
   * Count Type ArticleCountOutputType
   */

  export type ArticleCountOutputType = {
    images: number;
    categories: number;
  };

  export type ArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ArticleCountOutputTypeCountImagesArgs;
    categories?: boolean | ArticleCountOutputTypeCountCategoriesArgs;
  };

  // Custom InputTypes
  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCountOutputType
     */
    select?: ArticleCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountImagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ArticleImagesWhereInput;
  };

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountCategoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ArticleCategoriesWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    articles: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | UserCountOutputTypeCountArticlesArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: ArticleWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model ShortenedUrl
   */

  export type AggregateShortenedUrl = {
    _count: ShortenedUrlCountAggregateOutputType | null;
    _min: ShortenedUrlMinAggregateOutputType | null;
    _max: ShortenedUrlMaxAggregateOutputType | null;
  };

  export type ShortenedUrlMinAggregateOutputType = {
    id: string | null;
    originalUrl: string | null;
    createdAt: Date | null;
    expiresAt: Date | null;
  };

  export type ShortenedUrlMaxAggregateOutputType = {
    id: string | null;
    originalUrl: string | null;
    createdAt: Date | null;
    expiresAt: Date | null;
  };

  export type ShortenedUrlCountAggregateOutputType = {
    id: number;
    originalUrl: number;
    createdAt: number;
    expiresAt: number;
    _all: number;
  };

  export type ShortenedUrlMinAggregateInputType = {
    id?: true;
    originalUrl?: true;
    createdAt?: true;
    expiresAt?: true;
  };

  export type ShortenedUrlMaxAggregateInputType = {
    id?: true;
    originalUrl?: true;
    createdAt?: true;
    expiresAt?: true;
  };

  export type ShortenedUrlCountAggregateInputType = {
    id?: true;
    originalUrl?: true;
    createdAt?: true;
    expiresAt?: true;
    _all?: true;
  };

  export type ShortenedUrlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShortenedUrl to aggregate.
     */
    where?: ShortenedUrlWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShortenedUrls to fetch.
     */
    orderBy?: ShortenedUrlOrderByWithRelationInput | ShortenedUrlOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ShortenedUrlWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShortenedUrls from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShortenedUrls.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShortenedUrls
     **/
    _count?: true | ShortenedUrlCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ShortenedUrlMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ShortenedUrlMaxAggregateInputType;
  };

  export type GetShortenedUrlAggregateType<T extends ShortenedUrlAggregateArgs> = {
    [P in keyof T & keyof AggregateShortenedUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShortenedUrl[P]>
      : GetScalarType<T[P], AggregateShortenedUrl[P]>;
  };

  export type ShortenedUrlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShortenedUrlWhereInput;
    orderBy?: ShortenedUrlOrderByWithAggregationInput | ShortenedUrlOrderByWithAggregationInput[];
    by: ShortenedUrlScalarFieldEnum[] | ShortenedUrlScalarFieldEnum;
    having?: ShortenedUrlScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShortenedUrlCountAggregateInputType | true;
    _min?: ShortenedUrlMinAggregateInputType;
    _max?: ShortenedUrlMaxAggregateInputType;
  };

  export type ShortenedUrlGroupByOutputType = {
    id: string;
    originalUrl: string;
    createdAt: Date;
    expiresAt: Date | null;
    _count: ShortenedUrlCountAggregateOutputType | null;
    _min: ShortenedUrlMinAggregateOutputType | null;
    _max: ShortenedUrlMaxAggregateOutputType | null;
  };

  type GetShortenedUrlGroupByPayload<T extends ShortenedUrlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShortenedUrlGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ShortenedUrlGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ShortenedUrlGroupByOutputType[P]>
          : GetScalarType<T[P], ShortenedUrlGroupByOutputType[P]>;
      }
    >
  >;

  export type ShortenedUrlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        originalUrl?: boolean;
        createdAt?: boolean;
        expiresAt?: boolean;
        visits?: boolean | ShortenedUrl$visitsArgs<ExtArgs>;
        _count?: boolean | ShortenedUrlCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['shortenedUrl']
    >;

  export type ShortenedUrlSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      originalUrl?: boolean;
      createdAt?: boolean;
      expiresAt?: boolean;
    },
    ExtArgs['result']['shortenedUrl']
  >;

  export type ShortenedUrlSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      originalUrl?: boolean;
      createdAt?: boolean;
      expiresAt?: boolean;
    },
    ExtArgs['result']['shortenedUrl']
  >;

  export type ShortenedUrlSelectScalar = {
    id?: boolean;
    originalUrl?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
  };

  export type ShortenedUrlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'originalUrl' | 'createdAt' | 'expiresAt', ExtArgs['result']['shortenedUrl']>;
  export type ShortenedUrlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visits?: boolean | ShortenedUrl$visitsArgs<ExtArgs>;
    _count?: boolean | ShortenedUrlCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ShortenedUrlIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type ShortenedUrlIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $ShortenedUrlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'ShortenedUrl';
    objects: {
      visits: Prisma.$VisitPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        originalUrl: string;
        createdAt: Date;
        expiresAt: Date | null;
      },
      ExtArgs['result']['shortenedUrl']
    >;
    composites: {};
  };

  type ShortenedUrlGetPayload<S extends boolean | null | undefined | ShortenedUrlDefaultArgs> = $Result.GetResult<
    Prisma.$ShortenedUrlPayload,
    S
  >;

  type ShortenedUrlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ShortenedUrlFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ShortenedUrlCountAggregateInputType | true;
  };

  export interface ShortenedUrlDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShortenedUrl']; meta: { name: 'ShortenedUrl' } };
    /**
     * Find zero or one ShortenedUrl that matches the filter.
     * @param {ShortenedUrlFindUniqueArgs} args - Arguments to find a ShortenedUrl
     * @example
     * // Get one ShortenedUrl
     * const shortenedUrl = await prisma.shortenedUrl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShortenedUrlFindUniqueArgs>(
      args: SelectSubset<T, ShortenedUrlFindUniqueArgs<ExtArgs>>,
    ): Prisma__ShortenedUrlClient<
      $Result.GetResult<Prisma.$ShortenedUrlPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ShortenedUrl that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShortenedUrlFindUniqueOrThrowArgs} args - Arguments to find a ShortenedUrl
     * @example
     * // Get one ShortenedUrl
     * const shortenedUrl = await prisma.shortenedUrl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShortenedUrlFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ShortenedUrlFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ShortenedUrlClient<
      $Result.GetResult<Prisma.$ShortenedUrlPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ShortenedUrl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortenedUrlFindFirstArgs} args - Arguments to find a ShortenedUrl
     * @example
     * // Get one ShortenedUrl
     * const shortenedUrl = await prisma.shortenedUrl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShortenedUrlFindFirstArgs>(
      args?: SelectSubset<T, ShortenedUrlFindFirstArgs<ExtArgs>>,
    ): Prisma__ShortenedUrlClient<
      $Result.GetResult<Prisma.$ShortenedUrlPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ShortenedUrl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortenedUrlFindFirstOrThrowArgs} args - Arguments to find a ShortenedUrl
     * @example
     * // Get one ShortenedUrl
     * const shortenedUrl = await prisma.shortenedUrl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShortenedUrlFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShortenedUrlFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ShortenedUrlClient<
      $Result.GetResult<Prisma.$ShortenedUrlPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ShortenedUrls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortenedUrlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShortenedUrls
     * const shortenedUrls = await prisma.shortenedUrl.findMany()
     *
     * // Get first 10 ShortenedUrls
     * const shortenedUrls = await prisma.shortenedUrl.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shortenedUrlWithIdOnly = await prisma.shortenedUrl.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShortenedUrlFindManyArgs>(
      args?: SelectSubset<T, ShortenedUrlFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortenedUrlPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>;

    /**
     * Create a ShortenedUrl.
     * @param {ShortenedUrlCreateArgs} args - Arguments to create a ShortenedUrl.
     * @example
     * // Create one ShortenedUrl
     * const ShortenedUrl = await prisma.shortenedUrl.create({
     *   data: {
     *     // ... data to create a ShortenedUrl
     *   }
     * })
     *
     */
    create<T extends ShortenedUrlCreateArgs>(
      args: SelectSubset<T, ShortenedUrlCreateArgs<ExtArgs>>,
    ): Prisma__ShortenedUrlClient<
      $Result.GetResult<Prisma.$ShortenedUrlPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ShortenedUrls.
     * @param {ShortenedUrlCreateManyArgs} args - Arguments to create many ShortenedUrls.
     * @example
     * // Create many ShortenedUrls
     * const shortenedUrl = await prisma.shortenedUrl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShortenedUrlCreateManyArgs>(
      args?: SelectSubset<T, ShortenedUrlCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ShortenedUrls and returns the data saved in the database.
     * @param {ShortenedUrlCreateManyAndReturnArgs} args - Arguments to create many ShortenedUrls.
     * @example
     * // Create many ShortenedUrls
     * const shortenedUrl = await prisma.shortenedUrl.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShortenedUrls and only return the `id`
     * const shortenedUrlWithIdOnly = await prisma.shortenedUrl.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShortenedUrlCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ShortenedUrlCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ShortenedUrlPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a ShortenedUrl.
     * @param {ShortenedUrlDeleteArgs} args - Arguments to delete one ShortenedUrl.
     * @example
     * // Delete one ShortenedUrl
     * const ShortenedUrl = await prisma.shortenedUrl.delete({
     *   where: {
     *     // ... filter to delete one ShortenedUrl
     *   }
     * })
     *
     */
    delete<T extends ShortenedUrlDeleteArgs>(
      args: SelectSubset<T, ShortenedUrlDeleteArgs<ExtArgs>>,
    ): Prisma__ShortenedUrlClient<
      $Result.GetResult<Prisma.$ShortenedUrlPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ShortenedUrl.
     * @param {ShortenedUrlUpdateArgs} args - Arguments to update one ShortenedUrl.
     * @example
     * // Update one ShortenedUrl
     * const shortenedUrl = await prisma.shortenedUrl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShortenedUrlUpdateArgs>(
      args: SelectSubset<T, ShortenedUrlUpdateArgs<ExtArgs>>,
    ): Prisma__ShortenedUrlClient<
      $Result.GetResult<Prisma.$ShortenedUrlPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ShortenedUrls.
     * @param {ShortenedUrlDeleteManyArgs} args - Arguments to filter ShortenedUrls to delete.
     * @example
     * // Delete a few ShortenedUrls
     * const { count } = await prisma.shortenedUrl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShortenedUrlDeleteManyArgs>(
      args?: SelectSubset<T, ShortenedUrlDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ShortenedUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortenedUrlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShortenedUrls
     * const shortenedUrl = await prisma.shortenedUrl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShortenedUrlUpdateManyArgs>(
      args: SelectSubset<T, ShortenedUrlUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ShortenedUrls and returns the data updated in the database.
     * @param {ShortenedUrlUpdateManyAndReturnArgs} args - Arguments to update many ShortenedUrls.
     * @example
     * // Update many ShortenedUrls
     * const shortenedUrl = await prisma.shortenedUrl.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShortenedUrls and only return the `id`
     * const shortenedUrlWithIdOnly = await prisma.shortenedUrl.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ShortenedUrlUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ShortenedUrlUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ShortenedUrlPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one ShortenedUrl.
     * @param {ShortenedUrlUpsertArgs} args - Arguments to update or create a ShortenedUrl.
     * @example
     * // Update or create a ShortenedUrl
     * const shortenedUrl = await prisma.shortenedUrl.upsert({
     *   create: {
     *     // ... data to create a ShortenedUrl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShortenedUrl we want to update
     *   }
     * })
     */
    upsert<T extends ShortenedUrlUpsertArgs>(
      args: SelectSubset<T, ShortenedUrlUpsertArgs<ExtArgs>>,
    ): Prisma__ShortenedUrlClient<
      $Result.GetResult<Prisma.$ShortenedUrlPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ShortenedUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortenedUrlCountArgs} args - Arguments to filter ShortenedUrls to count.
     * @example
     * // Count the number of ShortenedUrls
     * const count = await prisma.shortenedUrl.count({
     *   where: {
     *     // ... the filter for the ShortenedUrls we want to count
     *   }
     * })
     **/
    count<T extends ShortenedUrlCountArgs>(
      args?: Subset<T, ShortenedUrlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShortenedUrlCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ShortenedUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortenedUrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ShortenedUrlAggregateArgs>(
      args: Subset<T, ShortenedUrlAggregateArgs>,
    ): Prisma.PrismaPromise<GetShortenedUrlAggregateType<T>>;

    /**
     * Group by ShortenedUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortenedUrlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ShortenedUrlGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShortenedUrlGroupByArgs['orderBy'] }
        : { orderBy?: ShortenedUrlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ShortenedUrlGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetShortenedUrlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShortenedUrl model
     */
    readonly fields: ShortenedUrlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShortenedUrl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShortenedUrlClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    visits<T extends ShortenedUrl$visitsArgs<ExtArgs> = {}>(
      args?: Subset<T, ShortenedUrl$visitsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ShortenedUrl model
   */
  interface ShortenedUrlFieldRefs {
    readonly id: FieldRef<'ShortenedUrl', 'String'>;
    readonly originalUrl: FieldRef<'ShortenedUrl', 'String'>;
    readonly createdAt: FieldRef<'ShortenedUrl', 'DateTime'>;
    readonly expiresAt: FieldRef<'ShortenedUrl', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * ShortenedUrl findUnique
   */
  export type ShortenedUrlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortenedUrl
     */
    select?: ShortenedUrlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShortenedUrl
     */
    omit?: ShortenedUrlOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortenedUrlInclude<ExtArgs> | null;
    /**
     * Filter, which ShortenedUrl to fetch.
     */
    where: ShortenedUrlWhereUniqueInput;
  };

  /**
   * ShortenedUrl findUniqueOrThrow
   */
  export type ShortenedUrlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortenedUrl
     */
    select?: ShortenedUrlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShortenedUrl
     */
    omit?: ShortenedUrlOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortenedUrlInclude<ExtArgs> | null;
    /**
     * Filter, which ShortenedUrl to fetch.
     */
    where: ShortenedUrlWhereUniqueInput;
  };

  /**
   * ShortenedUrl findFirst
   */
  export type ShortenedUrlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortenedUrl
     */
    select?: ShortenedUrlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShortenedUrl
     */
    omit?: ShortenedUrlOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortenedUrlInclude<ExtArgs> | null;
    /**
     * Filter, which ShortenedUrl to fetch.
     */
    where?: ShortenedUrlWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShortenedUrls to fetch.
     */
    orderBy?: ShortenedUrlOrderByWithRelationInput | ShortenedUrlOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShortenedUrls.
     */
    cursor?: ShortenedUrlWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShortenedUrls from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShortenedUrls.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShortenedUrls.
     */
    distinct?: ShortenedUrlScalarFieldEnum | ShortenedUrlScalarFieldEnum[];
  };

  /**
   * ShortenedUrl findFirstOrThrow
   */
  export type ShortenedUrlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortenedUrl
     */
    select?: ShortenedUrlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShortenedUrl
     */
    omit?: ShortenedUrlOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortenedUrlInclude<ExtArgs> | null;
    /**
     * Filter, which ShortenedUrl to fetch.
     */
    where?: ShortenedUrlWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShortenedUrls to fetch.
     */
    orderBy?: ShortenedUrlOrderByWithRelationInput | ShortenedUrlOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShortenedUrls.
     */
    cursor?: ShortenedUrlWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShortenedUrls from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShortenedUrls.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShortenedUrls.
     */
    distinct?: ShortenedUrlScalarFieldEnum | ShortenedUrlScalarFieldEnum[];
  };

  /**
   * ShortenedUrl findMany
   */
  export type ShortenedUrlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortenedUrl
     */
    select?: ShortenedUrlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShortenedUrl
     */
    omit?: ShortenedUrlOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortenedUrlInclude<ExtArgs> | null;
    /**
     * Filter, which ShortenedUrls to fetch.
     */
    where?: ShortenedUrlWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShortenedUrls to fetch.
     */
    orderBy?: ShortenedUrlOrderByWithRelationInput | ShortenedUrlOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShortenedUrls.
     */
    cursor?: ShortenedUrlWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShortenedUrls from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShortenedUrls.
     */
    skip?: number;
    distinct?: ShortenedUrlScalarFieldEnum | ShortenedUrlScalarFieldEnum[];
  };

  /**
   * ShortenedUrl create
   */
  export type ShortenedUrlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortenedUrl
     */
    select?: ShortenedUrlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShortenedUrl
     */
    omit?: ShortenedUrlOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortenedUrlInclude<ExtArgs> | null;
    /**
     * The data needed to create a ShortenedUrl.
     */
    data: XOR<ShortenedUrlCreateInput, ShortenedUrlUncheckedCreateInput>;
  };

  /**
   * ShortenedUrl createMany
   */
  export type ShortenedUrlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShortenedUrls.
     */
    data: ShortenedUrlCreateManyInput | ShortenedUrlCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ShortenedUrl createManyAndReturn
   */
  export type ShortenedUrlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the ShortenedUrl
       */
      select?: ShortenedUrlSelectCreateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the ShortenedUrl
       */
      omit?: ShortenedUrlOmit<ExtArgs> | null;
      /**
       * The data used to create many ShortenedUrls.
       */
      data: ShortenedUrlCreateManyInput | ShortenedUrlCreateManyInput[];
      skipDuplicates?: boolean;
    };

  /**
   * ShortenedUrl update
   */
  export type ShortenedUrlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortenedUrl
     */
    select?: ShortenedUrlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShortenedUrl
     */
    omit?: ShortenedUrlOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortenedUrlInclude<ExtArgs> | null;
    /**
     * The data needed to update a ShortenedUrl.
     */
    data: XOR<ShortenedUrlUpdateInput, ShortenedUrlUncheckedUpdateInput>;
    /**
     * Choose, which ShortenedUrl to update.
     */
    where: ShortenedUrlWhereUniqueInput;
  };

  /**
   * ShortenedUrl updateMany
   */
  export type ShortenedUrlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShortenedUrls.
     */
    data: XOR<ShortenedUrlUpdateManyMutationInput, ShortenedUrlUncheckedUpdateManyInput>;
    /**
     * Filter which ShortenedUrls to update
     */
    where?: ShortenedUrlWhereInput;
    /**
     * Limit how many ShortenedUrls to update.
     */
    limit?: number;
  };

  /**
   * ShortenedUrl updateManyAndReturn
   */
  export type ShortenedUrlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the ShortenedUrl
       */
      select?: ShortenedUrlSelectUpdateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the ShortenedUrl
       */
      omit?: ShortenedUrlOmit<ExtArgs> | null;
      /**
       * The data used to update ShortenedUrls.
       */
      data: XOR<ShortenedUrlUpdateManyMutationInput, ShortenedUrlUncheckedUpdateManyInput>;
      /**
       * Filter which ShortenedUrls to update
       */
      where?: ShortenedUrlWhereInput;
      /**
       * Limit how many ShortenedUrls to update.
       */
      limit?: number;
    };

  /**
   * ShortenedUrl upsert
   */
  export type ShortenedUrlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortenedUrl
     */
    select?: ShortenedUrlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShortenedUrl
     */
    omit?: ShortenedUrlOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortenedUrlInclude<ExtArgs> | null;
    /**
     * The filter to search for the ShortenedUrl to update in case it exists.
     */
    where: ShortenedUrlWhereUniqueInput;
    /**
     * In case the ShortenedUrl found by the `where` argument doesn't exist, create a new ShortenedUrl with this data.
     */
    create: XOR<ShortenedUrlCreateInput, ShortenedUrlUncheckedCreateInput>;
    /**
     * In case the ShortenedUrl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShortenedUrlUpdateInput, ShortenedUrlUncheckedUpdateInput>;
  };

  /**
   * ShortenedUrl delete
   */
  export type ShortenedUrlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortenedUrl
     */
    select?: ShortenedUrlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShortenedUrl
     */
    omit?: ShortenedUrlOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortenedUrlInclude<ExtArgs> | null;
    /**
     * Filter which ShortenedUrl to delete.
     */
    where: ShortenedUrlWhereUniqueInput;
  };

  /**
   * ShortenedUrl deleteMany
   */
  export type ShortenedUrlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShortenedUrls to delete
     */
    where?: ShortenedUrlWhereInput;
    /**
     * Limit how many ShortenedUrls to delete.
     */
    limit?: number;
  };

  /**
   * ShortenedUrl.visits
   */
  export type ShortenedUrl$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null;
    where?: VisitWhereInput;
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[];
    cursor?: VisitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[];
  };

  /**
   * ShortenedUrl without action
   */
  export type ShortenedUrlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortenedUrl
     */
    select?: ShortenedUrlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShortenedUrl
     */
    omit?: ShortenedUrlOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortenedUrlInclude<ExtArgs> | null;
  };

  /**
   * Model Visit
   */

  export type AggregateVisit = {
    _count: VisitCountAggregateOutputType | null;
    _min: VisitMinAggregateOutputType | null;
    _max: VisitMaxAggregateOutputType | null;
  };

  export type VisitMinAggregateOutputType = {
    id: string | null;
    shortenedUrlId: string | null;
    visitedAt: Date | null;
    referrer: string | null;
  };

  export type VisitMaxAggregateOutputType = {
    id: string | null;
    shortenedUrlId: string | null;
    visitedAt: Date | null;
    referrer: string | null;
  };

  export type VisitCountAggregateOutputType = {
    id: number;
    shortenedUrlId: number;
    visitedAt: number;
    referrer: number;
    _all: number;
  };

  export type VisitMinAggregateInputType = {
    id?: true;
    shortenedUrlId?: true;
    visitedAt?: true;
    referrer?: true;
  };

  export type VisitMaxAggregateInputType = {
    id?: true;
    shortenedUrlId?: true;
    visitedAt?: true;
    referrer?: true;
  };

  export type VisitCountAggregateInputType = {
    id?: true;
    shortenedUrlId?: true;
    visitedAt?: true;
    referrer?: true;
    _all?: true;
  };

  export type VisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visit to aggregate.
     */
    where?: VisitWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: VisitWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Visits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Visits
     **/
    _count?: true | VisitCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VisitMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VisitMaxAggregateInputType;
  };

  export type GetVisitAggregateType<T extends VisitAggregateArgs> = {
    [P in keyof T & keyof AggregateVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisit[P]>
      : GetScalarType<T[P], AggregateVisit[P]>;
  };

  export type VisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitWhereInput;
    orderBy?: VisitOrderByWithAggregationInput | VisitOrderByWithAggregationInput[];
    by: VisitScalarFieldEnum[] | VisitScalarFieldEnum;
    having?: VisitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VisitCountAggregateInputType | true;
    _min?: VisitMinAggregateInputType;
    _max?: VisitMaxAggregateInputType;
  };

  export type VisitGroupByOutputType = {
    id: string;
    shortenedUrlId: string;
    visitedAt: Date;
    referrer: string | null;
    _count: VisitCountAggregateOutputType | null;
    _min: VisitMinAggregateOutputType | null;
    _max: VisitMaxAggregateOutputType | null;
  };

  type GetVisitGroupByPayload<T extends VisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitGroupByOutputType, T['by']> & {
        [P in keyof T & keyof VisitGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], VisitGroupByOutputType[P]>
          : GetScalarType<T[P], VisitGroupByOutputType[P]>;
      }
    >
  >;

  export type VisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      shortenedUrlId?: boolean;
      visitedAt?: boolean;
      referrer?: boolean;
      shortenedUrl?: boolean | ShortenedUrlDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['visit']
  >;

  export type VisitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        shortenedUrlId?: boolean;
        visitedAt?: boolean;
        referrer?: boolean;
        shortenedUrl?: boolean | ShortenedUrlDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['visit']
    >;

  export type VisitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        shortenedUrlId?: boolean;
        visitedAt?: boolean;
        referrer?: boolean;
        shortenedUrl?: boolean | ShortenedUrlDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['visit']
    >;

  export type VisitSelectScalar = {
    id?: boolean;
    shortenedUrlId?: boolean;
    visitedAt?: boolean;
    referrer?: boolean;
  };

  export type VisitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
    'id' | 'shortenedUrlId' | 'visitedAt' | 'referrer',
    ExtArgs['result']['visit']
  >;
  export type VisitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shortenedUrl?: boolean | ShortenedUrlDefaultArgs<ExtArgs>;
  };
  export type VisitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shortenedUrl?: boolean | ShortenedUrlDefaultArgs<ExtArgs>;
  };
  export type VisitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shortenedUrl?: boolean | ShortenedUrlDefaultArgs<ExtArgs>;
  };

  export type $VisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Visit';
    objects: {
      shortenedUrl: Prisma.$ShortenedUrlPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        shortenedUrlId: string;
        visitedAt: Date;
        referrer: string | null;
      },
      ExtArgs['result']['visit']
    >;
    composites: {};
  };

  type VisitGetPayload<S extends boolean | null | undefined | VisitDefaultArgs> = $Result.GetResult<
    Prisma.$VisitPayload,
    S
  >;

  type VisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    VisitFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: VisitCountAggregateInputType | true;
  };

  export interface VisitDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visit']; meta: { name: 'Visit' } };
    /**
     * Find zero or one Visit that matches the filter.
     * @param {VisitFindUniqueArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitFindUniqueArgs>(
      args: SelectSubset<T, VisitFindUniqueArgs<ExtArgs>>,
    ): Prisma__VisitClient<
      $Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Visit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitFindUniqueOrThrowArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitFindUniqueOrThrowArgs>(
      args: SelectSubset<T, VisitFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__VisitClient<
      $Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Visit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindFirstArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitFindFirstArgs>(
      args?: SelectSubset<T, VisitFindFirstArgs<ExtArgs>>,
    ): Prisma__VisitClient<
      $Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Visit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindFirstOrThrowArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VisitFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__VisitClient<
      $Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Visits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visits
     * const visits = await prisma.visit.findMany()
     *
     * // Get first 10 Visits
     * const visits = await prisma.visit.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const visitWithIdOnly = await prisma.visit.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VisitFindManyArgs>(
      args?: SelectSubset<T, VisitFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>;

    /**
     * Create a Visit.
     * @param {VisitCreateArgs} args - Arguments to create a Visit.
     * @example
     * // Create one Visit
     * const Visit = await prisma.visit.create({
     *   data: {
     *     // ... data to create a Visit
     *   }
     * })
     *
     */
    create<T extends VisitCreateArgs>(
      args: SelectSubset<T, VisitCreateArgs<ExtArgs>>,
    ): Prisma__VisitClient<
      $Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Visits.
     * @param {VisitCreateManyArgs} args - Arguments to create many Visits.
     * @example
     * // Create many Visits
     * const visit = await prisma.visit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VisitCreateManyArgs>(
      args?: SelectSubset<T, VisitCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Visits and returns the data saved in the database.
     * @param {VisitCreateManyAndReturnArgs} args - Arguments to create many Visits.
     * @example
     * // Create many Visits
     * const visit = await prisma.visit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Visits and only return the `id`
     * const visitWithIdOnly = await prisma.visit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VisitCreateManyAndReturnArgs>(
      args?: SelectSubset<T, VisitCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Visit.
     * @param {VisitDeleteArgs} args - Arguments to delete one Visit.
     * @example
     * // Delete one Visit
     * const Visit = await prisma.visit.delete({
     *   where: {
     *     // ... filter to delete one Visit
     *   }
     * })
     *
     */
    delete<T extends VisitDeleteArgs>(
      args: SelectSubset<T, VisitDeleteArgs<ExtArgs>>,
    ): Prisma__VisitClient<
      $Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Visit.
     * @param {VisitUpdateArgs} args - Arguments to update one Visit.
     * @example
     * // Update one Visit
     * const visit = await prisma.visit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VisitUpdateArgs>(
      args: SelectSubset<T, VisitUpdateArgs<ExtArgs>>,
    ): Prisma__VisitClient<
      $Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Visits.
     * @param {VisitDeleteManyArgs} args - Arguments to filter Visits to delete.
     * @example
     * // Delete a few Visits
     * const { count } = await prisma.visit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VisitDeleteManyArgs>(
      args?: SelectSubset<T, VisitDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visits
     * const visit = await prisma.visit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VisitUpdateManyArgs>(
      args: SelectSubset<T, VisitUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Visits and returns the data updated in the database.
     * @param {VisitUpdateManyAndReturnArgs} args - Arguments to update many Visits.
     * @example
     * // Update many Visits
     * const visit = await prisma.visit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Visits and only return the `id`
     * const visitWithIdOnly = await prisma.visit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends VisitUpdateManyAndReturnArgs>(
      args: SelectSubset<T, VisitUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Visit.
     * @param {VisitUpsertArgs} args - Arguments to update or create a Visit.
     * @example
     * // Update or create a Visit
     * const visit = await prisma.visit.upsert({
     *   create: {
     *     // ... data to create a Visit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visit we want to update
     *   }
     * })
     */
    upsert<T extends VisitUpsertArgs>(
      args: SelectSubset<T, VisitUpsertArgs<ExtArgs>>,
    ): Prisma__VisitClient<
      $Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitCountArgs} args - Arguments to filter Visits to count.
     * @example
     * // Count the number of Visits
     * const count = await prisma.visit.count({
     *   where: {
     *     // ... the filter for the Visits we want to count
     *   }
     * })
     **/
    count<T extends VisitCountArgs>(
      args?: Subset<T, VisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Visit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends VisitAggregateArgs>(
      args: Subset<T, VisitAggregateArgs>,
    ): Prisma.PrismaPromise<GetVisitAggregateType<T>>;

    /**
     * Group by Visit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends VisitGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitGroupByArgs['orderBy'] }
        : { orderBy?: VisitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, VisitGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Visit model
     */
    readonly fields: VisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    shortenedUrl<T extends ShortenedUrlDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ShortenedUrlDefaultArgs<ExtArgs>>,
    ): Prisma__ShortenedUrlClient<
      $Result.GetResult<Prisma.$ShortenedUrlPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Visit model
   */
  interface VisitFieldRefs {
    readonly id: FieldRef<'Visit', 'String'>;
    readonly shortenedUrlId: FieldRef<'Visit', 'String'>;
    readonly visitedAt: FieldRef<'Visit', 'DateTime'>;
    readonly referrer: FieldRef<'Visit', 'String'>;
  }

  // Custom InputTypes
  /**
   * Visit findUnique
   */
  export type VisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null;
    /**
     * Filter, which Visit to fetch.
     */
    where: VisitWhereUniqueInput;
  };

  /**
   * Visit findUniqueOrThrow
   */
  export type VisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null;
    /**
     * Filter, which Visit to fetch.
     */
    where: VisitWhereUniqueInput;
  };

  /**
   * Visit findFirst
   */
  export type VisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null;
    /**
     * Filter, which Visit to fetch.
     */
    where?: VisitWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Visits.
     */
    cursor?: VisitWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Visits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Visits.
     */
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[];
  };

  /**
   * Visit findFirstOrThrow
   */
  export type VisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null;
    /**
     * Filter, which Visit to fetch.
     */
    where?: VisitWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Visits.
     */
    cursor?: VisitWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Visits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Visits.
     */
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[];
  };

  /**
   * Visit findMany
   */
  export type VisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null;
    /**
     * Filter, which Visits to fetch.
     */
    where?: VisitWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Visits.
     */
    cursor?: VisitWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Visits.
     */
    skip?: number;
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[];
  };

  /**
   * Visit create
   */
  export type VisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null;
    /**
     * The data needed to create a Visit.
     */
    data: XOR<VisitCreateInput, VisitUncheckedCreateInput>;
  };

  /**
   * Visit createMany
   */
  export type VisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visits.
     */
    data: VisitCreateManyInput | VisitCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Visit createManyAndReturn
   */
  export type VisitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null;
    /**
     * The data used to create many Visits.
     */
    data: VisitCreateManyInput | VisitCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Visit update
   */
  export type VisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null;
    /**
     * The data needed to update a Visit.
     */
    data: XOR<VisitUpdateInput, VisitUncheckedUpdateInput>;
    /**
     * Choose, which Visit to update.
     */
    where: VisitWhereUniqueInput;
  };

  /**
   * Visit updateMany
   */
  export type VisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visits.
     */
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyInput>;
    /**
     * Filter which Visits to update
     */
    where?: VisitWhereInput;
    /**
     * Limit how many Visits to update.
     */
    limit?: number;
  };

  /**
   * Visit updateManyAndReturn
   */
  export type VisitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null;
    /**
     * The data used to update Visits.
     */
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyInput>;
    /**
     * Filter which Visits to update
     */
    where?: VisitWhereInput;
    /**
     * Limit how many Visits to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Visit upsert
   */
  export type VisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null;
    /**
     * The filter to search for the Visit to update in case it exists.
     */
    where: VisitWhereUniqueInput;
    /**
     * In case the Visit found by the `where` argument doesn't exist, create a new Visit with this data.
     */
    create: XOR<VisitCreateInput, VisitUncheckedCreateInput>;
    /**
     * In case the Visit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitUpdateInput, VisitUncheckedUpdateInput>;
  };

  /**
   * Visit delete
   */
  export type VisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null;
    /**
     * Filter which Visit to delete.
     */
    where: VisitWhereUniqueInput;
  };

  /**
   * Visit deleteMany
   */
  export type VisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visits to delete
     */
    where?: VisitWhereInput;
    /**
     * Limit how many Visits to delete.
     */
    limit?: number;
  };

  /**
   * Visit without action
   */
  export type VisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null;
  };

  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null;
    _avg: ArticleAvgAggregateOutputType | null;
    _sum: ArticleSumAggregateOutputType | null;
    _min: ArticleMinAggregateOutputType | null;
    _max: ArticleMaxAggregateOutputType | null;
  };

  export type ArticleAvgAggregateOutputType = {
    price: number | null;
  };

  export type ArticleSumAggregateOutputType = {
    price: number | null;
  };

  export type ArticleMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    price: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    isPublished: boolean | null;
    userId: string | null;
  };

  export type ArticleMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    price: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    isPublished: boolean | null;
    userId: string | null;
  };

  export type ArticleCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    price: number;
    createdAt: number;
    updatedAt: number;
    isPublished: number;
    userId: number;
    _all: number;
  };

  export type ArticleAvgAggregateInputType = {
    price?: true;
  };

  export type ArticleSumAggregateInputType = {
    price?: true;
  };

  export type ArticleMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    price?: true;
    createdAt?: true;
    updatedAt?: true;
    isPublished?: true;
    userId?: true;
  };

  export type ArticleMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    price?: true;
    createdAt?: true;
    updatedAt?: true;
    isPublished?: true;
    userId?: true;
  };

  export type ArticleCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    price?: true;
    createdAt?: true;
    updatedAt?: true;
    isPublished?: true;
    userId?: true;
    _all?: true;
  };

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Articles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Articles
     **/
    _count?: true | ArticleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ArticleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ArticleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ArticleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ArticleMaxAggregateInputType;
  };

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
    [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>;
  };

  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput;
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[];
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum;
    having?: ArticleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ArticleCountAggregateInputType | true;
    _avg?: ArticleAvgAggregateInputType;
    _sum?: ArticleSumAggregateInputType;
    _min?: ArticleMinAggregateInputType;
    _max?: ArticleMaxAggregateInputType;
  };

  export type ArticleGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    isPublished: boolean;
    userId: string;
    _count: ArticleCountAggregateOutputType | null;
    _avg: ArticleAvgAggregateOutputType | null;
    _sum: ArticleSumAggregateOutputType | null;
    _min: ArticleMinAggregateOutputType | null;
    _max: ArticleMaxAggregateOutputType | null;
  };

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ArticleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
          : GetScalarType<T[P], ArticleGroupByOutputType[P]>;
      }
    >
  >;

  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      price?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      isPublished?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      images?: boolean | Article$imagesArgs<ExtArgs>;
      categories?: boolean | Article$categoriesArgs<ExtArgs>;
      _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['article']
  >;

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        description?: boolean;
        price?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        isPublished?: boolean;
        userId?: boolean;
        user?: boolean | UserDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['article']
    >;

  export type ArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        description?: boolean;
        price?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        isPublished?: boolean;
        userId?: boolean;
        user?: boolean | UserDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['article']
    >;

  export type ArticleSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    price?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    isPublished?: boolean;
    userId?: boolean;
  };

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
    'id' | 'title' | 'description' | 'price' | 'createdAt' | 'updatedAt' | 'isPublished' | 'userId',
    ExtArgs['result']['article']
  >;
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    images?: boolean | Article$imagesArgs<ExtArgs>;
    categories?: boolean | Article$categoriesArgs<ExtArgs>;
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Article';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      images: Prisma.$ArticleImagesPayload<ExtArgs>[];
      categories: Prisma.$ArticleCategoriesPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
        isPublished: boolean;
        userId: string;
      },
      ExtArgs['result']['article']
    >;
    composites: {};
  };

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<
    Prisma.$ArticlePayload,
    S
  >;

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ArticleFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ArticleCountAggregateInputType | true;
  };

  export interface ArticleDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article']; meta: { name: 'Article' } };
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(
      args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(
      args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     *
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ArticleFindManyArgs>(
      args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>;

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     *
     */
    create<T extends ArticleCreateArgs>(
      args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ArticleCreateManyArgs>(
      args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     *
     */
    delete<T extends ArticleDeleteArgs>(
      args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ArticleUpdateArgs>(
      args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ArticleDeleteManyArgs>(
      args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ArticleUpdateManyArgs>(
      args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(
      args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
     **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ArticleAggregateArgs>(
      args: Subset<T, ArticleAggregateArgs>,
    ): Prisma.PrismaPromise<GetArticleAggregateType<T>>;

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Article model
     */
    readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    images<T extends Article$imagesArgs<ExtArgs> = {}>(
      args?: Subset<T, Article$imagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ArticleImagesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    categories<T extends Article$categoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, Article$categoriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ArticleCategoriesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<'Article', 'String'>;
    readonly title: FieldRef<'Article', 'String'>;
    readonly description: FieldRef<'Article', 'String'>;
    readonly price: FieldRef<'Article', 'Float'>;
    readonly createdAt: FieldRef<'Article', 'DateTime'>;
    readonly updatedAt: FieldRef<'Article', 'DateTime'>;
    readonly isPublished: FieldRef<'Article', 'Boolean'>;
    readonly userId: FieldRef<'Article', 'String'>;
  }

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput;
  };

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput;
  };

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Articles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[];
  };

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Articles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[];
  };

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Articles.
     */
    skip?: number;
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[];
  };

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>;
  };

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>;
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput;
  };

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>;
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput;
    /**
     * Limit how many Articles to update.
     */
    limit?: number;
  };

  /**
   * Article updateManyAndReturn
   */
  export type ArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>;
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput;
    /**
     * Limit how many Articles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput;
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>;
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>;
  };

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput;
  };

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput;
    /**
     * Limit how many Articles to delete.
     */
    limit?: number;
  };

  /**
   * Article.images
   */
  export type Article$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImages
     */
    select?: ArticleImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleImages
     */
    omit?: ArticleImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImagesInclude<ExtArgs> | null;
    where?: ArticleImagesWhereInput;
    orderBy?: ArticleImagesOrderByWithRelationInput | ArticleImagesOrderByWithRelationInput[];
    cursor?: ArticleImagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ArticleImagesScalarFieldEnum | ArticleImagesScalarFieldEnum[];
  };

  /**
   * Article.categories
   */
  export type Article$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategories
     */
    select?: ArticleCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleCategories
     */
    omit?: ArticleCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoriesInclude<ExtArgs> | null;
    where?: ArticleCategoriesWhereInput;
    orderBy?: ArticleCategoriesOrderByWithRelationInput | ArticleCategoriesOrderByWithRelationInput[];
    cursor?: ArticleCategoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ArticleCategoriesScalarFieldEnum | ArticleCategoriesScalarFieldEnum[];
  };

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
  };

  /**
   * Model ArticleCategories
   */

  export type AggregateArticleCategories = {
    _count: ArticleCategoriesCountAggregateOutputType | null;
    _min: ArticleCategoriesMinAggregateOutputType | null;
    _max: ArticleCategoriesMaxAggregateOutputType | null;
  };

  export type ArticleCategoriesMinAggregateOutputType = {
    id: string | null;
    articleId: string | null;
    categoryId: string | null;
  };

  export type ArticleCategoriesMaxAggregateOutputType = {
    id: string | null;
    articleId: string | null;
    categoryId: string | null;
  };

  export type ArticleCategoriesCountAggregateOutputType = {
    id: number;
    articleId: number;
    categoryId: number;
    _all: number;
  };

  export type ArticleCategoriesMinAggregateInputType = {
    id?: true;
    articleId?: true;
    categoryId?: true;
  };

  export type ArticleCategoriesMaxAggregateInputType = {
    id?: true;
    articleId?: true;
    categoryId?: true;
  };

  export type ArticleCategoriesCountAggregateInputType = {
    id?: true;
    articleId?: true;
    categoryId?: true;
    _all?: true;
  };

  export type ArticleCategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleCategories to aggregate.
     */
    where?: ArticleCategoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ArticleCategories to fetch.
     */
    orderBy?: ArticleCategoriesOrderByWithRelationInput | ArticleCategoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ArticleCategoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ArticleCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ArticleCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ArticleCategories
     **/
    _count?: true | ArticleCategoriesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ArticleCategoriesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ArticleCategoriesMaxAggregateInputType;
  };

  export type GetArticleCategoriesAggregateType<T extends ArticleCategoriesAggregateArgs> = {
    [P in keyof T & keyof AggregateArticleCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleCategories[P]>
      : GetScalarType<T[P], AggregateArticleCategories[P]>;
  };

  export type ArticleCategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleCategoriesWhereInput;
    orderBy?: ArticleCategoriesOrderByWithAggregationInput | ArticleCategoriesOrderByWithAggregationInput[];
    by: ArticleCategoriesScalarFieldEnum[] | ArticleCategoriesScalarFieldEnum;
    having?: ArticleCategoriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ArticleCategoriesCountAggregateInputType | true;
    _min?: ArticleCategoriesMinAggregateInputType;
    _max?: ArticleCategoriesMaxAggregateInputType;
  };

  export type ArticleCategoriesGroupByOutputType = {
    id: string;
    articleId: string;
    categoryId: string;
    _count: ArticleCategoriesCountAggregateOutputType | null;
    _min: ArticleCategoriesMinAggregateOutputType | null;
    _max: ArticleCategoriesMaxAggregateOutputType | null;
  };

  type GetArticleCategoriesGroupByPayload<T extends ArticleCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleCategoriesGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ArticleCategoriesGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ArticleCategoriesGroupByOutputType[P]>
          : GetScalarType<T[P], ArticleCategoriesGroupByOutputType[P]>;
      }
    >
  >;

  export type ArticleCategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        articleId?: boolean;
        categoryId?: boolean;
        article?: boolean | ArticleDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['articleCategories']
    >;

  export type ArticleCategoriesSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      articleId?: boolean;
      categoryId?: boolean;
      article?: boolean | ArticleDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['articleCategories']
  >;

  export type ArticleCategoriesSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      articleId?: boolean;
      categoryId?: boolean;
      article?: boolean | ArticleDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['articleCategories']
  >;

  export type ArticleCategoriesSelectScalar = {
    id?: boolean;
    articleId?: boolean;
    categoryId?: boolean;
  };

  export type ArticleCategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'articleId' | 'categoryId', ExtArgs['result']['articleCategories']>;
  export type ArticleCategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>;
  };
  export type ArticleCategoriesIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>;
  };
  export type ArticleCategoriesIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>;
  };

  export type $ArticleCategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'ArticleCategories';
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        articleId: string;
        categoryId: string;
      },
      ExtArgs['result']['articleCategories']
    >;
    composites: {};
  };

  type ArticleCategoriesGetPayload<S extends boolean | null | undefined | ArticleCategoriesDefaultArgs> =
    $Result.GetResult<Prisma.$ArticleCategoriesPayload, S>;

  type ArticleCategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ArticleCategoriesFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ArticleCategoriesCountAggregateInputType | true;
  };

  export interface ArticleCategoriesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleCategories']; meta: { name: 'ArticleCategories' } };
    /**
     * Find zero or one ArticleCategories that matches the filter.
     * @param {ArticleCategoriesFindUniqueArgs} args - Arguments to find a ArticleCategories
     * @example
     * // Get one ArticleCategories
     * const articleCategories = await prisma.articleCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleCategoriesFindUniqueArgs>(
      args: SelectSubset<T, ArticleCategoriesFindUniqueArgs<ExtArgs>>,
    ): Prisma__ArticleCategoriesClient<
      $Result.GetResult<Prisma.$ArticleCategoriesPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ArticleCategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleCategoriesFindUniqueOrThrowArgs} args - Arguments to find a ArticleCategories
     * @example
     * // Get one ArticleCategories
     * const articleCategories = await prisma.articleCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleCategoriesFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ArticleCategoriesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ArticleCategoriesClient<
      $Result.GetResult<Prisma.$ArticleCategoriesPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ArticleCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoriesFindFirstArgs} args - Arguments to find a ArticleCategories
     * @example
     * // Get one ArticleCategories
     * const articleCategories = await prisma.articleCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleCategoriesFindFirstArgs>(
      args?: SelectSubset<T, ArticleCategoriesFindFirstArgs<ExtArgs>>,
    ): Prisma__ArticleCategoriesClient<
      $Result.GetResult<Prisma.$ArticleCategoriesPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ArticleCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoriesFindFirstOrThrowArgs} args - Arguments to find a ArticleCategories
     * @example
     * // Get one ArticleCategories
     * const articleCategories = await prisma.articleCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleCategoriesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ArticleCategoriesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ArticleCategoriesClient<
      $Result.GetResult<Prisma.$ArticleCategoriesPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ArticleCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleCategories
     * const articleCategories = await prisma.articleCategories.findMany()
     *
     * // Get first 10 ArticleCategories
     * const articleCategories = await prisma.articleCategories.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const articleCategoriesWithIdOnly = await prisma.articleCategories.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ArticleCategoriesFindManyArgs>(
      args?: SelectSubset<T, ArticleCategoriesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ArticleCategoriesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a ArticleCategories.
     * @param {ArticleCategoriesCreateArgs} args - Arguments to create a ArticleCategories.
     * @example
     * // Create one ArticleCategories
     * const ArticleCategories = await prisma.articleCategories.create({
     *   data: {
     *     // ... data to create a ArticleCategories
     *   }
     * })
     *
     */
    create<T extends ArticleCategoriesCreateArgs>(
      args: SelectSubset<T, ArticleCategoriesCreateArgs<ExtArgs>>,
    ): Prisma__ArticleCategoriesClient<
      $Result.GetResult<Prisma.$ArticleCategoriesPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ArticleCategories.
     * @param {ArticleCategoriesCreateManyArgs} args - Arguments to create many ArticleCategories.
     * @example
     * // Create many ArticleCategories
     * const articleCategories = await prisma.articleCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ArticleCategoriesCreateManyArgs>(
      args?: SelectSubset<T, ArticleCategoriesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ArticleCategories and returns the data saved in the database.
     * @param {ArticleCategoriesCreateManyAndReturnArgs} args - Arguments to create many ArticleCategories.
     * @example
     * // Create many ArticleCategories
     * const articleCategories = await prisma.articleCategories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ArticleCategories and only return the `id`
     * const articleCategoriesWithIdOnly = await prisma.articleCategories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ArticleCategoriesCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ArticleCategoriesCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ArticleCategoriesPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a ArticleCategories.
     * @param {ArticleCategoriesDeleteArgs} args - Arguments to delete one ArticleCategories.
     * @example
     * // Delete one ArticleCategories
     * const ArticleCategories = await prisma.articleCategories.delete({
     *   where: {
     *     // ... filter to delete one ArticleCategories
     *   }
     * })
     *
     */
    delete<T extends ArticleCategoriesDeleteArgs>(
      args: SelectSubset<T, ArticleCategoriesDeleteArgs<ExtArgs>>,
    ): Prisma__ArticleCategoriesClient<
      $Result.GetResult<Prisma.$ArticleCategoriesPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ArticleCategories.
     * @param {ArticleCategoriesUpdateArgs} args - Arguments to update one ArticleCategories.
     * @example
     * // Update one ArticleCategories
     * const articleCategories = await prisma.articleCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ArticleCategoriesUpdateArgs>(
      args: SelectSubset<T, ArticleCategoriesUpdateArgs<ExtArgs>>,
    ): Prisma__ArticleCategoriesClient<
      $Result.GetResult<Prisma.$ArticleCategoriesPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ArticleCategories.
     * @param {ArticleCategoriesDeleteManyArgs} args - Arguments to filter ArticleCategories to delete.
     * @example
     * // Delete a few ArticleCategories
     * const { count } = await prisma.articleCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ArticleCategoriesDeleteManyArgs>(
      args?: SelectSubset<T, ArticleCategoriesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ArticleCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleCategories
     * const articleCategories = await prisma.articleCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ArticleCategoriesUpdateManyArgs>(
      args: SelectSubset<T, ArticleCategoriesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ArticleCategories and returns the data updated in the database.
     * @param {ArticleCategoriesUpdateManyAndReturnArgs} args - Arguments to update many ArticleCategories.
     * @example
     * // Update many ArticleCategories
     * const articleCategories = await prisma.articleCategories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ArticleCategories and only return the `id`
     * const articleCategoriesWithIdOnly = await prisma.articleCategories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ArticleCategoriesUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ArticleCategoriesUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ArticleCategoriesPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one ArticleCategories.
     * @param {ArticleCategoriesUpsertArgs} args - Arguments to update or create a ArticleCategories.
     * @example
     * // Update or create a ArticleCategories
     * const articleCategories = await prisma.articleCategories.upsert({
     *   create: {
     *     // ... data to create a ArticleCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleCategories we want to update
     *   }
     * })
     */
    upsert<T extends ArticleCategoriesUpsertArgs>(
      args: SelectSubset<T, ArticleCategoriesUpsertArgs<ExtArgs>>,
    ): Prisma__ArticleCategoriesClient<
      $Result.GetResult<Prisma.$ArticleCategoriesPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ArticleCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoriesCountArgs} args - Arguments to filter ArticleCategories to count.
     * @example
     * // Count the number of ArticleCategories
     * const count = await prisma.articleCategories.count({
     *   where: {
     *     // ... the filter for the ArticleCategories we want to count
     *   }
     * })
     **/
    count<T extends ArticleCategoriesCountArgs>(
      args?: Subset<T, ArticleCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCategoriesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ArticleCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ArticleCategoriesAggregateArgs>(
      args: Subset<T, ArticleCategoriesAggregateArgs>,
    ): Prisma.PrismaPromise<GetArticleCategoriesAggregateType<T>>;

    /**
     * Group by ArticleCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ArticleCategoriesGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: ArticleCategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ArticleCategoriesGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetArticleCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ArticleCategories model
     */
    readonly fields: ArticleCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleCategoriesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ArticleDefaultArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ArticleCategories model
   */
  interface ArticleCategoriesFieldRefs {
    readonly id: FieldRef<'ArticleCategories', 'String'>;
    readonly articleId: FieldRef<'ArticleCategories', 'String'>;
    readonly categoryId: FieldRef<'ArticleCategories', 'String'>;
  }

  // Custom InputTypes
  /**
   * ArticleCategories findUnique
   */
  export type ArticleCategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategories
     */
    select?: ArticleCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleCategories
     */
    omit?: ArticleCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which ArticleCategories to fetch.
     */
    where: ArticleCategoriesWhereUniqueInput;
  };

  /**
   * ArticleCategories findUniqueOrThrow
   */
  export type ArticleCategoriesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ArticleCategories
     */
    select?: ArticleCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleCategories
     */
    omit?: ArticleCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which ArticleCategories to fetch.
     */
    where: ArticleCategoriesWhereUniqueInput;
  };

  /**
   * ArticleCategories findFirst
   */
  export type ArticleCategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategories
     */
    select?: ArticleCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleCategories
     */
    omit?: ArticleCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which ArticleCategories to fetch.
     */
    where?: ArticleCategoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ArticleCategories to fetch.
     */
    orderBy?: ArticleCategoriesOrderByWithRelationInput | ArticleCategoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ArticleCategories.
     */
    cursor?: ArticleCategoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ArticleCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ArticleCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ArticleCategories.
     */
    distinct?: ArticleCategoriesScalarFieldEnum | ArticleCategoriesScalarFieldEnum[];
  };

  /**
   * ArticleCategories findFirstOrThrow
   */
  export type ArticleCategoriesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ArticleCategories
     */
    select?: ArticleCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleCategories
     */
    omit?: ArticleCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which ArticleCategories to fetch.
     */
    where?: ArticleCategoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ArticleCategories to fetch.
     */
    orderBy?: ArticleCategoriesOrderByWithRelationInput | ArticleCategoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ArticleCategories.
     */
    cursor?: ArticleCategoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ArticleCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ArticleCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ArticleCategories.
     */
    distinct?: ArticleCategoriesScalarFieldEnum | ArticleCategoriesScalarFieldEnum[];
  };

  /**
   * ArticleCategories findMany
   */
  export type ArticleCategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategories
     */
    select?: ArticleCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleCategories
     */
    omit?: ArticleCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which ArticleCategories to fetch.
     */
    where?: ArticleCategoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ArticleCategories to fetch.
     */
    orderBy?: ArticleCategoriesOrderByWithRelationInput | ArticleCategoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ArticleCategories.
     */
    cursor?: ArticleCategoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ArticleCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ArticleCategories.
     */
    skip?: number;
    distinct?: ArticleCategoriesScalarFieldEnum | ArticleCategoriesScalarFieldEnum[];
  };

  /**
   * ArticleCategories create
   */
  export type ArticleCategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategories
     */
    select?: ArticleCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleCategories
     */
    omit?: ArticleCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoriesInclude<ExtArgs> | null;
    /**
     * The data needed to create a ArticleCategories.
     */
    data: XOR<ArticleCategoriesCreateInput, ArticleCategoriesUncheckedCreateInput>;
  };

  /**
   * ArticleCategories createMany
   */
  export type ArticleCategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleCategories.
     */
    data: ArticleCategoriesCreateManyInput | ArticleCategoriesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ArticleCategories createManyAndReturn
   */
  export type ArticleCategoriesCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ArticleCategories
     */
    select?: ArticleCategoriesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleCategories
     */
    omit?: ArticleCategoriesOmit<ExtArgs> | null;
    /**
     * The data used to create many ArticleCategories.
     */
    data: ArticleCategoriesCreateManyInput | ArticleCategoriesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoriesIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ArticleCategories update
   */
  export type ArticleCategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategories
     */
    select?: ArticleCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleCategories
     */
    omit?: ArticleCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoriesInclude<ExtArgs> | null;
    /**
     * The data needed to update a ArticleCategories.
     */
    data: XOR<ArticleCategoriesUpdateInput, ArticleCategoriesUncheckedUpdateInput>;
    /**
     * Choose, which ArticleCategories to update.
     */
    where: ArticleCategoriesWhereUniqueInput;
  };

  /**
   * ArticleCategories updateMany
   */
  export type ArticleCategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleCategories.
     */
    data: XOR<ArticleCategoriesUpdateManyMutationInput, ArticleCategoriesUncheckedUpdateManyInput>;
    /**
     * Filter which ArticleCategories to update
     */
    where?: ArticleCategoriesWhereInput;
    /**
     * Limit how many ArticleCategories to update.
     */
    limit?: number;
  };

  /**
   * ArticleCategories updateManyAndReturn
   */
  export type ArticleCategoriesUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ArticleCategories
     */
    select?: ArticleCategoriesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleCategories
     */
    omit?: ArticleCategoriesOmit<ExtArgs> | null;
    /**
     * The data used to update ArticleCategories.
     */
    data: XOR<ArticleCategoriesUpdateManyMutationInput, ArticleCategoriesUncheckedUpdateManyInput>;
    /**
     * Filter which ArticleCategories to update
     */
    where?: ArticleCategoriesWhereInput;
    /**
     * Limit how many ArticleCategories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoriesIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ArticleCategories upsert
   */
  export type ArticleCategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategories
     */
    select?: ArticleCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleCategories
     */
    omit?: ArticleCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoriesInclude<ExtArgs> | null;
    /**
     * The filter to search for the ArticleCategories to update in case it exists.
     */
    where: ArticleCategoriesWhereUniqueInput;
    /**
     * In case the ArticleCategories found by the `where` argument doesn't exist, create a new ArticleCategories with this data.
     */
    create: XOR<ArticleCategoriesCreateInput, ArticleCategoriesUncheckedCreateInput>;
    /**
     * In case the ArticleCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleCategoriesUpdateInput, ArticleCategoriesUncheckedUpdateInput>;
  };

  /**
   * ArticleCategories delete
   */
  export type ArticleCategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategories
     */
    select?: ArticleCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleCategories
     */
    omit?: ArticleCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoriesInclude<ExtArgs> | null;
    /**
     * Filter which ArticleCategories to delete.
     */
    where: ArticleCategoriesWhereUniqueInput;
  };

  /**
   * ArticleCategories deleteMany
   */
  export type ArticleCategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleCategories to delete
     */
    where?: ArticleCategoriesWhereInput;
    /**
     * Limit how many ArticleCategories to delete.
     */
    limit?: number;
  };

  /**
   * ArticleCategories without action
   */
  export type ArticleCategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategories
     */
    select?: ArticleCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleCategories
     */
    omit?: ArticleCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoriesInclude<ExtArgs> | null;
  };

  /**
   * Model ArticleImages
   */

  export type AggregateArticleImages = {
    _count: ArticleImagesCountAggregateOutputType | null;
    _min: ArticleImagesMinAggregateOutputType | null;
    _max: ArticleImagesMaxAggregateOutputType | null;
  };

  export type ArticleImagesMinAggregateOutputType = {
    id: string | null;
    articleId: string | null;
    imageUrl: string | null;
  };

  export type ArticleImagesMaxAggregateOutputType = {
    id: string | null;
    articleId: string | null;
    imageUrl: string | null;
  };

  export type ArticleImagesCountAggregateOutputType = {
    id: number;
    articleId: number;
    imageUrl: number;
    _all: number;
  };

  export type ArticleImagesMinAggregateInputType = {
    id?: true;
    articleId?: true;
    imageUrl?: true;
  };

  export type ArticleImagesMaxAggregateInputType = {
    id?: true;
    articleId?: true;
    imageUrl?: true;
  };

  export type ArticleImagesCountAggregateInputType = {
    id?: true;
    articleId?: true;
    imageUrl?: true;
    _all?: true;
  };

  export type ArticleImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleImages to aggregate.
     */
    where?: ArticleImagesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ArticleImages to fetch.
     */
    orderBy?: ArticleImagesOrderByWithRelationInput | ArticleImagesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ArticleImagesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ArticleImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ArticleImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ArticleImages
     **/
    _count?: true | ArticleImagesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ArticleImagesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ArticleImagesMaxAggregateInputType;
  };

  export type GetArticleImagesAggregateType<T extends ArticleImagesAggregateArgs> = {
    [P in keyof T & keyof AggregateArticleImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleImages[P]>
      : GetScalarType<T[P], AggregateArticleImages[P]>;
  };

  export type ArticleImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleImagesWhereInput;
    orderBy?: ArticleImagesOrderByWithAggregationInput | ArticleImagesOrderByWithAggregationInput[];
    by: ArticleImagesScalarFieldEnum[] | ArticleImagesScalarFieldEnum;
    having?: ArticleImagesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ArticleImagesCountAggregateInputType | true;
    _min?: ArticleImagesMinAggregateInputType;
    _max?: ArticleImagesMaxAggregateInputType;
  };

  export type ArticleImagesGroupByOutputType = {
    id: string;
    articleId: string;
    imageUrl: string;
    _count: ArticleImagesCountAggregateOutputType | null;
    _min: ArticleImagesMinAggregateOutputType | null;
    _max: ArticleImagesMaxAggregateOutputType | null;
  };

  type GetArticleImagesGroupByPayload<T extends ArticleImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleImagesGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ArticleImagesGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ArticleImagesGroupByOutputType[P]>
          : GetScalarType<T[P], ArticleImagesGroupByOutputType[P]>;
      }
    >
  >;

  export type ArticleImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        articleId?: boolean;
        imageUrl?: boolean;
        article?: boolean | ArticleDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['articleImages']
    >;

  export type ArticleImagesSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      articleId?: boolean;
      imageUrl?: boolean;
      article?: boolean | ArticleDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['articleImages']
  >;

  export type ArticleImagesSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      articleId?: boolean;
      imageUrl?: boolean;
      article?: boolean | ArticleDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['articleImages']
  >;

  export type ArticleImagesSelectScalar = {
    id?: boolean;
    articleId?: boolean;
    imageUrl?: boolean;
  };

  export type ArticleImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'articleId' | 'imageUrl', ExtArgs['result']['articleImages']>;
  export type ArticleImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>;
  };
  export type ArticleImagesIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>;
  };
  export type ArticleImagesIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>;
  };

  export type $ArticleImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'ArticleImages';
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        articleId: string;
        imageUrl: string;
      },
      ExtArgs['result']['articleImages']
    >;
    composites: {};
  };

  type ArticleImagesGetPayload<S extends boolean | null | undefined | ArticleImagesDefaultArgs> = $Result.GetResult<
    Prisma.$ArticleImagesPayload,
    S
  >;

  type ArticleImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ArticleImagesFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ArticleImagesCountAggregateInputType | true;
  };

  export interface ArticleImagesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleImages']; meta: { name: 'ArticleImages' } };
    /**
     * Find zero or one ArticleImages that matches the filter.
     * @param {ArticleImagesFindUniqueArgs} args - Arguments to find a ArticleImages
     * @example
     * // Get one ArticleImages
     * const articleImages = await prisma.articleImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleImagesFindUniqueArgs>(
      args: SelectSubset<T, ArticleImagesFindUniqueArgs<ExtArgs>>,
    ): Prisma__ArticleImagesClient<
      $Result.GetResult<Prisma.$ArticleImagesPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ArticleImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleImagesFindUniqueOrThrowArgs} args - Arguments to find a ArticleImages
     * @example
     * // Get one ArticleImages
     * const articleImages = await prisma.articleImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleImagesFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ArticleImagesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ArticleImagesClient<
      $Result.GetResult<Prisma.$ArticleImagesPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ArticleImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleImagesFindFirstArgs} args - Arguments to find a ArticleImages
     * @example
     * // Get one ArticleImages
     * const articleImages = await prisma.articleImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleImagesFindFirstArgs>(
      args?: SelectSubset<T, ArticleImagesFindFirstArgs<ExtArgs>>,
    ): Prisma__ArticleImagesClient<
      $Result.GetResult<Prisma.$ArticleImagesPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ArticleImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleImagesFindFirstOrThrowArgs} args - Arguments to find a ArticleImages
     * @example
     * // Get one ArticleImages
     * const articleImages = await prisma.articleImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleImagesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ArticleImagesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ArticleImagesClient<
      $Result.GetResult<Prisma.$ArticleImagesPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ArticleImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleImages
     * const articleImages = await prisma.articleImages.findMany()
     *
     * // Get first 10 ArticleImages
     * const articleImages = await prisma.articleImages.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const articleImagesWithIdOnly = await prisma.articleImages.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ArticleImagesFindManyArgs>(
      args?: SelectSubset<T, ArticleImagesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleImagesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>;

    /**
     * Create a ArticleImages.
     * @param {ArticleImagesCreateArgs} args - Arguments to create a ArticleImages.
     * @example
     * // Create one ArticleImages
     * const ArticleImages = await prisma.articleImages.create({
     *   data: {
     *     // ... data to create a ArticleImages
     *   }
     * })
     *
     */
    create<T extends ArticleImagesCreateArgs>(
      args: SelectSubset<T, ArticleImagesCreateArgs<ExtArgs>>,
    ): Prisma__ArticleImagesClient<
      $Result.GetResult<Prisma.$ArticleImagesPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ArticleImages.
     * @param {ArticleImagesCreateManyArgs} args - Arguments to create many ArticleImages.
     * @example
     * // Create many ArticleImages
     * const articleImages = await prisma.articleImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ArticleImagesCreateManyArgs>(
      args?: SelectSubset<T, ArticleImagesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ArticleImages and returns the data saved in the database.
     * @param {ArticleImagesCreateManyAndReturnArgs} args - Arguments to create many ArticleImages.
     * @example
     * // Create many ArticleImages
     * const articleImages = await prisma.articleImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ArticleImages and only return the `id`
     * const articleImagesWithIdOnly = await prisma.articleImages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ArticleImagesCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ArticleImagesCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ArticleImagesPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a ArticleImages.
     * @param {ArticleImagesDeleteArgs} args - Arguments to delete one ArticleImages.
     * @example
     * // Delete one ArticleImages
     * const ArticleImages = await prisma.articleImages.delete({
     *   where: {
     *     // ... filter to delete one ArticleImages
     *   }
     * })
     *
     */
    delete<T extends ArticleImagesDeleteArgs>(
      args: SelectSubset<T, ArticleImagesDeleteArgs<ExtArgs>>,
    ): Prisma__ArticleImagesClient<
      $Result.GetResult<Prisma.$ArticleImagesPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ArticleImages.
     * @param {ArticleImagesUpdateArgs} args - Arguments to update one ArticleImages.
     * @example
     * // Update one ArticleImages
     * const articleImages = await prisma.articleImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ArticleImagesUpdateArgs>(
      args: SelectSubset<T, ArticleImagesUpdateArgs<ExtArgs>>,
    ): Prisma__ArticleImagesClient<
      $Result.GetResult<Prisma.$ArticleImagesPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ArticleImages.
     * @param {ArticleImagesDeleteManyArgs} args - Arguments to filter ArticleImages to delete.
     * @example
     * // Delete a few ArticleImages
     * const { count } = await prisma.articleImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ArticleImagesDeleteManyArgs>(
      args?: SelectSubset<T, ArticleImagesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ArticleImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleImages
     * const articleImages = await prisma.articleImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ArticleImagesUpdateManyArgs>(
      args: SelectSubset<T, ArticleImagesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ArticleImages and returns the data updated in the database.
     * @param {ArticleImagesUpdateManyAndReturnArgs} args - Arguments to update many ArticleImages.
     * @example
     * // Update many ArticleImages
     * const articleImages = await prisma.articleImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ArticleImages and only return the `id`
     * const articleImagesWithIdOnly = await prisma.articleImages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ArticleImagesUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ArticleImagesUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ArticleImagesPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one ArticleImages.
     * @param {ArticleImagesUpsertArgs} args - Arguments to update or create a ArticleImages.
     * @example
     * // Update or create a ArticleImages
     * const articleImages = await prisma.articleImages.upsert({
     *   create: {
     *     // ... data to create a ArticleImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleImages we want to update
     *   }
     * })
     */
    upsert<T extends ArticleImagesUpsertArgs>(
      args: SelectSubset<T, ArticleImagesUpsertArgs<ExtArgs>>,
    ): Prisma__ArticleImagesClient<
      $Result.GetResult<Prisma.$ArticleImagesPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ArticleImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleImagesCountArgs} args - Arguments to filter ArticleImages to count.
     * @example
     * // Count the number of ArticleImages
     * const count = await prisma.articleImages.count({
     *   where: {
     *     // ... the filter for the ArticleImages we want to count
     *   }
     * })
     **/
    count<T extends ArticleImagesCountArgs>(
      args?: Subset<T, ArticleImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleImagesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ArticleImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ArticleImagesAggregateArgs>(
      args: Subset<T, ArticleImagesAggregateArgs>,
    ): Prisma.PrismaPromise<GetArticleImagesAggregateType<T>>;

    /**
     * Group by ArticleImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ArticleImagesGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleImagesGroupByArgs['orderBy'] }
        : { orderBy?: ArticleImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ArticleImagesGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetArticleImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ArticleImages model
     */
    readonly fields: ArticleImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleImagesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ArticleDefaultArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ArticleImages model
   */
  interface ArticleImagesFieldRefs {
    readonly id: FieldRef<'ArticleImages', 'String'>;
    readonly articleId: FieldRef<'ArticleImages', 'String'>;
    readonly imageUrl: FieldRef<'ArticleImages', 'String'>;
  }

  // Custom InputTypes
  /**
   * ArticleImages findUnique
   */
  export type ArticleImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImages
     */
    select?: ArticleImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleImages
     */
    omit?: ArticleImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImagesInclude<ExtArgs> | null;
    /**
     * Filter, which ArticleImages to fetch.
     */
    where: ArticleImagesWhereUniqueInput;
  };

  /**
   * ArticleImages findUniqueOrThrow
   */
  export type ArticleImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImages
     */
    select?: ArticleImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleImages
     */
    omit?: ArticleImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImagesInclude<ExtArgs> | null;
    /**
     * Filter, which ArticleImages to fetch.
     */
    where: ArticleImagesWhereUniqueInput;
  };

  /**
   * ArticleImages findFirst
   */
  export type ArticleImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImages
     */
    select?: ArticleImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleImages
     */
    omit?: ArticleImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImagesInclude<ExtArgs> | null;
    /**
     * Filter, which ArticleImages to fetch.
     */
    where?: ArticleImagesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ArticleImages to fetch.
     */
    orderBy?: ArticleImagesOrderByWithRelationInput | ArticleImagesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ArticleImages.
     */
    cursor?: ArticleImagesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ArticleImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ArticleImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ArticleImages.
     */
    distinct?: ArticleImagesScalarFieldEnum | ArticleImagesScalarFieldEnum[];
  };

  /**
   * ArticleImages findFirstOrThrow
   */
  export type ArticleImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImages
     */
    select?: ArticleImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleImages
     */
    omit?: ArticleImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImagesInclude<ExtArgs> | null;
    /**
     * Filter, which ArticleImages to fetch.
     */
    where?: ArticleImagesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ArticleImages to fetch.
     */
    orderBy?: ArticleImagesOrderByWithRelationInput | ArticleImagesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ArticleImages.
     */
    cursor?: ArticleImagesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ArticleImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ArticleImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ArticleImages.
     */
    distinct?: ArticleImagesScalarFieldEnum | ArticleImagesScalarFieldEnum[];
  };

  /**
   * ArticleImages findMany
   */
  export type ArticleImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImages
     */
    select?: ArticleImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleImages
     */
    omit?: ArticleImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImagesInclude<ExtArgs> | null;
    /**
     * Filter, which ArticleImages to fetch.
     */
    where?: ArticleImagesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ArticleImages to fetch.
     */
    orderBy?: ArticleImagesOrderByWithRelationInput | ArticleImagesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ArticleImages.
     */
    cursor?: ArticleImagesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ArticleImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ArticleImages.
     */
    skip?: number;
    distinct?: ArticleImagesScalarFieldEnum | ArticleImagesScalarFieldEnum[];
  };

  /**
   * ArticleImages create
   */
  export type ArticleImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImages
     */
    select?: ArticleImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleImages
     */
    omit?: ArticleImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImagesInclude<ExtArgs> | null;
    /**
     * The data needed to create a ArticleImages.
     */
    data: XOR<ArticleImagesCreateInput, ArticleImagesUncheckedCreateInput>;
  };

  /**
   * ArticleImages createMany
   */
  export type ArticleImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleImages.
     */
    data: ArticleImagesCreateManyInput | ArticleImagesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ArticleImages createManyAndReturn
   */
  export type ArticleImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the ArticleImages
       */
      select?: ArticleImagesSelectCreateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the ArticleImages
       */
      omit?: ArticleImagesOmit<ExtArgs> | null;
      /**
       * The data used to create many ArticleImages.
       */
      data: ArticleImagesCreateManyInput | ArticleImagesCreateManyInput[];
      skipDuplicates?: boolean;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: ArticleImagesIncludeCreateManyAndReturn<ExtArgs> | null;
    };

  /**
   * ArticleImages update
   */
  export type ArticleImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImages
     */
    select?: ArticleImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleImages
     */
    omit?: ArticleImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImagesInclude<ExtArgs> | null;
    /**
     * The data needed to update a ArticleImages.
     */
    data: XOR<ArticleImagesUpdateInput, ArticleImagesUncheckedUpdateInput>;
    /**
     * Choose, which ArticleImages to update.
     */
    where: ArticleImagesWhereUniqueInput;
  };

  /**
   * ArticleImages updateMany
   */
  export type ArticleImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleImages.
     */
    data: XOR<ArticleImagesUpdateManyMutationInput, ArticleImagesUncheckedUpdateManyInput>;
    /**
     * Filter which ArticleImages to update
     */
    where?: ArticleImagesWhereInput;
    /**
     * Limit how many ArticleImages to update.
     */
    limit?: number;
  };

  /**
   * ArticleImages updateManyAndReturn
   */
  export type ArticleImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the ArticleImages
       */
      select?: ArticleImagesSelectUpdateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the ArticleImages
       */
      omit?: ArticleImagesOmit<ExtArgs> | null;
      /**
       * The data used to update ArticleImages.
       */
      data: XOR<ArticleImagesUpdateManyMutationInput, ArticleImagesUncheckedUpdateManyInput>;
      /**
       * Filter which ArticleImages to update
       */
      where?: ArticleImagesWhereInput;
      /**
       * Limit how many ArticleImages to update.
       */
      limit?: number;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: ArticleImagesIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

  /**
   * ArticleImages upsert
   */
  export type ArticleImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImages
     */
    select?: ArticleImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleImages
     */
    omit?: ArticleImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImagesInclude<ExtArgs> | null;
    /**
     * The filter to search for the ArticleImages to update in case it exists.
     */
    where: ArticleImagesWhereUniqueInput;
    /**
     * In case the ArticleImages found by the `where` argument doesn't exist, create a new ArticleImages with this data.
     */
    create: XOR<ArticleImagesCreateInput, ArticleImagesUncheckedCreateInput>;
    /**
     * In case the ArticleImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleImagesUpdateInput, ArticleImagesUncheckedUpdateInput>;
  };

  /**
   * ArticleImages delete
   */
  export type ArticleImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImages
     */
    select?: ArticleImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleImages
     */
    omit?: ArticleImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImagesInclude<ExtArgs> | null;
    /**
     * Filter which ArticleImages to delete.
     */
    where: ArticleImagesWhereUniqueInput;
  };

  /**
   * ArticleImages deleteMany
   */
  export type ArticleImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleImages to delete
     */
    where?: ArticleImagesWhereInput;
    /**
     * Limit how many ArticleImages to delete.
     */
    limit?: number;
  };

  /**
   * ArticleImages without action
   */
  export type ArticleImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImages
     */
    select?: ArticleImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArticleImages
     */
    omit?: ArticleImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImagesInclude<ExtArgs> | null;
  };

  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  export type CategoryMinAggregateOutputType = {
    id: string | null;
    name: string | null;
  };

  export type CategoryMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
  };

  export type CategoryCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
  };

  export type CategoryMinAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type CategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type CategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
  };

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned categories
     **/
    _count?: true | CategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoryMaxAggregateInputType;
  };

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>;
  };

  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput;
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[];
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum;
    having?: categoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryCountAggregateInputType | true;
    _min?: CategoryMinAggregateInputType;
    _max?: CategoryMaxAggregateInputType;
  };

  export type CategoryGroupByOutputType = {
    id: string;
    name: string;
    _count: CategoryCountAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CategoryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
          : GetScalarType<T[P], CategoryGroupByOutputType[P]>;
      }
    >
  >;

  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
      },
      ExtArgs['result']['category']
    >;

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
      },
      ExtArgs['result']['category']
    >;

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
      },
      ExtArgs['result']['category']
    >;

  export type categorySelectScalar = {
    id?: boolean;
    name?: boolean;
  };

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
    'id' | 'name',
    ExtArgs['result']['category']
  >;

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'category';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
      },
      ExtArgs['result']['category']
    >;
    composites: {};
  };

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<
    Prisma.$categoryPayload,
    S
  >;

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    categoryFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CategoryCountAggregateInputType | true;
  };

  export interface categoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category']; meta: { name: 'category' } };
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(
      args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__categoryClient<
      $Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__categoryClient<
      $Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(
      args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>,
    ): Prisma__categoryClient<
      $Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__categoryClient<
      $Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     *
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     *
     */
    findMany<T extends categoryFindManyArgs>(
      args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>;

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     *
     */
    create<T extends categoryCreateArgs>(
      args: SelectSubset<T, categoryCreateArgs<ExtArgs>>,
    ): Prisma__categoryClient<
      $Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends categoryCreateManyArgs>(
      args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     *
     */
    delete<T extends categoryDeleteArgs>(
      args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>,
    ): Prisma__categoryClient<
      $Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends categoryUpdateArgs>(
      args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>,
    ): Prisma__categoryClient<
      $Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends categoryDeleteManyArgs>(
      args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends categoryUpdateManyArgs>(
      args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(
      args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>,
    ): Prisma__categoryClient<
      $Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
     **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CategoryAggregateArgs>(
      args: Subset<T, CategoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetCategoryAggregateType<T>>;

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the category model
     */
    readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<'category', 'String'>;
    readonly name: FieldRef<'category', 'String'>;
  }

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null;
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput;
  };

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null;
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput;
  };

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null;
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null;
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null;
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` categories.
     */
    skip?: number;
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null;
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>;
  };

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null;
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null;
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>;
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput;
  };

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>;
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput;
    /**
     * Limit how many categories to update.
     */
    limit?: number;
  };

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null;
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>;
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput;
    /**
     * Limit how many categories to update.
     */
    limit?: number;
  };

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null;
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput;
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>;
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>;
  };

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null;
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput;
  };

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput;
    /**
     * Limit how many categories to delete.
     */
    limit?: number;
  };

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    username: string | null;
    email: string | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    username: string | null;
    email: string | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    username: number;
    email: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput;
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    username: string | null;
    email: string;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      email?: boolean;
      articles?: boolean | User$articlesArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        username?: boolean;
        email?: boolean;
      },
      ExtArgs['result']['user']
    >;

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        username?: boolean;
        email?: boolean;
      },
      ExtArgs['result']['user']
    >;

  export type UserSelectScalar = {
    id?: boolean;
    username?: boolean;
    email?: boolean;
  };

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
    'id' | 'username' | 'email',
    ExtArgs['result']['user']
  >;
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | User$articlesArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {};
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {};

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'User';
    objects: {
      articles: Prisma.$ArticlePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        username: string | null;
        email: string;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<
    Prisma.$UserPayload,
    S
  >;

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    UserFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User']; meta: { name: 'User' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    articles<T extends User$articlesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$articlesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly username: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.articles
   */
  export type User$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    where?: ArticleWhereInput;
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[];
    cursor?: ArticleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ShortenedUrlScalarFieldEnum: {
    id: 'id';
    originalUrl: 'originalUrl';
    createdAt: 'createdAt';
    expiresAt: 'expiresAt';
  };

  export type ShortenedUrlScalarFieldEnum =
    (typeof ShortenedUrlScalarFieldEnum)[keyof typeof ShortenedUrlScalarFieldEnum];

  export const VisitScalarFieldEnum: {
    id: 'id';
    shortenedUrlId: 'shortenedUrlId';
    visitedAt: 'visitedAt';
    referrer: 'referrer';
  };

  export type VisitScalarFieldEnum = (typeof VisitScalarFieldEnum)[keyof typeof VisitScalarFieldEnum];

  export const ArticleScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    price: 'price';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    isPublished: 'isPublished';
    userId: 'userId';
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum];

  export const ArticleCategoriesScalarFieldEnum: {
    id: 'id';
    articleId: 'articleId';
    categoryId: 'categoryId';
  };

  export type ArticleCategoriesScalarFieldEnum =
    (typeof ArticleCategoriesScalarFieldEnum)[keyof typeof ArticleCategoriesScalarFieldEnum];

  export const ArticleImagesScalarFieldEnum: {
    id: 'id';
    articleId: 'articleId';
    imageUrl: 'imageUrl';
  };

  export type ArticleImagesScalarFieldEnum =
    (typeof ArticleImagesScalarFieldEnum)[keyof typeof ArticleImagesScalarFieldEnum];

  export const CategoryScalarFieldEnum: {
    id: 'id';
    name: 'name';
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    username: 'username';
    email: 'email';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type ShortenedUrlWhereInput = {
    AND?: ShortenedUrlWhereInput | ShortenedUrlWhereInput[];
    OR?: ShortenedUrlWhereInput[];
    NOT?: ShortenedUrlWhereInput | ShortenedUrlWhereInput[];
    id?: StringFilter<'ShortenedUrl'> | string;
    originalUrl?: StringFilter<'ShortenedUrl'> | string;
    createdAt?: DateTimeFilter<'ShortenedUrl'> | Date | string;
    expiresAt?: DateTimeNullableFilter<'ShortenedUrl'> | Date | string | null;
    visits?: VisitListRelationFilter;
  };

  export type ShortenedUrlOrderByWithRelationInput = {
    id?: SortOrder;
    originalUrl?: SortOrder;
    createdAt?: SortOrder;
    expiresAt?: SortOrderInput | SortOrder;
    visits?: VisitOrderByRelationAggregateInput;
  };

  export type ShortenedUrlWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ShortenedUrlWhereInput | ShortenedUrlWhereInput[];
      OR?: ShortenedUrlWhereInput[];
      NOT?: ShortenedUrlWhereInput | ShortenedUrlWhereInput[];
      originalUrl?: StringFilter<'ShortenedUrl'> | string;
      createdAt?: DateTimeFilter<'ShortenedUrl'> | Date | string;
      expiresAt?: DateTimeNullableFilter<'ShortenedUrl'> | Date | string | null;
      visits?: VisitListRelationFilter;
    },
    'id'
  >;

  export type ShortenedUrlOrderByWithAggregationInput = {
    id?: SortOrder;
    originalUrl?: SortOrder;
    createdAt?: SortOrder;
    expiresAt?: SortOrderInput | SortOrder;
    _count?: ShortenedUrlCountOrderByAggregateInput;
    _max?: ShortenedUrlMaxOrderByAggregateInput;
    _min?: ShortenedUrlMinOrderByAggregateInput;
  };

  export type ShortenedUrlScalarWhereWithAggregatesInput = {
    AND?: ShortenedUrlScalarWhereWithAggregatesInput | ShortenedUrlScalarWhereWithAggregatesInput[];
    OR?: ShortenedUrlScalarWhereWithAggregatesInput[];
    NOT?: ShortenedUrlScalarWhereWithAggregatesInput | ShortenedUrlScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'ShortenedUrl'> | string;
    originalUrl?: StringWithAggregatesFilter<'ShortenedUrl'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'ShortenedUrl'> | Date | string;
    expiresAt?: DateTimeNullableWithAggregatesFilter<'ShortenedUrl'> | Date | string | null;
  };

  export type VisitWhereInput = {
    AND?: VisitWhereInput | VisitWhereInput[];
    OR?: VisitWhereInput[];
    NOT?: VisitWhereInput | VisitWhereInput[];
    id?: StringFilter<'Visit'> | string;
    shortenedUrlId?: StringFilter<'Visit'> | string;
    visitedAt?: DateTimeFilter<'Visit'> | Date | string;
    referrer?: StringNullableFilter<'Visit'> | string | null;
    shortenedUrl?: XOR<ShortenedUrlScalarRelationFilter, ShortenedUrlWhereInput>;
  };

  export type VisitOrderByWithRelationInput = {
    id?: SortOrder;
    shortenedUrlId?: SortOrder;
    visitedAt?: SortOrder;
    referrer?: SortOrderInput | SortOrder;
    shortenedUrl?: ShortenedUrlOrderByWithRelationInput;
  };

  export type VisitWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: VisitWhereInput | VisitWhereInput[];
      OR?: VisitWhereInput[];
      NOT?: VisitWhereInput | VisitWhereInput[];
      shortenedUrlId?: StringFilter<'Visit'> | string;
      visitedAt?: DateTimeFilter<'Visit'> | Date | string;
      referrer?: StringNullableFilter<'Visit'> | string | null;
      shortenedUrl?: XOR<ShortenedUrlScalarRelationFilter, ShortenedUrlWhereInput>;
    },
    'id'
  >;

  export type VisitOrderByWithAggregationInput = {
    id?: SortOrder;
    shortenedUrlId?: SortOrder;
    visitedAt?: SortOrder;
    referrer?: SortOrderInput | SortOrder;
    _count?: VisitCountOrderByAggregateInput;
    _max?: VisitMaxOrderByAggregateInput;
    _min?: VisitMinOrderByAggregateInput;
  };

  export type VisitScalarWhereWithAggregatesInput = {
    AND?: VisitScalarWhereWithAggregatesInput | VisitScalarWhereWithAggregatesInput[];
    OR?: VisitScalarWhereWithAggregatesInput[];
    NOT?: VisitScalarWhereWithAggregatesInput | VisitScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Visit'> | string;
    shortenedUrlId?: StringWithAggregatesFilter<'Visit'> | string;
    visitedAt?: DateTimeWithAggregatesFilter<'Visit'> | Date | string;
    referrer?: StringNullableWithAggregatesFilter<'Visit'> | string | null;
  };

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[];
    OR?: ArticleWhereInput[];
    NOT?: ArticleWhereInput | ArticleWhereInput[];
    id?: StringFilter<'Article'> | string;
    title?: StringFilter<'Article'> | string;
    description?: StringFilter<'Article'> | string;
    price?: FloatFilter<'Article'> | number;
    createdAt?: DateTimeFilter<'Article'> | Date | string;
    updatedAt?: DateTimeFilter<'Article'> | Date | string;
    isPublished?: BoolFilter<'Article'> | boolean;
    userId?: StringFilter<'Article'> | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    images?: ArticleImagesListRelationFilter;
    categories?: ArticleCategoriesListRelationFilter;
  };

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    isPublished?: SortOrder;
    userId?: SortOrder;
    user?: UserOrderByWithRelationInput;
    images?: ArticleImagesOrderByRelationAggregateInput;
    categories?: ArticleCategoriesOrderByRelationAggregateInput;
  };

  export type ArticleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ArticleWhereInput | ArticleWhereInput[];
      OR?: ArticleWhereInput[];
      NOT?: ArticleWhereInput | ArticleWhereInput[];
      title?: StringFilter<'Article'> | string;
      description?: StringFilter<'Article'> | string;
      price?: FloatFilter<'Article'> | number;
      createdAt?: DateTimeFilter<'Article'> | Date | string;
      updatedAt?: DateTimeFilter<'Article'> | Date | string;
      isPublished?: BoolFilter<'Article'> | boolean;
      userId?: StringFilter<'Article'> | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      images?: ArticleImagesListRelationFilter;
      categories?: ArticleCategoriesListRelationFilter;
    },
    'id'
  >;

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    isPublished?: SortOrder;
    userId?: SortOrder;
    _count?: ArticleCountOrderByAggregateInput;
    _avg?: ArticleAvgOrderByAggregateInput;
    _max?: ArticleMaxOrderByAggregateInput;
    _min?: ArticleMinOrderByAggregateInput;
    _sum?: ArticleSumOrderByAggregateInput;
  };

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[];
    OR?: ArticleScalarWhereWithAggregatesInput[];
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Article'> | string;
    title?: StringWithAggregatesFilter<'Article'> | string;
    description?: StringWithAggregatesFilter<'Article'> | string;
    price?: FloatWithAggregatesFilter<'Article'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Article'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Article'> | Date | string;
    isPublished?: BoolWithAggregatesFilter<'Article'> | boolean;
    userId?: StringWithAggregatesFilter<'Article'> | string;
  };

  export type ArticleCategoriesWhereInput = {
    AND?: ArticleCategoriesWhereInput | ArticleCategoriesWhereInput[];
    OR?: ArticleCategoriesWhereInput[];
    NOT?: ArticleCategoriesWhereInput | ArticleCategoriesWhereInput[];
    id?: StringFilter<'ArticleCategories'> | string;
    articleId?: StringFilter<'ArticleCategories'> | string;
    categoryId?: StringFilter<'ArticleCategories'> | string;
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>;
  };

  export type ArticleCategoriesOrderByWithRelationInput = {
    id?: SortOrder;
    articleId?: SortOrder;
    categoryId?: SortOrder;
    article?: ArticleOrderByWithRelationInput;
  };

  export type ArticleCategoriesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ArticleCategoriesWhereInput | ArticleCategoriesWhereInput[];
      OR?: ArticleCategoriesWhereInput[];
      NOT?: ArticleCategoriesWhereInput | ArticleCategoriesWhereInput[];
      articleId?: StringFilter<'ArticleCategories'> | string;
      categoryId?: StringFilter<'ArticleCategories'> | string;
      article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>;
    },
    'id'
  >;

  export type ArticleCategoriesOrderByWithAggregationInput = {
    id?: SortOrder;
    articleId?: SortOrder;
    categoryId?: SortOrder;
    _count?: ArticleCategoriesCountOrderByAggregateInput;
    _max?: ArticleCategoriesMaxOrderByAggregateInput;
    _min?: ArticleCategoriesMinOrderByAggregateInput;
  };

  export type ArticleCategoriesScalarWhereWithAggregatesInput = {
    AND?: ArticleCategoriesScalarWhereWithAggregatesInput | ArticleCategoriesScalarWhereWithAggregatesInput[];
    OR?: ArticleCategoriesScalarWhereWithAggregatesInput[];
    NOT?: ArticleCategoriesScalarWhereWithAggregatesInput | ArticleCategoriesScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'ArticleCategories'> | string;
    articleId?: StringWithAggregatesFilter<'ArticleCategories'> | string;
    categoryId?: StringWithAggregatesFilter<'ArticleCategories'> | string;
  };

  export type ArticleImagesWhereInput = {
    AND?: ArticleImagesWhereInput | ArticleImagesWhereInput[];
    OR?: ArticleImagesWhereInput[];
    NOT?: ArticleImagesWhereInput | ArticleImagesWhereInput[];
    id?: StringFilter<'ArticleImages'> | string;
    articleId?: StringFilter<'ArticleImages'> | string;
    imageUrl?: StringFilter<'ArticleImages'> | string;
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>;
  };

  export type ArticleImagesOrderByWithRelationInput = {
    id?: SortOrder;
    articleId?: SortOrder;
    imageUrl?: SortOrder;
    article?: ArticleOrderByWithRelationInput;
  };

  export type ArticleImagesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ArticleImagesWhereInput | ArticleImagesWhereInput[];
      OR?: ArticleImagesWhereInput[];
      NOT?: ArticleImagesWhereInput | ArticleImagesWhereInput[];
      articleId?: StringFilter<'ArticleImages'> | string;
      imageUrl?: StringFilter<'ArticleImages'> | string;
      article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>;
    },
    'id'
  >;

  export type ArticleImagesOrderByWithAggregationInput = {
    id?: SortOrder;
    articleId?: SortOrder;
    imageUrl?: SortOrder;
    _count?: ArticleImagesCountOrderByAggregateInput;
    _max?: ArticleImagesMaxOrderByAggregateInput;
    _min?: ArticleImagesMinOrderByAggregateInput;
  };

  export type ArticleImagesScalarWhereWithAggregatesInput = {
    AND?: ArticleImagesScalarWhereWithAggregatesInput | ArticleImagesScalarWhereWithAggregatesInput[];
    OR?: ArticleImagesScalarWhereWithAggregatesInput[];
    NOT?: ArticleImagesScalarWhereWithAggregatesInput | ArticleImagesScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'ArticleImages'> | string;
    articleId?: StringWithAggregatesFilter<'ArticleImages'> | string;
    imageUrl?: StringWithAggregatesFilter<'ArticleImages'> | string;
  };

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[];
    OR?: categoryWhereInput[];
    NOT?: categoryWhereInput | categoryWhereInput[];
    id?: StringFilter<'category'> | string;
    name?: StringFilter<'category'> | string;
  };

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type categoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      name?: string;
      AND?: categoryWhereInput | categoryWhereInput[];
      OR?: categoryWhereInput[];
      NOT?: categoryWhereInput | categoryWhereInput[];
    },
    'id' | 'name'
  >;

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    _count?: categoryCountOrderByAggregateInput;
    _max?: categoryMaxOrderByAggregateInput;
    _min?: categoryMinOrderByAggregateInput;
  };

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[];
    OR?: categoryScalarWhereWithAggregatesInput[];
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'category'> | string;
    name?: StringWithAggregatesFilter<'category'> | string;
  };

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    username?: StringNullableFilter<'User'> | string | null;
    email?: StringFilter<'User'> | string;
    articles?: ArticleListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    username?: SortOrderInput | SortOrder;
    email?: SortOrder;
    articles?: ArticleOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      username?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      articles?: ArticleListRelationFilter;
    },
    'id' | 'username' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    username?: SortOrderInput | SortOrder;
    email?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    username?: StringNullableWithAggregatesFilter<'User'> | string | null;
    email?: StringWithAggregatesFilter<'User'> | string;
  };

  export type ShortenedUrlCreateInput = {
    id: string;
    originalUrl: string;
    createdAt?: Date | string;
    expiresAt?: Date | string | null;
    visits?: VisitCreateNestedManyWithoutShortenedUrlInput;
  };

  export type ShortenedUrlUncheckedCreateInput = {
    id: string;
    originalUrl: string;
    createdAt?: Date | string;
    expiresAt?: Date | string | null;
    visits?: VisitUncheckedCreateNestedManyWithoutShortenedUrlInput;
  };

  export type ShortenedUrlUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    originalUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    visits?: VisitUpdateManyWithoutShortenedUrlNestedInput;
  };

  export type ShortenedUrlUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    originalUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    visits?: VisitUncheckedUpdateManyWithoutShortenedUrlNestedInput;
  };

  export type ShortenedUrlCreateManyInput = {
    id: string;
    originalUrl: string;
    createdAt?: Date | string;
    expiresAt?: Date | string | null;
  };

  export type ShortenedUrlUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    originalUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type ShortenedUrlUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    originalUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type VisitCreateInput = {
    id?: string;
    visitedAt?: Date | string;
    referrer?: string | null;
    shortenedUrl: ShortenedUrlCreateNestedOneWithoutVisitsInput;
  };

  export type VisitUncheckedCreateInput = {
    id?: string;
    shortenedUrlId: string;
    visitedAt?: Date | string;
    referrer?: string | null;
  };

  export type VisitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    visitedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    referrer?: NullableStringFieldUpdateOperationsInput | string | null;
    shortenedUrl?: ShortenedUrlUpdateOneRequiredWithoutVisitsNestedInput;
  };

  export type VisitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortenedUrlId?: StringFieldUpdateOperationsInput | string;
    visitedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    referrer?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type VisitCreateManyInput = {
    id?: string;
    shortenedUrlId: string;
    visitedAt?: Date | string;
    referrer?: string | null;
  };

  export type VisitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    visitedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    referrer?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type VisitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortenedUrlId?: StringFieldUpdateOperationsInput | string;
    visitedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    referrer?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ArticleCreateInput = {
    id?: string;
    title: string;
    description: string;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublished?: boolean;
    user: UserCreateNestedOneWithoutArticlesInput;
    images?: ArticleImagesCreateNestedManyWithoutArticleInput;
    categories?: ArticleCategoriesCreateNestedManyWithoutArticleInput;
  };

  export type ArticleUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublished?: boolean;
    userId: string;
    images?: ArticleImagesUncheckedCreateNestedManyWithoutArticleInput;
    categories?: ArticleCategoriesUncheckedCreateNestedManyWithoutArticleInput;
  };

  export type ArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput;
    images?: ArticleImagesUpdateManyWithoutArticleNestedInput;
    categories?: ArticleCategoriesUpdateManyWithoutArticleNestedInput;
  };

  export type ArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    userId?: StringFieldUpdateOperationsInput | string;
    images?: ArticleImagesUncheckedUpdateManyWithoutArticleNestedInput;
    categories?: ArticleCategoriesUncheckedUpdateManyWithoutArticleNestedInput;
  };

  export type ArticleCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublished?: boolean;
    userId: string;
  };

  export type ArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type ArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type ArticleCategoriesCreateInput = {
    id?: string;
    categoryId: string;
    article: ArticleCreateNestedOneWithoutCategoriesInput;
  };

  export type ArticleCategoriesUncheckedCreateInput = {
    id?: string;
    articleId: string;
    categoryId: string;
  };

  export type ArticleCategoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    article?: ArticleUpdateOneRequiredWithoutCategoriesNestedInput;
  };

  export type ArticleCategoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    articleId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
  };

  export type ArticleCategoriesCreateManyInput = {
    id?: string;
    articleId: string;
    categoryId: string;
  };

  export type ArticleCategoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
  };

  export type ArticleCategoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    articleId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
  };

  export type ArticleImagesCreateInput = {
    id?: string;
    imageUrl: string;
    article: ArticleCreateNestedOneWithoutImagesInput;
  };

  export type ArticleImagesUncheckedCreateInput = {
    id?: string;
    articleId: string;
    imageUrl: string;
  };

  export type ArticleImagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    article?: ArticleUpdateOneRequiredWithoutImagesNestedInput;
  };

  export type ArticleImagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    articleId?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
  };

  export type ArticleImagesCreateManyInput = {
    id?: string;
    articleId: string;
    imageUrl: string;
  };

  export type ArticleImagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
  };

  export type ArticleImagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    articleId?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
  };

  export type categoryCreateInput = {
    id?: string;
    name: string;
  };

  export type categoryUncheckedCreateInput = {
    id?: string;
    name: string;
  };

  export type categoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type categoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type categoryCreateManyInput = {
    id?: string;
    name: string;
  };

  export type categoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type categoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type UserCreateInput = {
    id?: string;
    username?: string | null;
    email: string;
    articles?: ArticleCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    username?: string | null;
    email: string;
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    articles?: ArticleUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    username?: string | null;
    email: string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type VisitListRelationFilter = {
    every?: VisitWhereInput;
    some?: VisitWhereInput;
    none?: VisitWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type VisitOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ShortenedUrlCountOrderByAggregateInput = {
    id?: SortOrder;
    originalUrl?: SortOrder;
    createdAt?: SortOrder;
    expiresAt?: SortOrder;
  };

  export type ShortenedUrlMaxOrderByAggregateInput = {
    id?: SortOrder;
    originalUrl?: SortOrder;
    createdAt?: SortOrder;
    expiresAt?: SortOrder;
  };

  export type ShortenedUrlMinOrderByAggregateInput = {
    id?: SortOrder;
    originalUrl?: SortOrder;
    createdAt?: SortOrder;
    expiresAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type ShortenedUrlScalarRelationFilter = {
    is?: ShortenedUrlWhereInput;
    isNot?: ShortenedUrlWhereInput;
  };

  export type VisitCountOrderByAggregateInput = {
    id?: SortOrder;
    shortenedUrlId?: SortOrder;
    visitedAt?: SortOrder;
    referrer?: SortOrder;
  };

  export type VisitMaxOrderByAggregateInput = {
    id?: SortOrder;
    shortenedUrlId?: SortOrder;
    visitedAt?: SortOrder;
    referrer?: SortOrder;
  };

  export type VisitMinOrderByAggregateInput = {
    id?: SortOrder;
    shortenedUrlId?: SortOrder;
    visitedAt?: SortOrder;
    referrer?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type ArticleImagesListRelationFilter = {
    every?: ArticleImagesWhereInput;
    some?: ArticleImagesWhereInput;
    none?: ArticleImagesWhereInput;
  };

  export type ArticleCategoriesListRelationFilter = {
    every?: ArticleCategoriesWhereInput;
    some?: ArticleCategoriesWhereInput;
    none?: ArticleCategoriesWhereInput;
  };

  export type ArticleImagesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ArticleCategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    isPublished?: SortOrder;
    userId?: SortOrder;
  };

  export type ArticleAvgOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    isPublished?: SortOrder;
    userId?: SortOrder;
  };

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    isPublished?: SortOrder;
    userId?: SortOrder;
  };

  export type ArticleSumOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type ArticleScalarRelationFilter = {
    is?: ArticleWhereInput;
    isNot?: ArticleWhereInput;
  };

  export type ArticleCategoriesCountOrderByAggregateInput = {
    id?: SortOrder;
    articleId?: SortOrder;
    categoryId?: SortOrder;
  };

  export type ArticleCategoriesMaxOrderByAggregateInput = {
    id?: SortOrder;
    articleId?: SortOrder;
    categoryId?: SortOrder;
  };

  export type ArticleCategoriesMinOrderByAggregateInput = {
    id?: SortOrder;
    articleId?: SortOrder;
    categoryId?: SortOrder;
  };

  export type ArticleImagesCountOrderByAggregateInput = {
    id?: SortOrder;
    articleId?: SortOrder;
    imageUrl?: SortOrder;
  };

  export type ArticleImagesMaxOrderByAggregateInput = {
    id?: SortOrder;
    articleId?: SortOrder;
    imageUrl?: SortOrder;
  };

  export type ArticleImagesMinOrderByAggregateInput = {
    id?: SortOrder;
    articleId?: SortOrder;
    imageUrl?: SortOrder;
  };

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput;
    some?: ArticleWhereInput;
    none?: ArticleWhereInput;
  };

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
  };

  export type VisitCreateNestedManyWithoutShortenedUrlInput = {
    create?:
      | XOR<VisitCreateWithoutShortenedUrlInput, VisitUncheckedCreateWithoutShortenedUrlInput>
      | VisitCreateWithoutShortenedUrlInput[]
      | VisitUncheckedCreateWithoutShortenedUrlInput[];
    connectOrCreate?: VisitCreateOrConnectWithoutShortenedUrlInput | VisitCreateOrConnectWithoutShortenedUrlInput[];
    createMany?: VisitCreateManyShortenedUrlInputEnvelope;
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[];
  };

  export type VisitUncheckedCreateNestedManyWithoutShortenedUrlInput = {
    create?:
      | XOR<VisitCreateWithoutShortenedUrlInput, VisitUncheckedCreateWithoutShortenedUrlInput>
      | VisitCreateWithoutShortenedUrlInput[]
      | VisitUncheckedCreateWithoutShortenedUrlInput[];
    connectOrCreate?: VisitCreateOrConnectWithoutShortenedUrlInput | VisitCreateOrConnectWithoutShortenedUrlInput[];
    createMany?: VisitCreateManyShortenedUrlInputEnvelope;
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type VisitUpdateManyWithoutShortenedUrlNestedInput = {
    create?:
      | XOR<VisitCreateWithoutShortenedUrlInput, VisitUncheckedCreateWithoutShortenedUrlInput>
      | VisitCreateWithoutShortenedUrlInput[]
      | VisitUncheckedCreateWithoutShortenedUrlInput[];
    connectOrCreate?: VisitCreateOrConnectWithoutShortenedUrlInput | VisitCreateOrConnectWithoutShortenedUrlInput[];
    upsert?: VisitUpsertWithWhereUniqueWithoutShortenedUrlInput | VisitUpsertWithWhereUniqueWithoutShortenedUrlInput[];
    createMany?: VisitCreateManyShortenedUrlInputEnvelope;
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[];
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[];
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[];
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[];
    update?: VisitUpdateWithWhereUniqueWithoutShortenedUrlInput | VisitUpdateWithWhereUniqueWithoutShortenedUrlInput[];
    updateMany?: VisitUpdateManyWithWhereWithoutShortenedUrlInput | VisitUpdateManyWithWhereWithoutShortenedUrlInput[];
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[];
  };

  export type VisitUncheckedUpdateManyWithoutShortenedUrlNestedInput = {
    create?:
      | XOR<VisitCreateWithoutShortenedUrlInput, VisitUncheckedCreateWithoutShortenedUrlInput>
      | VisitCreateWithoutShortenedUrlInput[]
      | VisitUncheckedCreateWithoutShortenedUrlInput[];
    connectOrCreate?: VisitCreateOrConnectWithoutShortenedUrlInput | VisitCreateOrConnectWithoutShortenedUrlInput[];
    upsert?: VisitUpsertWithWhereUniqueWithoutShortenedUrlInput | VisitUpsertWithWhereUniqueWithoutShortenedUrlInput[];
    createMany?: VisitCreateManyShortenedUrlInputEnvelope;
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[];
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[];
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[];
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[];
    update?: VisitUpdateWithWhereUniqueWithoutShortenedUrlInput | VisitUpdateWithWhereUniqueWithoutShortenedUrlInput[];
    updateMany?: VisitUpdateManyWithWhereWithoutShortenedUrlInput | VisitUpdateManyWithWhereWithoutShortenedUrlInput[];
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[];
  };

  export type ShortenedUrlCreateNestedOneWithoutVisitsInput = {
    create?: XOR<ShortenedUrlCreateWithoutVisitsInput, ShortenedUrlUncheckedCreateWithoutVisitsInput>;
    connectOrCreate?: ShortenedUrlCreateOrConnectWithoutVisitsInput;
    connect?: ShortenedUrlWhereUniqueInput;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type ShortenedUrlUpdateOneRequiredWithoutVisitsNestedInput = {
    create?: XOR<ShortenedUrlCreateWithoutVisitsInput, ShortenedUrlUncheckedCreateWithoutVisitsInput>;
    connectOrCreate?: ShortenedUrlCreateOrConnectWithoutVisitsInput;
    upsert?: ShortenedUrlUpsertWithoutVisitsInput;
    connect?: ShortenedUrlWhereUniqueInput;
    update?: XOR<
      XOR<ShortenedUrlUpdateToOneWithWhereWithoutVisitsInput, ShortenedUrlUpdateWithoutVisitsInput>,
      ShortenedUrlUncheckedUpdateWithoutVisitsInput
    >;
  };

  export type UserCreateNestedOneWithoutArticlesInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>;
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput;
    connect?: UserWhereUniqueInput;
  };

  export type ArticleImagesCreateNestedManyWithoutArticleInput = {
    create?:
      | XOR<ArticleImagesCreateWithoutArticleInput, ArticleImagesUncheckedCreateWithoutArticleInput>
      | ArticleImagesCreateWithoutArticleInput[]
      | ArticleImagesUncheckedCreateWithoutArticleInput[];
    connectOrCreate?:
      | ArticleImagesCreateOrConnectWithoutArticleInput
      | ArticleImagesCreateOrConnectWithoutArticleInput[];
    createMany?: ArticleImagesCreateManyArticleInputEnvelope;
    connect?: ArticleImagesWhereUniqueInput | ArticleImagesWhereUniqueInput[];
  };

  export type ArticleCategoriesCreateNestedManyWithoutArticleInput = {
    create?:
      | XOR<ArticleCategoriesCreateWithoutArticleInput, ArticleCategoriesUncheckedCreateWithoutArticleInput>
      | ArticleCategoriesCreateWithoutArticleInput[]
      | ArticleCategoriesUncheckedCreateWithoutArticleInput[];
    connectOrCreate?:
      | ArticleCategoriesCreateOrConnectWithoutArticleInput
      | ArticleCategoriesCreateOrConnectWithoutArticleInput[];
    createMany?: ArticleCategoriesCreateManyArticleInputEnvelope;
    connect?: ArticleCategoriesWhereUniqueInput | ArticleCategoriesWhereUniqueInput[];
  };

  export type ArticleImagesUncheckedCreateNestedManyWithoutArticleInput = {
    create?:
      | XOR<ArticleImagesCreateWithoutArticleInput, ArticleImagesUncheckedCreateWithoutArticleInput>
      | ArticleImagesCreateWithoutArticleInput[]
      | ArticleImagesUncheckedCreateWithoutArticleInput[];
    connectOrCreate?:
      | ArticleImagesCreateOrConnectWithoutArticleInput
      | ArticleImagesCreateOrConnectWithoutArticleInput[];
    createMany?: ArticleImagesCreateManyArticleInputEnvelope;
    connect?: ArticleImagesWhereUniqueInput | ArticleImagesWhereUniqueInput[];
  };

  export type ArticleCategoriesUncheckedCreateNestedManyWithoutArticleInput = {
    create?:
      | XOR<ArticleCategoriesCreateWithoutArticleInput, ArticleCategoriesUncheckedCreateWithoutArticleInput>
      | ArticleCategoriesCreateWithoutArticleInput[]
      | ArticleCategoriesUncheckedCreateWithoutArticleInput[];
    connectOrCreate?:
      | ArticleCategoriesCreateOrConnectWithoutArticleInput
      | ArticleCategoriesCreateOrConnectWithoutArticleInput[];
    createMany?: ArticleCategoriesCreateManyArticleInputEnvelope;
    connect?: ArticleCategoriesWhereUniqueInput | ArticleCategoriesWhereUniqueInput[];
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type UserUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>;
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput;
    upsert?: UserUpsertWithoutArticlesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutArticlesInput, UserUpdateWithoutArticlesInput>,
      UserUncheckedUpdateWithoutArticlesInput
    >;
  };

  export type ArticleImagesUpdateManyWithoutArticleNestedInput = {
    create?:
      | XOR<ArticleImagesCreateWithoutArticleInput, ArticleImagesUncheckedCreateWithoutArticleInput>
      | ArticleImagesCreateWithoutArticleInput[]
      | ArticleImagesUncheckedCreateWithoutArticleInput[];
    connectOrCreate?:
      | ArticleImagesCreateOrConnectWithoutArticleInput
      | ArticleImagesCreateOrConnectWithoutArticleInput[];
    upsert?:
      | ArticleImagesUpsertWithWhereUniqueWithoutArticleInput
      | ArticleImagesUpsertWithWhereUniqueWithoutArticleInput[];
    createMany?: ArticleImagesCreateManyArticleInputEnvelope;
    set?: ArticleImagesWhereUniqueInput | ArticleImagesWhereUniqueInput[];
    disconnect?: ArticleImagesWhereUniqueInput | ArticleImagesWhereUniqueInput[];
    delete?: ArticleImagesWhereUniqueInput | ArticleImagesWhereUniqueInput[];
    connect?: ArticleImagesWhereUniqueInput | ArticleImagesWhereUniqueInput[];
    update?:
      | ArticleImagesUpdateWithWhereUniqueWithoutArticleInput
      | ArticleImagesUpdateWithWhereUniqueWithoutArticleInput[];
    updateMany?:
      | ArticleImagesUpdateManyWithWhereWithoutArticleInput
      | ArticleImagesUpdateManyWithWhereWithoutArticleInput[];
    deleteMany?: ArticleImagesScalarWhereInput | ArticleImagesScalarWhereInput[];
  };

  export type ArticleCategoriesUpdateManyWithoutArticleNestedInput = {
    create?:
      | XOR<ArticleCategoriesCreateWithoutArticleInput, ArticleCategoriesUncheckedCreateWithoutArticleInput>
      | ArticleCategoriesCreateWithoutArticleInput[]
      | ArticleCategoriesUncheckedCreateWithoutArticleInput[];
    connectOrCreate?:
      | ArticleCategoriesCreateOrConnectWithoutArticleInput
      | ArticleCategoriesCreateOrConnectWithoutArticleInput[];
    upsert?:
      | ArticleCategoriesUpsertWithWhereUniqueWithoutArticleInput
      | ArticleCategoriesUpsertWithWhereUniqueWithoutArticleInput[];
    createMany?: ArticleCategoriesCreateManyArticleInputEnvelope;
    set?: ArticleCategoriesWhereUniqueInput | ArticleCategoriesWhereUniqueInput[];
    disconnect?: ArticleCategoriesWhereUniqueInput | ArticleCategoriesWhereUniqueInput[];
    delete?: ArticleCategoriesWhereUniqueInput | ArticleCategoriesWhereUniqueInput[];
    connect?: ArticleCategoriesWhereUniqueInput | ArticleCategoriesWhereUniqueInput[];
    update?:
      | ArticleCategoriesUpdateWithWhereUniqueWithoutArticleInput
      | ArticleCategoriesUpdateWithWhereUniqueWithoutArticleInput[];
    updateMany?:
      | ArticleCategoriesUpdateManyWithWhereWithoutArticleInput
      | ArticleCategoriesUpdateManyWithWhereWithoutArticleInput[];
    deleteMany?: ArticleCategoriesScalarWhereInput | ArticleCategoriesScalarWhereInput[];
  };

  export type ArticleImagesUncheckedUpdateManyWithoutArticleNestedInput = {
    create?:
      | XOR<ArticleImagesCreateWithoutArticleInput, ArticleImagesUncheckedCreateWithoutArticleInput>
      | ArticleImagesCreateWithoutArticleInput[]
      | ArticleImagesUncheckedCreateWithoutArticleInput[];
    connectOrCreate?:
      | ArticleImagesCreateOrConnectWithoutArticleInput
      | ArticleImagesCreateOrConnectWithoutArticleInput[];
    upsert?:
      | ArticleImagesUpsertWithWhereUniqueWithoutArticleInput
      | ArticleImagesUpsertWithWhereUniqueWithoutArticleInput[];
    createMany?: ArticleImagesCreateManyArticleInputEnvelope;
    set?: ArticleImagesWhereUniqueInput | ArticleImagesWhereUniqueInput[];
    disconnect?: ArticleImagesWhereUniqueInput | ArticleImagesWhereUniqueInput[];
    delete?: ArticleImagesWhereUniqueInput | ArticleImagesWhereUniqueInput[];
    connect?: ArticleImagesWhereUniqueInput | ArticleImagesWhereUniqueInput[];
    update?:
      | ArticleImagesUpdateWithWhereUniqueWithoutArticleInput
      | ArticleImagesUpdateWithWhereUniqueWithoutArticleInput[];
    updateMany?:
      | ArticleImagesUpdateManyWithWhereWithoutArticleInput
      | ArticleImagesUpdateManyWithWhereWithoutArticleInput[];
    deleteMany?: ArticleImagesScalarWhereInput | ArticleImagesScalarWhereInput[];
  };

  export type ArticleCategoriesUncheckedUpdateManyWithoutArticleNestedInput = {
    create?:
      | XOR<ArticleCategoriesCreateWithoutArticleInput, ArticleCategoriesUncheckedCreateWithoutArticleInput>
      | ArticleCategoriesCreateWithoutArticleInput[]
      | ArticleCategoriesUncheckedCreateWithoutArticleInput[];
    connectOrCreate?:
      | ArticleCategoriesCreateOrConnectWithoutArticleInput
      | ArticleCategoriesCreateOrConnectWithoutArticleInput[];
    upsert?:
      | ArticleCategoriesUpsertWithWhereUniqueWithoutArticleInput
      | ArticleCategoriesUpsertWithWhereUniqueWithoutArticleInput[];
    createMany?: ArticleCategoriesCreateManyArticleInputEnvelope;
    set?: ArticleCategoriesWhereUniqueInput | ArticleCategoriesWhereUniqueInput[];
    disconnect?: ArticleCategoriesWhereUniqueInput | ArticleCategoriesWhereUniqueInput[];
    delete?: ArticleCategoriesWhereUniqueInput | ArticleCategoriesWhereUniqueInput[];
    connect?: ArticleCategoriesWhereUniqueInput | ArticleCategoriesWhereUniqueInput[];
    update?:
      | ArticleCategoriesUpdateWithWhereUniqueWithoutArticleInput
      | ArticleCategoriesUpdateWithWhereUniqueWithoutArticleInput[];
    updateMany?:
      | ArticleCategoriesUpdateManyWithWhereWithoutArticleInput
      | ArticleCategoriesUpdateManyWithWhereWithoutArticleInput[];
    deleteMany?: ArticleCategoriesScalarWhereInput | ArticleCategoriesScalarWhereInput[];
  };

  export type ArticleCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<ArticleCreateWithoutCategoriesInput, ArticleUncheckedCreateWithoutCategoriesInput>;
    connectOrCreate?: ArticleCreateOrConnectWithoutCategoriesInput;
    connect?: ArticleWhereUniqueInput;
  };

  export type ArticleUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<ArticleCreateWithoutCategoriesInput, ArticleUncheckedCreateWithoutCategoriesInput>;
    connectOrCreate?: ArticleCreateOrConnectWithoutCategoriesInput;
    upsert?: ArticleUpsertWithoutCategoriesInput;
    connect?: ArticleWhereUniqueInput;
    update?: XOR<
      XOR<ArticleUpdateToOneWithWhereWithoutCategoriesInput, ArticleUpdateWithoutCategoriesInput>,
      ArticleUncheckedUpdateWithoutCategoriesInput
    >;
  };

  export type ArticleCreateNestedOneWithoutImagesInput = {
    create?: XOR<ArticleCreateWithoutImagesInput, ArticleUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: ArticleCreateOrConnectWithoutImagesInput;
    connect?: ArticleWhereUniqueInput;
  };

  export type ArticleUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ArticleCreateWithoutImagesInput, ArticleUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: ArticleCreateOrConnectWithoutImagesInput;
    upsert?: ArticleUpsertWithoutImagesInput;
    connect?: ArticleWhereUniqueInput;
    update?: XOR<
      XOR<ArticleUpdateToOneWithWhereWithoutImagesInput, ArticleUpdateWithoutImagesInput>,
      ArticleUncheckedUpdateWithoutImagesInput
    >;
  };

  export type ArticleCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>
      | ArticleCreateWithoutUserInput[]
      | ArticleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[];
    createMany?: ArticleCreateManyUserInputEnvelope;
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
  };

  export type ArticleUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>
      | ArticleCreateWithoutUserInput[]
      | ArticleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[];
    createMany?: ArticleCreateManyUserInputEnvelope;
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
  };

  export type ArticleUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>
      | ArticleCreateWithoutUserInput[]
      | ArticleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[];
    upsert?: ArticleUpsertWithWhereUniqueWithoutUserInput | ArticleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ArticleCreateManyUserInputEnvelope;
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
    update?: ArticleUpdateWithWhereUniqueWithoutUserInput | ArticleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ArticleUpdateManyWithWhereWithoutUserInput | ArticleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[];
  };

  export type ArticleUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>
      | ArticleCreateWithoutUserInput[]
      | ArticleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[];
    upsert?: ArticleUpsertWithWhereUniqueWithoutUserInput | ArticleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ArticleCreateManyUserInputEnvelope;
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
    update?: ArticleUpdateWithWhereUniqueWithoutUserInput | ArticleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ArticleUpdateManyWithWhereWithoutUserInput | ArticleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[];
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type VisitCreateWithoutShortenedUrlInput = {
    id?: string;
    visitedAt?: Date | string;
    referrer?: string | null;
  };

  export type VisitUncheckedCreateWithoutShortenedUrlInput = {
    id?: string;
    visitedAt?: Date | string;
    referrer?: string | null;
  };

  export type VisitCreateOrConnectWithoutShortenedUrlInput = {
    where: VisitWhereUniqueInput;
    create: XOR<VisitCreateWithoutShortenedUrlInput, VisitUncheckedCreateWithoutShortenedUrlInput>;
  };

  export type VisitCreateManyShortenedUrlInputEnvelope = {
    data: VisitCreateManyShortenedUrlInput | VisitCreateManyShortenedUrlInput[];
    skipDuplicates?: boolean;
  };

  export type VisitUpsertWithWhereUniqueWithoutShortenedUrlInput = {
    where: VisitWhereUniqueInput;
    update: XOR<VisitUpdateWithoutShortenedUrlInput, VisitUncheckedUpdateWithoutShortenedUrlInput>;
    create: XOR<VisitCreateWithoutShortenedUrlInput, VisitUncheckedCreateWithoutShortenedUrlInput>;
  };

  export type VisitUpdateWithWhereUniqueWithoutShortenedUrlInput = {
    where: VisitWhereUniqueInput;
    data: XOR<VisitUpdateWithoutShortenedUrlInput, VisitUncheckedUpdateWithoutShortenedUrlInput>;
  };

  export type VisitUpdateManyWithWhereWithoutShortenedUrlInput = {
    where: VisitScalarWhereInput;
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyWithoutShortenedUrlInput>;
  };

  export type VisitScalarWhereInput = {
    AND?: VisitScalarWhereInput | VisitScalarWhereInput[];
    OR?: VisitScalarWhereInput[];
    NOT?: VisitScalarWhereInput | VisitScalarWhereInput[];
    id?: StringFilter<'Visit'> | string;
    shortenedUrlId?: StringFilter<'Visit'> | string;
    visitedAt?: DateTimeFilter<'Visit'> | Date | string;
    referrer?: StringNullableFilter<'Visit'> | string | null;
  };

  export type ShortenedUrlCreateWithoutVisitsInput = {
    id: string;
    originalUrl: string;
    createdAt?: Date | string;
    expiresAt?: Date | string | null;
  };

  export type ShortenedUrlUncheckedCreateWithoutVisitsInput = {
    id: string;
    originalUrl: string;
    createdAt?: Date | string;
    expiresAt?: Date | string | null;
  };

  export type ShortenedUrlCreateOrConnectWithoutVisitsInput = {
    where: ShortenedUrlWhereUniqueInput;
    create: XOR<ShortenedUrlCreateWithoutVisitsInput, ShortenedUrlUncheckedCreateWithoutVisitsInput>;
  };

  export type ShortenedUrlUpsertWithoutVisitsInput = {
    update: XOR<ShortenedUrlUpdateWithoutVisitsInput, ShortenedUrlUncheckedUpdateWithoutVisitsInput>;
    create: XOR<ShortenedUrlCreateWithoutVisitsInput, ShortenedUrlUncheckedCreateWithoutVisitsInput>;
    where?: ShortenedUrlWhereInput;
  };

  export type ShortenedUrlUpdateToOneWithWhereWithoutVisitsInput = {
    where?: ShortenedUrlWhereInput;
    data: XOR<ShortenedUrlUpdateWithoutVisitsInput, ShortenedUrlUncheckedUpdateWithoutVisitsInput>;
  };

  export type ShortenedUrlUpdateWithoutVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    originalUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type ShortenedUrlUncheckedUpdateWithoutVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    originalUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type UserCreateWithoutArticlesInput = {
    id?: string;
    username?: string | null;
    email: string;
  };

  export type UserUncheckedCreateWithoutArticlesInput = {
    id?: string;
    username?: string | null;
    email: string;
  };

  export type UserCreateOrConnectWithoutArticlesInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>;
  };

  export type ArticleImagesCreateWithoutArticleInput = {
    id?: string;
    imageUrl: string;
  };

  export type ArticleImagesUncheckedCreateWithoutArticleInput = {
    id?: string;
    imageUrl: string;
  };

  export type ArticleImagesCreateOrConnectWithoutArticleInput = {
    where: ArticleImagesWhereUniqueInput;
    create: XOR<ArticleImagesCreateWithoutArticleInput, ArticleImagesUncheckedCreateWithoutArticleInput>;
  };

  export type ArticleImagesCreateManyArticleInputEnvelope = {
    data: ArticleImagesCreateManyArticleInput | ArticleImagesCreateManyArticleInput[];
    skipDuplicates?: boolean;
  };

  export type ArticleCategoriesCreateWithoutArticleInput = {
    id?: string;
    categoryId: string;
  };

  export type ArticleCategoriesUncheckedCreateWithoutArticleInput = {
    id?: string;
    categoryId: string;
  };

  export type ArticleCategoriesCreateOrConnectWithoutArticleInput = {
    where: ArticleCategoriesWhereUniqueInput;
    create: XOR<ArticleCategoriesCreateWithoutArticleInput, ArticleCategoriesUncheckedCreateWithoutArticleInput>;
  };

  export type ArticleCategoriesCreateManyArticleInputEnvelope = {
    data: ArticleCategoriesCreateManyArticleInput | ArticleCategoriesCreateManyArticleInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutArticlesInput = {
    update: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>;
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutArticlesInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>;
  };

  export type UserUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
  };

  export type UserUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
  };

  export type ArticleImagesUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleImagesWhereUniqueInput;
    update: XOR<ArticleImagesUpdateWithoutArticleInput, ArticleImagesUncheckedUpdateWithoutArticleInput>;
    create: XOR<ArticleImagesCreateWithoutArticleInput, ArticleImagesUncheckedCreateWithoutArticleInput>;
  };

  export type ArticleImagesUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleImagesWhereUniqueInput;
    data: XOR<ArticleImagesUpdateWithoutArticleInput, ArticleImagesUncheckedUpdateWithoutArticleInput>;
  };

  export type ArticleImagesUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleImagesScalarWhereInput;
    data: XOR<ArticleImagesUpdateManyMutationInput, ArticleImagesUncheckedUpdateManyWithoutArticleInput>;
  };

  export type ArticleImagesScalarWhereInput = {
    AND?: ArticleImagesScalarWhereInput | ArticleImagesScalarWhereInput[];
    OR?: ArticleImagesScalarWhereInput[];
    NOT?: ArticleImagesScalarWhereInput | ArticleImagesScalarWhereInput[];
    id?: StringFilter<'ArticleImages'> | string;
    articleId?: StringFilter<'ArticleImages'> | string;
    imageUrl?: StringFilter<'ArticleImages'> | string;
  };

  export type ArticleCategoriesUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleCategoriesWhereUniqueInput;
    update: XOR<ArticleCategoriesUpdateWithoutArticleInput, ArticleCategoriesUncheckedUpdateWithoutArticleInput>;
    create: XOR<ArticleCategoriesCreateWithoutArticleInput, ArticleCategoriesUncheckedCreateWithoutArticleInput>;
  };

  export type ArticleCategoriesUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleCategoriesWhereUniqueInput;
    data: XOR<ArticleCategoriesUpdateWithoutArticleInput, ArticleCategoriesUncheckedUpdateWithoutArticleInput>;
  };

  export type ArticleCategoriesUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleCategoriesScalarWhereInput;
    data: XOR<ArticleCategoriesUpdateManyMutationInput, ArticleCategoriesUncheckedUpdateManyWithoutArticleInput>;
  };

  export type ArticleCategoriesScalarWhereInput = {
    AND?: ArticleCategoriesScalarWhereInput | ArticleCategoriesScalarWhereInput[];
    OR?: ArticleCategoriesScalarWhereInput[];
    NOT?: ArticleCategoriesScalarWhereInput | ArticleCategoriesScalarWhereInput[];
    id?: StringFilter<'ArticleCategories'> | string;
    articleId?: StringFilter<'ArticleCategories'> | string;
    categoryId?: StringFilter<'ArticleCategories'> | string;
  };

  export type ArticleCreateWithoutCategoriesInput = {
    id?: string;
    title: string;
    description: string;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublished?: boolean;
    user: UserCreateNestedOneWithoutArticlesInput;
    images?: ArticleImagesCreateNestedManyWithoutArticleInput;
  };

  export type ArticleUncheckedCreateWithoutCategoriesInput = {
    id?: string;
    title: string;
    description: string;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublished?: boolean;
    userId: string;
    images?: ArticleImagesUncheckedCreateNestedManyWithoutArticleInput;
  };

  export type ArticleCreateOrConnectWithoutCategoriesInput = {
    where: ArticleWhereUniqueInput;
    create: XOR<ArticleCreateWithoutCategoriesInput, ArticleUncheckedCreateWithoutCategoriesInput>;
  };

  export type ArticleUpsertWithoutCategoriesInput = {
    update: XOR<ArticleUpdateWithoutCategoriesInput, ArticleUncheckedUpdateWithoutCategoriesInput>;
    create: XOR<ArticleCreateWithoutCategoriesInput, ArticleUncheckedCreateWithoutCategoriesInput>;
    where?: ArticleWhereInput;
  };

  export type ArticleUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: ArticleWhereInput;
    data: XOR<ArticleUpdateWithoutCategoriesInput, ArticleUncheckedUpdateWithoutCategoriesInput>;
  };

  export type ArticleUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput;
    images?: ArticleImagesUpdateManyWithoutArticleNestedInput;
  };

  export type ArticleUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    userId?: StringFieldUpdateOperationsInput | string;
    images?: ArticleImagesUncheckedUpdateManyWithoutArticleNestedInput;
  };

  export type ArticleCreateWithoutImagesInput = {
    id?: string;
    title: string;
    description: string;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublished?: boolean;
    user: UserCreateNestedOneWithoutArticlesInput;
    categories?: ArticleCategoriesCreateNestedManyWithoutArticleInput;
  };

  export type ArticleUncheckedCreateWithoutImagesInput = {
    id?: string;
    title: string;
    description: string;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublished?: boolean;
    userId: string;
    categories?: ArticleCategoriesUncheckedCreateNestedManyWithoutArticleInput;
  };

  export type ArticleCreateOrConnectWithoutImagesInput = {
    where: ArticleWhereUniqueInput;
    create: XOR<ArticleCreateWithoutImagesInput, ArticleUncheckedCreateWithoutImagesInput>;
  };

  export type ArticleUpsertWithoutImagesInput = {
    update: XOR<ArticleUpdateWithoutImagesInput, ArticleUncheckedUpdateWithoutImagesInput>;
    create: XOR<ArticleCreateWithoutImagesInput, ArticleUncheckedCreateWithoutImagesInput>;
    where?: ArticleWhereInput;
  };

  export type ArticleUpdateToOneWithWhereWithoutImagesInput = {
    where?: ArticleWhereInput;
    data: XOR<ArticleUpdateWithoutImagesInput, ArticleUncheckedUpdateWithoutImagesInput>;
  };

  export type ArticleUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput;
    categories?: ArticleCategoriesUpdateManyWithoutArticleNestedInput;
  };

  export type ArticleUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    userId?: StringFieldUpdateOperationsInput | string;
    categories?: ArticleCategoriesUncheckedUpdateManyWithoutArticleNestedInput;
  };

  export type ArticleCreateWithoutUserInput = {
    id?: string;
    title: string;
    description: string;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublished?: boolean;
    images?: ArticleImagesCreateNestedManyWithoutArticleInput;
    categories?: ArticleCategoriesCreateNestedManyWithoutArticleInput;
  };

  export type ArticleUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description: string;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublished?: boolean;
    images?: ArticleImagesUncheckedCreateNestedManyWithoutArticleInput;
    categories?: ArticleCategoriesUncheckedCreateNestedManyWithoutArticleInput;
  };

  export type ArticleCreateOrConnectWithoutUserInput = {
    where: ArticleWhereUniqueInput;
    create: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>;
  };

  export type ArticleCreateManyUserInputEnvelope = {
    data: ArticleCreateManyUserInput | ArticleCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ArticleUpsertWithWhereUniqueWithoutUserInput = {
    where: ArticleWhereUniqueInput;
    update: XOR<ArticleUpdateWithoutUserInput, ArticleUncheckedUpdateWithoutUserInput>;
    create: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>;
  };

  export type ArticleUpdateWithWhereUniqueWithoutUserInput = {
    where: ArticleWhereUniqueInput;
    data: XOR<ArticleUpdateWithoutUserInput, ArticleUncheckedUpdateWithoutUserInput>;
  };

  export type ArticleUpdateManyWithWhereWithoutUserInput = {
    where: ArticleScalarWhereInput;
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutUserInput>;
  };

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[];
    OR?: ArticleScalarWhereInput[];
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[];
    id?: StringFilter<'Article'> | string;
    title?: StringFilter<'Article'> | string;
    description?: StringFilter<'Article'> | string;
    price?: FloatFilter<'Article'> | number;
    createdAt?: DateTimeFilter<'Article'> | Date | string;
    updatedAt?: DateTimeFilter<'Article'> | Date | string;
    isPublished?: BoolFilter<'Article'> | boolean;
    userId?: StringFilter<'Article'> | string;
  };

  export type VisitCreateManyShortenedUrlInput = {
    id?: string;
    visitedAt?: Date | string;
    referrer?: string | null;
  };

  export type VisitUpdateWithoutShortenedUrlInput = {
    id?: StringFieldUpdateOperationsInput | string;
    visitedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    referrer?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type VisitUncheckedUpdateWithoutShortenedUrlInput = {
    id?: StringFieldUpdateOperationsInput | string;
    visitedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    referrer?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type VisitUncheckedUpdateManyWithoutShortenedUrlInput = {
    id?: StringFieldUpdateOperationsInput | string;
    visitedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    referrer?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ArticleImagesCreateManyArticleInput = {
    id?: string;
    imageUrl: string;
  };

  export type ArticleCategoriesCreateManyArticleInput = {
    id?: string;
    categoryId: string;
  };

  export type ArticleImagesUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
  };

  export type ArticleImagesUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
  };

  export type ArticleImagesUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
  };

  export type ArticleCategoriesUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
  };

  export type ArticleCategoriesUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
  };

  export type ArticleCategoriesUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
  };

  export type ArticleCreateManyUserInput = {
    id?: string;
    title: string;
    description: string;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublished?: boolean;
  };

  export type ArticleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    images?: ArticleImagesUpdateManyWithoutArticleNestedInput;
    categories?: ArticleCategoriesUpdateManyWithoutArticleNestedInput;
  };

  export type ArticleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    images?: ArticleImagesUncheckedUpdateManyWithoutArticleNestedInput;
    categories?: ArticleCategoriesUncheckedUpdateManyWithoutArticleNestedInput;
  };

  export type ArticleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
