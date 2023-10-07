/*
  Warnings:

  - You are about to drop the column `parentId` on the `ContentUnion` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContentUnion" DROP CONSTRAINT "ContentUnion_parentId_fkey";

-- DropIndex
DROP INDEX "ContentUnion_parentId_key";

-- AlterTable
ALTER TABLE "ContentUnion" DROP COLUMN "parentId";
