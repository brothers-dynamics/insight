import type { Privileges } from '@prisma/client';
import { GraphQLError } from 'graphql';
import type { RoleModule } from '../$kitql/moduleTypes';

export const resolvers: RoleModule.Resolvers = {
  Mutation: {
    roleCreate: async function (root, { fields }, { prisma }) {
      if (fields.name && fields.privileges.length > 0) {
        const role = await prisma.role.create({
          data: {
            name: fields.name,
            privileges: fields.privileges as Privileges[]
          }
        });
        return role;
      } else {
        throw new GraphQLError(`Error thrown 💥`, {
          extensions: {
            code: 'BAD_REQUEST'
          }
        });
      }
    },
    roleUpdate: async function (root, { id, fields }, { prisma }) {
      if (fields.name && fields.privileges.length > 0) {
        const role = await prisma.role.update({
          where: {
            id: id
          },
          data: {
            name: fields.name,
            privileges: fields.privileges as Privileges[]
          }
        });
        return role;
      } else {
        throw new GraphQLError(`Error thrown 💥`, {
          extensions: {
            code: 'BAD_REQUEST'
          }
        });
      }
    },
    roleDelete: async function (root, { id }, { prisma }) {
      const role = await prisma.role.delete({
        where: {
          id: id
        }
      });
      return role;
    }
  }
};
