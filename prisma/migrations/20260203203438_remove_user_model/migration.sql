/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "articleStatusEnum" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- DropForeignKey
ALTER TABLE "articles" DROP CONSTRAINT "articles_userId_fkey";

-- DropTable
DROP TABLE "users";
