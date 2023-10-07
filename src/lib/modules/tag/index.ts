import { kitqlModules } from '@kitql/all-in';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { resolvers } from './$kitql/resolvers';
import { typeDefs } from './$kitql/typedefs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const tagModule = kitqlModules({
  id: 'tag-module',
  dirname: __dirname,
  typeDefs,
  resolvers
});
