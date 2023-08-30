-- DropForeignKey
ALTER TABLE "Knowledge" DROP CONSTRAINT "Knowledge_parentId_fkey";

-- AlterTable
ALTER TABLE "Knowledge" ADD COLUMN     "version" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Knowledge" ADD CONSTRAINT "Knowledge_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Knowledge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
