import { parseAndAssert } from '$modules/__init/helpers/assertion';
import {
  handlePrismaError,
  handleValidationError,
  unknownFailure
} from '$modules/__init/helpers/errors';
import { Prisma } from '@prisma/client';
import type { UserModule } from '../$kitql/moduleTypes';
import { userArgsSchema } from '../validators/_User';

export const resolvers: UserModule.Resolvers = {
  // @ts-ignore
  UserMutationResponse: {
    // @ts-ignore
    __resolveType(root) {
      if (root.id) {
        return 'User';
      }
      return 'ErrorList';
    }
  },
  Mutation: {
    userCreate: async (root, { fields }, { prisma, zod }) => {
      const userCreateArgsSchema = userArgsSchema;
      try {
        const data = await parseAndAssert(userCreateArgsSchema, fields);
        const user = await prisma.user.create({
          data
        });
        return user;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          return handlePrismaError(error, (code) => {
            if (code === 'P2002') {
              return 'این نام کاربری قبلا ثبت شده';
            }
            if (code === 'P2025') {
              return 'نقش انتخاب شده وجود ندارد';
            }
          });
        } else if (error instanceof zod.ZodError) {
          return handleValidationError(error);
        } else {
          return unknownFailure;
        }
      }
    },
    userUpdate: async (root, { id, fields }, { prisma, zod }) => {
      const userUpdateArgsSchema = userArgsSchema.partial();
      try {
        const data = await parseAndAssert(userUpdateArgsSchema, fields);
        const user = await prisma.user.update({
          where: { id },
          data
        });
        return user;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          return handlePrismaError(error, (code) => {
            if (code === 'P2002') {
              return 'این نام کاربری قبلا ثبت شده';
            }
            if (code === 'P2025') {
              return 'نقش انتخاب شده وجود ندارد';
            }
            return '';
          });
        } else if (error instanceof zod.ZodError) {
          return handleValidationError(error);
        } else {
          return unknownFailure;
        }
      }
    },
    userDelete: async (root, { id }, { prisma }) => {
      try {
        const user = await prisma.user.delete({
          where: { id }
        });
        return user;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          return handlePrismaError(error, (code) => {
            if (code === 'P2025') {
              return 'کاربر مورد نظر وجود ندارد';
            }
          });
        } else {
          return unknownFailure;
        }
      }
    }
  }
};
