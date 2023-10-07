import { z as zod } from 'zod';

export const userArgsSchema = zod.object({
  username: zod
    .string()
    .nonempty({ message: 'نام کاربری الزامی است' })
    .min(3, { message: 'نام کاربری باید حداقل ۳ حرف داشته باشد' })
    .max(30, { message: 'نام کاربری نمی‌تواند بیشتر از ۳۰ حرف باشد' })
    .regex(/^[a-zA-Z0-9_]+$/, 'نام کاربری فقط می‌تواند شامل حروف انگلیسی، اعداد و آندرلاین باشد'),

  password: zod
    .string()
    .nonempty({ message: 'رمز عبور الزامی است' })
    .min(8, { message: 'رمز عبور باید حداقل ۸ حرف داشته باشد' })
    .max(30, { message: 'رمز عبور نمی‌تواند بیشتر از ۳۰ حرف باشد' }),

  firstname: zod
    .string()
    .nonempty({ message: 'نام الزامی است' })
    .max(30, { message: 'نام باید کمتر از ۳۰ حرف باشد' })
    .regex(
      /^[a-zA-Z\s\u0600-\u06FF]+$/,
      'نام فقط می‌تواند شامل حروف انگلیسی، فاصله و حروف فارسی باشد'
    ),
  lastname: zod
    .string()
    .nonempty({ message: 'نام خانوادگی الزامی است' })
    .max(30, { message: 'نام خانوادگی باید کمتر از ۳۰ حرف باشد' })
    .regex(
      /^[a-zA-Z\s\u0600-\u06FF]+$/,
      'نام خانوادگی فقط می‌تواند شامل حروف انگلیسی، فاصله و حروف فارسی باشد'
    ),

  roleId: zod.number().int().positive({ message: 'نقش انتخاب شده نا معتبر است' }),

  active: zod.boolean()
});
