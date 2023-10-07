import { z as zod } from 'zod';

export const tagArgsSchema = zod.object({
  name: zod
    .string()
    .nonempty({ message: 'نام تگ الزامی است' })
    .max(30, { message: 'نام تگ باید کمتر از ۳۰ حرف باشد' })
    .regex(
      /^[a-zA-Z\s0-9\u0600-\u06FF]+$/,
      'نام تگ فقط میتواند شامل حروف انگلیسی، فاصله, حروف فارسی و عدد باشد'
    ),

  description: zod
    .string()
    .max(500, { message: 'نام تگ باید کمتر از 500 حرف باشد' })
    .nonempty({ message: 'توضیحات تگ الزامی است' })
});
