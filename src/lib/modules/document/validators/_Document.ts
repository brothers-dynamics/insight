import { z as zod } from 'zod';

export const documentNewArgsSchema = zod.object({
  title: zod
    .string()
    .nonempty({ message: 'عنوان الزامی است' })
    .min(3, { message: 'عنوان باید حداقل ۳ حرف داشته باشد' })
    .max(128, { message: 'عنوان نمی‌تواند بیشتر از 128 حرف باشد' }),

  summery: zod
    .string()
    .nonempty({ message: 'خلاصه الزامی است' })
    .min(8, { message: 'خلاصه باید حداقل ۸ حرف داشته باشد' })
    .max(256, { message: 'خلاصه نمی‌تواند بیشتر از 256 حرف باشد' }),

  authorId: zod.number().int().positive({ message: 'نویسنده انتخاب شده نا معتبر است' }),

  domains: zod.number().array().min(1, {
    message: 'دامنه نباید خالی باشد'
  }),

  tags: zod.number().array().min(1, {
    message: 'تگ نباید خالی باشد'
  }),

  content: zod
    .string()
    .nonempty({ message: 'محتوا الزامی است' })
    .min(3, { message: 'محتوا باید حداقل ۳ حرف داشته باشد' })
    .max(5000, { message: 'محتوا نمی‌تواند بیشتر از 5000 حرف باشد' })
});

export const documentEditionArgsSchema = zod.object({
  documentId: zod.number().int().positive({ message: 'سند انتخاب شده نا معتبر است' }),
  content: zod
    .string()
    .nonempty({ message: 'محتوا الزامی است' })
    .min(3, { message: 'محتوا باید حداقل ۳ حرف داشته باشد' })
    .max(5000, { message: 'محتوا نمی‌تواند بیشتر از 5000 حرف باشد' })
});
