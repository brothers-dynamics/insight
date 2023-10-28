import type { Error } from '$graphql/$kitql/graphqlTypes';
import type { Prisma } from '@prisma/client';
import type { z as zod } from 'zod';

export type StandardOutputType = {
  errors: Error[];
  [key: string]: unknown;
};

export const unknownFailure = {
  errors: [
    {
      code: 'UNKNOWN_FAILURE',
      message: 'مشکلی فنی به وجود آمده, لطفا با ادمین مطرح کنید'
    }
  ]
} as StandardOutputType;

export function handlePrismaError(
  error: Prisma.PrismaClientKnownRequestError,
  handler: (code: string, meta?: Record<string, unknown>) => string | undefined
): StandardOutputType {
  const message: string = handler(error.code, error.meta) || 'مشکل در روند ذخیره اطلاعات پیش آمده';
  return {
    errors: [
      {
        code: 'PRISMA_ERROR',
        message: message,
        extension: {
          ...error
        }
      }
    ]
  } as {
    errors: Error[];
    [key: string]: unknown;
  };
}

export function handleValidationError(error: zod.ZodError): StandardOutputType {
  const errorList: StandardOutputType = {
    errors: []
  };
  for (const issue of error.issues) {
    errorList.errors.push({
      code: 'BAD_INPUT',
      message: issue.message,
      extension: {
        field: issue.path
      }
    });
  }
  return errorList;
}
