/*
  Warnings:

  - You are about to drop the column `approverId` on the `Approval` table. All the data in the column will be lost.
  - You are about to drop the `RevisionRequest` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Approval` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ApprovalStatus" AS ENUM ('APPROVED', 'REJECTED', 'PENDING', 'REVISION');

-- DropForeignKey
ALTER TABLE "Approval" DROP CONSTRAINT "Approval_approverId_fkey";

-- DropForeignKey
ALTER TABLE "RevisionRequest" DROP CONSTRAINT "RevisionRequest_documentId_fkey";

-- DropForeignKey
ALTER TABLE "RevisionRequest" DROP CONSTRAINT "RevisionRequest_userId_fkey";

-- AlterTable
ALTER TABLE "Approval" DROP COLUMN "approverId",
ADD COLUMN     "handlerId" INTEGER,
ADD COLUMN     "message" TEXT,
ADD COLUMN     "status" "ApprovalStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "RevisionRequest";

-- AddForeignKey
ALTER TABLE "Approval" ADD CONSTRAINT "Approval_handlerId_fkey" FOREIGN KEY ("handlerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
