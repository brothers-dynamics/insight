import { GraphQLError } from 'graphql';
import type { RoleModule } from '../$kitql/moduleTypes';

export const resolvers: RoleModule.Resolvers = {
  Query: {
    role: async (root, { id }, { prisma }) => {
      try {
        const role = await prisma.role.findUniqueOrThrow({
          where: {
            id: id
          },
          include: {
            users: true
          }
        });
        return role;
      } catch (error) {
        throw new GraphQLError(`Error thrown 💥`, {
          extensions: {
            code: 'ROLE_NOT_FOUND'
          }
        });
      }
    }
  }
};
