import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const documents = await prisma.document.findMany({
    include: {
      contents: {
        include: {
          knowledge: true
        }
      }
    }
  });
  console.dir(documents[0], { depth: null });
}

main();
