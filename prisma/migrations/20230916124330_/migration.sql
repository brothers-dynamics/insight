-- DropForeignKey
ALTER TABLE "ContentUnion" DROP CONSTRAINT "ContentUnion_parentId_fkey";

-- DropForeignKey
ALTER TABLE "Knowledge" DROP CONSTRAINT "Knowledge_contentUnionId_fkey";

-- AddForeignKey
ALTER TABLE "ContentUnion" ADD CONSTRAINT "ContentUnion_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "ContentUnion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Knowledge" ADD CONSTRAINT "Knowledge_contentUnionId_fkey" FOREIGN KEY ("contentUnionId") REFERENCES "ContentUnion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
