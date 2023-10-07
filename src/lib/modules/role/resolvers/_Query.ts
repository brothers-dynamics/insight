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
    }
  }
};
