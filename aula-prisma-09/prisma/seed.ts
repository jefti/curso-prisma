import prisma from "../src/database";

async function checkOrCreateDefaultUser() {
  return await prisma.customer.upsert({
    create: {
      firstName: 'Geraldo',
      lastName: 'Luiz Datena',
      document: '133.245.497-60'
    },
    update: {},
    where: {
        document: '133.245.497-60'
    }
  })
}

checkOrCreateDefaultUser();