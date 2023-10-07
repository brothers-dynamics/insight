-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "archived" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "summery" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "updatedAt" DROP DEFAULT;
