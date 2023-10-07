import { parseAndAssert } from '$modules/__init/helpers/assertion';
import {
  handlePrismaError,
  handleValidationError,
  unknownFailure
} from '$modules/__init/helpers/errors';
import { Prisma, documentType } from '@prisma/client';
import type { DocumentModule } from '../$kitql/moduleTypes';
import { createAndApplyKnowledgeContentForDocument } from '../helpers/document';
import { documentEditionArgsSchema, documentNewArgsSchema } from '../validators/_Document';

export const resolvers: DocumentModule.Resolvers = {
  // @ts-ignore
  DocumentMutationResponse: {
    // @ts-ignore
    __resolveType(root) {
      if (root.id) {
        return 'Document';
      }
      return 'ErrorList';
    }
  },
  Mutation: {
    documentKnowledgeCreateNew: async (root, { fields }, { prisma, zod }) => {
      const documentCreateNewArgsSchema = documentNewArgsSchema;
      try {
        const data = await parseAndAssert(documentCreateNewArgsSchema, fields);
        const latestDocumentId =
          (
            await prisma.document.findFirst({
              orderBy: {
                id: 'desc'
              }
            })
          )?.id || 1;
        let document = await prisma.document.create({
          data: {
            code: `KNW-${latestDocumentId.toString().padStart(5, '0')}`,
            title: data.title,
            type: documentType.KNOWLEDGE,
            // TODO: logged in user must be replaced here
            authorId: 1,
            summery: data.summery,
            tags: {
              connect: data.tags.map((tagId) => {
                return { id: tagId };
              })
            },
            domains: {
              connect: data.domains.map((roleId) => {
                return { id: roleId };
              })
            }
          }
        });
        document = await createAndApplyKnowledgeContentForDocument(
          document.id,
          data.content,
          prisma
        );
        return document;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          return handlePrismaError(error, (code) => {
            if (code === 'P2002') {
              return 'یک سند با این عنوان وجود دارد';
            }
            if (code === 'P2025') {
              return 'تگ یا دامنه انتخاب شده نامعتبر است';
            }
          });
        } else if (error instanceof zod.ZodError) {
          return handleValidationError(error);
        } else {
          return unknownFailure;
        }
      }
    },
    documentKnowledgeCreateEdition: async (root, { fields }, { prisma, zod }) => {
      const documentCreateEditionArgsSchema = documentEditionArgsSchema;
      try {
        const data = await parseAndAssert(documentCreateEditionArgsSchema, fields);
        const document = await createAndApplyKnowledgeContentForDocument(
          data.documentId,
          data.content,
          prisma
        );
        return document;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          return handlePrismaError(error, (code) => {
            if (code === 'P2025') {
              return 'سند انتخاب شده نامعتبر است';
            }
          });
        } else if (error instanceof zod.ZodError) {
          return handleValidationError(error);
        } else {
          return unknownFailure;
        }
      }
    }
  }
};
