import { parseAndAssert } from '$modules/__init/helpers/assertion';
import {
  handlePrismaError,
  handleValidationError,
  unknownFailure
} from '$modules/__init/helpers/errors';
import { Prisma } from '@prisma/client';
import type { TagModule } from '../$kitql/moduleTypes';
import { tagArgsSchema } from '../validators/_Tag';

export const resolvers: TagModule.Resolvers = {
  Mutation: {
    tagCreate: async function (root, { fields }, { prisma, zod }) {
      const tagCreateArgsSchema = tagArgsSchema;
      try {
        const data = await parseAndAssert(tagCreateArgsSchema, fields);
        const tag = await prisma.tag.create({
          data
        });
        return {
          tag,
          errors: []
        };
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          return handlePrismaError(error, (code) => {
            if (code === 'P2002') {
              return 'یک تگ با این نام وجود دارد';
            }
          });
        } else if (error instanceof zod.ZodError) {
          return handleValidationError(error);
        } else {
          return unknownFailure;
        }
      }
    },
    tagUpdate: async function (root, { id, fields }, { prisma, zod }) {
      const tagUpdateArgsSchema = tagArgsSchema.partial();
      try {
        const data = await parseAndAssert(tagUpdateArgsSchema, fields);
        const tag = await prisma.tag.update({
          where: {
            id
          },
          data
        });
        return {
          tag,
          errors: []
        };
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          return handlePrismaError(error, (code) => {
            if (code === 'P2002') {
              return 'یک تگ با این نام وجود دارد';
            }
          });
        } else if (error instanceof zod.ZodError) {
          return handleValidationError(error);
        } else {
          return unknownFailure;
        }
      }
    },
    tagDelete: async (root, { id }, { prisma }) => {
      try {
        const tag = await prisma.tag.delete({
          where: { id }
        });
        return {
          tag,
          errors: []
        };
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          return handlePrismaError(error, (code) => {
            if (code === 'P2025') {
              return 'تگ مورد نظر وجود ندارد';
            }
          });
        } else {
          return unknownFailure;
        }
      }
    }
  }
};
