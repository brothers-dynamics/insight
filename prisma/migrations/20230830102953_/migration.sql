/*
  Warnings:

  - You are about to drop the column `version` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `summery` on the `Knowledge` table. All the data in the column will be lost.
  - You are about to drop the `_RoleToUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[code]` on the table `Document` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[parentId]` on the table `Knowledge` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `summery` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentId` to the `Knowledge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_RoleToUser" DROP CONSTRAINT "_RoleToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoleToUser" DROP CONSTRAINT "_RoleToUser_B_fkey";

-- DropIndex
DROP INDEX "Document_code_version_key";

-- AlterTable
ALTER TABLE "Document" DROP COLUMN "version",
ADD COLUMN     "latest" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "summery" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Knowledge" DROP COLUMN "summery",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "parentId" INTEGER NOT NULL,
ADD CONSTRAINT "Knowledge_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roleId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_RoleToUser";

-- CreateTable
CREATE TABLE "_reference" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_reference_AB_unique" ON "_reference"("A", "B");

-- CreateIndex
CREATE INDEX "_reference_B_index" ON "_reference"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Document_code_key" ON "Document"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Knowledge_parentId_key" ON "Knowledge"("parentId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Knowledge" ADD CONSTRAINT "Knowledge_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Knowledge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_reference" ADD CONSTRAINT "_reference_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_reference" ADD CONSTRAINT "_reference_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;
