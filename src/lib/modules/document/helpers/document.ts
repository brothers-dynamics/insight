import { ApprovalStatus, documentType, PrismaClient } from '@prisma/client';

export async function createAndApplyKnowledgeContentForDocument(
  documentId: number,
  content: string,
  prisma: PrismaClient
) {
  const lastEditionVersion =
    (
      await prisma.document.findUnique({
        where: {
          id: documentId
        },
        include: {
          editions: {
            orderBy: {
              version: 'desc'
            }
          }
        }
      })
    )?.editions[0]?.version || 0;
  const contentUnion = await prisma.contentUnion.create({
    data: {
      type: documentType.KNOWLEDGE,
      version: lastEditionVersion + 1
    }
  });
  await prisma.approval.create({
    data: {
      contentUnionId: contentUnion.id,
      status: ApprovalStatus.PENDING
    }
  });
  await prisma.knowledge.create({
    data: {
      content: content,
      contentUnionId: contentUnion.id
    }
  });
  const document = await prisma.document.update({
    where: {
      id: documentId
    },
    data: {
      editions: {
        connect: {
          id: contentUnion.id
        }
      }
    }
  });
  return document;
}
