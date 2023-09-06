import { DateResolver, DateTimeResolver } from 'graphql-scalars';
import { GraphQLJSON, GraphQLJSONObject } from 'graphql-type-json';
import type { __InitModule } from '../$kitql/moduleTypes';

export const resolvers: __InitModule.Resolvers = {
  Date: DateResolver,
  DateTime: DateTimeResolver,
  Json: GraphQLJSON,
  Object: GraphQLJSONObject
};
