import type { RoleModule } from '../$kitql/moduleTypes';

export const resolvers: RoleModule.Resolvers = {
  Role: {
    users: async ({ id }, args, { prisma }) => {
      return await prisma.role
        .findUnique({
          where: {
            id
          }
        })
        .users();
    }
  },
  Query: {
    role: async (root, { id }, { prisma }) => {
      const role = await prisma.role.findUnique({
        where: {
          id
        },
        include: {
          users: true
        }
      });
      return role;
    },
    roles: async (root, { skip, take }, { prisma }) => {
      let selection = {};
      if (take && skip) {
        selection = {
          skip,
          take
        };
      }
      const roles = await prisma.role.findMany({
        ...selection,
        orderBy: {
          createdAt: 'asc'
        }
      });
      return roles;
    }
  }
};
