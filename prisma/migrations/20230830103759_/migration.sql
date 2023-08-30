-- DropForeignKey
ALTER TABLE "Knowledge" DROP CONSTRAINT "Knowledge_parentId_fkey";

-- AlterTable
ALTER TABLE "Knowledge" ALTER COLUMN "parentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Knowledge" ADD CONSTRAINT "Knowledge_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Knowledge"("id") ON DELETE SET NULL ON UPDATE CASCADE;
