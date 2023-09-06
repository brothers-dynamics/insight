import { useKitqlModules, type KitQLHandleGraphQL } from '@kitql/all-in';
import { PrismaClient } from '@prisma/client';
import type { RequestEvent } from '@sveltejs/kit';
import { z as zod } from 'zod';
import { modules } from './$kitql/_appModules';

const plugins = [];
plugins.push(useKitqlModules(modules));

const prisma = new PrismaClient();

export type IKitQLContext = ReturnType<typeof getContext>;
function getContext({ request }: RequestEvent) {
  // get the cookie or the token...
  const authToken = request.headers.get('Authorization');

  return {
    request,
    prisma,
    zod
  };
}

export const kitqlServer: KitQLHandleGraphQL<IKitQLContext, RequestEvent> = {
  plugins,
  context: getContext
};
