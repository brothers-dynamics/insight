import type { Error } from '$graphql/$kitql/graphqlTypes';
import type { UserModule } from '../$kitql/moduleTypes';

export const resolvers: UserModule.Resolvers = {
  UserMutationResponse: {
    __resolveType(root) {
      if (root.id) {
        return 'User';
      }
      return 'Error';
    }
  },
  Mutation: {
    userCreate: async (root, args, { prisma, zod }) => {
      const userCreateArgsSchema = zod
        .object({
          username: zod
            .string()
            .min(3, { message: 'نام کاربری باید حداقل ۳ حرف داشته باشد' })
            .max(30, { message: 'نام کاربری نمی‌تواند بیشتر از ۳۰ حرف باشد' })
            .regex(
              /^[a-zA-Z0-9_]+$/,
              'نام کاربری فقط می‌تواند شامل حروف انگلیسی، اعداد و آندرلاین باشد'
            )
            .refine((value) => !!value, { message: 'نام کاربری الزامی است' })
            .superRefine(async (value, ctx) => {
              const user = await prisma.user.findUnique({
                where: {
                  username: value
                }
              });
              if (user) {
                ctx.addIssue({
                  code: zod.ZodIssueCode.invalid_intersection_types,
                  fatal: true,
                  message: 'این نام کاربری قبلا انتخاب شده',
                  path: ['username']
                });
              }
            }),

          password: zod
            .string()
            .min(8, { message: 'رمز عبور باید حداقل ۸ حرف داشته باشد' })
            .max(30, { message: 'رمز عبور نمی‌تواند بیشتر از ۳۰ حرف باشد' })
            .refine((value) => !!value, { message: 'رمز عبور الزامی است' }),

          firstname: zod
            .string()
            .max(30, { message: 'نام باید کمتر از ۳۰ حرف باشد' })
            .regex(
              /^[a-zA-Z\s\u0600-\u06FF]+$/,
              'نام فقط می‌تواند شامل حروف انگلیسی، فاصله و حروف فارسی باشد'
            )
            .refine((value) => !!value, { message: 'نام الزامی است' }),

          lastname: zod
            .string()
            .max(30, { message: 'نام خانوادگی باید کمتر از ۳۰ حرف باشد' })
            .regex(
              /^[a-zA-Z\s\u0600-\u06FF]+$/,
              'نام خانوادگی فقط می‌تواند شامل حروف انگلیسی، فاصله و حروف فارسی باشد'
            )
            .refine((value) => !!value, { message: 'نام خانوادگی الزامی است' }),

          role: zod
            .number()
            .int()
            .positive({ message: 'نقش باید یک عدد مثبت صحیح باشد' })
            .refine((value) => !!value, { message: 'نقش الزامی است' })
            .superRefine(async (value, ctx) => {
              const role = await prisma.role.findUnique({
                where: {
                  id: value
                }
              });
              if (!role) {
                ctx.addIssue({
                  code: zod.ZodIssueCode.invalid_intersection_types,
                  fatal: true,
                  message: 'نقش انتخاب شده وجود ندارد',
                  path: ['role']
                });
              }
            }),

          active: zod.boolean().refine((value) => !!value, { message: 'وضعیت کاربر الزامی است' })
        })
        .nonstrict();
      const parse = await userCreateArgsSchema.safeParseAsync(args.fields);
      if (parse.success) {
        const user = await prisma.user.create({
          data: {
            ...args.fields,
            role: {
              connect: {
                id: args.fields.role
              }
            }
          }
        });
        return user;
      } else {
        const error: Error = {
          code: 400,
          message: parse.error.errors[0].message,
          extension: {}
        };
        return error;
      }
    }
  }
};
