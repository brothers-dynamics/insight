-- DropForeignKey
ALTER TABLE "ContentUnion" DROP CONSTRAINT "ContentUnion_parentId_fkey";

-- AddForeignKey
ALTER TABLE "ContentUnion" ADD CONSTRAINT "ContentUnion_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "ContentUnion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
