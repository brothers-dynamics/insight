import type { ErrorList } from '$graphql/$kitql/graphqlTypes';
import type { Prisma } from '@prisma/client';
import type { z as zod } from 'zod';

export const unknownFailure = {
  errors: [
    {
      code: 'UNKNOWN_FAILURE',
      message: 'مشکلی فنی به وجود آمده, لطفا با ادمین مطرح کنید'
    }
  ]
} satisfies ErrorList;

export function handlePrismaError(
  error: Prisma.PrismaClientKnownRequestError,
  handler: (code: string, meta?: Record<string, unknown>) => string | undefined
): ErrorList {
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
  } satisfies ErrorList;
}

export function handleValidationError(error: zod.ZodError): ErrorList {
  const errorList: ErrorList = {
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
