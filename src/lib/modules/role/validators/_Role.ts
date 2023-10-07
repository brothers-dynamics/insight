import { Privileges } from '@prisma/client';
import { z as zod } from 'zod';

export const roleArgsSchema = zod.object({
  name: zod
    .string()
    .nonempty({ message: 'نام نقش الزامی است' })
    .max(30, { message: 'نام نقش باید کمتر از ۳۰ حرف باشد' })
    .regex(
      /^[a-zA-Z\s\u0600-\u06FF]+$/,
      'نام نقش فقط می‌تواند شامل حروف انگلیسی، فاصله و حروف فارسی باشد'
    ),

  privileges: zod.array(
    zod.nativeEnum(Privileges, {
      errorMap: () => ({ message: 'دسترسی ها معتبر نیستند' })
    })
  )
});
