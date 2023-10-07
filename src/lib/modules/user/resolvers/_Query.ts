import type { UserModule } from '../$kitql/moduleTypes';

export const resolvers: UserModule.Resolvers = {
  User: {
    role: async ({ id }, args, { prisma }) => {
      return await prisma.user
        .findUnique({
          where: {
            id
          }
        })
        .role();
    }
  },
  Query: {
    user: async (root, { id }, { prisma }) => {
      const user = await prisma.user.findUnique({
        where: {
          id
        }
      });
      return user;
    },
    users: async (root, { skip, take }, { prisma }) => {
      let selection = {};
      if (take && skip) {
        selection = {
          skip,
          take
        };
      }
      const users = await prisma.user.findMany(selection);
      return users;
    },
    searchByFullName: async (root, { skip, take, query }, { prisma }) => {
      let selection = {};
      if (take && skip) {
        selection = {
          skip,
          take
        };
      }
      const users = await prisma.user.findMany({
        ...selection,
        where: {
          OR: [{ firstname: { contains: query } }, { lastname: { contains: query } }]
        }
      });
      return users;
    },
    searchByUsername: async (root, { query, skip, take }, { prisma }) => {
      let selection = {};
      if (take && skip) {
        selection = {
          skip,
          take
        };
      }
      const users = await prisma.user.findMany({
        ...selection,
        where: {
          username: {
            contains: query
          }
        }
      });
      return users;
    }
  }
};
