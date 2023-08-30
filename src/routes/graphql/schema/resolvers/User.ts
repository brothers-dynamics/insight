const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

import type { User } from '@prisma/client';
import type { Context, Error } from './Base';

export default {
  User: {
    roles: async (scope: User, _: unknown, { prisma }: Context) => {
      const role = await prisma.user
        .findUnique({
          where: {
            id: scope.id
          }
        })
        .roles();
      return role;
    },
    logs: async (scope: User, _: unknown, { prisma }: Context) => {
      const logs = await prisma.user
        .findUnique({
          where: {
            id: scope.id
          }
        })
        .logs();
      return logs;
    },
    createdDocuments: async (scope: User, _: unknown, { prisma }: Context) => {
      const createdDocuments = await prisma.user
        .findUnique({
          where: {
            id: scope.id
          }
        })
        .createdDocuments();
      return createdDocuments;
    }
  },
  UserMutationResponse: {
    __resolveType(object: User | Error) {
      if ('id' in object) {
        return 'User';
      }
      return 'Error';
    }
  },
  Query: {
    GetUser: async (scope: User, args: { id: number }, { prisma }: Context) => {
      const user = await prisma.user.findUnique({
        where: {
          id: args.id
        }
      });
      return user;
    },
    ListUsers: async (scope: User, _: unknown, { prisma }: Context) => {
      const users = await prisma.user.findMany();
      return users;
    },
    CurrentUser: async (scope: User, args, { prisma, user }) => {
      return user;
    }
  },
  Mutation: {
    CreateUser: async (scope: User, args, { prisma }) => {
      try {
        const user = await prisma.user.create({
          data: {
            ...args.input,
            password: await bcrypt.hash(args.input.password, 12)
          }
        });
        return user;
      } catch ({ code }) {
        return code;
      }
    },
    UpdateUser: async (scope: User, args, { prisma, user }) => {
      try {
        const user = await prisma.user.update({
          where: {
            id: args.id
          },
          data: {
            ...args.input,
            password: await bcrypt.hash(args.input.password, 12)
          }
        });
        return user;
      } catch ({ code }) {
        return code;
      }
    },
    DeleteUser: async (scope: User, args, { prisma, user }) => {
      try {
        const user = await prisma.user.delete({
          where: {
            id: args.id
          }
        });
        return user;
      } catch ({ code }) {
        return code;
      }
    },
    Login: async (scope: User, args, { prisma, req, user }) => {
      const target = await prisma.user.findUnique({
        where: {
          username: args.username
        },
        include: {
          role: true
        }
      });
      if (target && (await bcrypt.compare(args.password, target.password))) {
        const jwt = await jsonwebtoken.sign(target, process.env.JWT_SECRET, {
          expiresIn: '1d'
        });
        return { ...target, jwt };
      }
      return {
        code: 'A1001'
      };
    }
  }
};
