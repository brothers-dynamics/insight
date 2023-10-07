-- DropForeignKey
ALTER TABLE "ContentUnion" DROP CONSTRAINT "ContentUnion_documentId_fkey";

-- AddForeignKey
ALTER TABLE "ContentUnion" ADD CONSTRAINT "ContentUnion_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;
