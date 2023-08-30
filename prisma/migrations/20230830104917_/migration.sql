/*
  Warnings:

  - A unique constraint covering the columns `[documentId,version]` on the table `Knowledge` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Knowledge_content_key";

-- CreateIndex
CREATE UNIQUE INDEX "Knowledge_documentId_version_key" ON "Knowledge"("documentId", "version");
