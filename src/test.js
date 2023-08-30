import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const documents = await prisma.document.findMany({
    include: {
      knowledges: true
    }
  });
  console.log(documents[0].knowledges);
}

main();
