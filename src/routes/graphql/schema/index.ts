import { makeExecutableSchema } from '@graphql-tools/schema';
import fs from 'fs';
import { loadFiles } from 'graphql-import-files';
import { GraphQLJSON, GraphQLJSONObject } from 'graphql-type-json';
import { merge } from 'lodash';
import Module from 'node:module';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = Module.createRequire(import.meta.url);

const _dirname =
  typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(import.meta.url));

const resolvers: any = {
  basic: {
    Json: GraphQLJSON,
    Object: GraphQLJSONObject
  }
};

fs.readdirSync(_dirname + '/resolvers').forEach((file) => {
  if (file.endsWith('.js') && file !== 'index.js') {
    const resolver = require(`./resolvers/${file}`);
    resolvers[file.split('.')[0]] = resolver;
  }
});

const typeDefs = loadFiles('./**/*.graphql');

export default {
  schema: makeExecutableSchema({
    typeDefs,
    resolvers: merge([...Object.values(resolvers)])
  }),
  typeDefs: typeDefs,
  resolvers: merge([...Object.values(resolvers)])
};
