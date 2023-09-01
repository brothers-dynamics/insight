/*
  Warnings:

  - You are about to drop the column `documentId` on the `Approval` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[contentUnionId]` on the table `Approval` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contentUnionId` to the `Approval` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Approval" DROP CONSTRAINT "Approval_documentId_fkey";

-- DropIndex
DROP INDEX "Approval_documentId_key";

-- AlterTable
ALTER TABLE "Approval" DROP COLUMN "documentId",
ADD COLUMN     "contentUnionId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Approval_contentUnionId_key" ON "Approval"("contentUnionId");

-- AddForeignKey
ALTER TABLE "Approval" ADD CONSTRAINT "Approval_contentUnionId_fkey" FOREIGN KEY ("contentUnionId") REFERENCES "ContentUnion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
