import type { TagModule } from '../$kitql/moduleTypes';

export const resolvers: TagModule.Resolvers = {
  Tag: {
    documents: async (root, args, { prisma }) => {
      return await prisma.tag
        .findUnique({
          where: {
            id: root.id
          }
        })
        .documents();
    }
  },
  Query: {
    tag: async (root, { id }, { prisma }) => {
      const tag = await prisma.tag.findUnique({
        where: {
          id: id
        }
      });
      return tag;
    },
    tags: async (root, { skip, take }, { prisma }) => {
      let selection = {};
      if (take && skip) {
        selection = {
          skip,
          take
        };
      }
      const tags = await prisma.tag.findMany(selection);
      return tags;
    }
  }
};
