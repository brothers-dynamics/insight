import { parseAndAssert } from '$modules/__init/helpers/assertion';
import {
  handlePrismaError,
  handleValidationError,
  unknownFailure
} from '$modules/__init/helpers/errors';
import { Prisma } from '@prisma/client';
import type { RoleModule } from '../$kitql/moduleTypes';
import { roleArgsSchema } from '../validators/_Role';

export const resolvers: RoleModule.Resolvers = {
  Mutation: {
    roleCreate: async function (root, { fields }, { prisma, zod }) {
      const roleCreateArgsSchema = roleArgsSchema;
      try {
        const data = await parseAndAssert(roleCreateArgsSchema, fields);
        const role = await prisma.role.create({
          data
        });
        return { role, errors: [] };
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          return handlePrismaError(error, (code) => {
            if (code === 'P2002') {
              return 'یک نقش با این نام وجود دارد';
            }
          });
        } else if (error instanceof zod.ZodError) {
          return handleValidationError(error);
        } else {
          return unknownFailure;
        }
      }
    },
    roleUpdate: async function (root, { id, fields }, { prisma, zod }) {
      const roleUpdateArgsSchema = roleArgsSchema.partial();
      try {
        const data = await parseAndAssert(roleUpdateArgsSchema, fields);
        const role = await prisma.role.update({
          where: {
            id
          },
          data
        });
        return { role, errors: [] };
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          return handlePrismaError(error, (code) => {
            if (code === 'P2002') {
              return 'یک نقش با این نام وجود دارد';
            }
          });
        } else if (error instanceof zod.ZodError) {
          return handleValidationError(error);
        } else {
          return unknownFailure;
        }
      }
    },
    roleDelete: async (root, { id }, { prisma }) => {
      try {
        const role = await prisma.role.delete({
          where: { id }
        });
        return { role, errors: [] };
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          return handlePrismaError(error, (code) => {
            if (code === 'P2025') {
              return 'نقش مورد نظر وجود ندارد';
            }
          });
        } else {
          return unknownFailure;
        }
      }
    }
  }
};
