import type { PrismaClient } from '@prisma/client';

export type Context = {
  prisma: PrismaClient;
  req: any;
  user: any;
};

export type Error = {
  code: number;
  message: string;
};
