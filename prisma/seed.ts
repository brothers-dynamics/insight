// app/prisma/seed.ts
import { faker } from '@faker-js/faker';
import { PrismaClient, type User } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany({}); // use with caution.
  await prisma.role.deleteMany({}); // use with caution.

  const numberOfUsers = 200;

  const users: Omit<User, 'id' | 'createdAt' | 'updatedAt'| 'lastVisit'>[] = [];

  for (let i = 0; i < numberOfUsers; i++) {
    const user: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'lastVisit'> = {
      username: faker.internet.userName(),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      password: faker.internet.password(),
      roleId: 2,
      active: faker.datatype.boolean({
        probability: 0.9
      })
    };

    users.push(user);
  }

  const addRoles = async () =>
    await prisma.role.createMany({
      data: [
        {
          name: 'Admin',
          privileges: ['SUDO']
        },
        {
          name: 'Operator',
          privileges: ['DOCUMENT_MANAGEMENT']
        }
      ]
    });
  const addUsers = async () => await prisma.user.createMany({ data: users });

  addRoles();
  addUsers();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
