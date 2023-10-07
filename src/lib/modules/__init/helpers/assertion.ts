import type { z } from 'zod';

export async function parseAndAssert<T>(schema: z.ZodType<T>, data: unknown): Promise<Awaited<T>> {
  return (await schema.parseAsync(data)) as Promise<Awaited<T>>;
}
