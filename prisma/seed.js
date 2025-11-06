const { PrismaClient } = require("@prisma/client");
const products = require("./products.json");
const prisma = new PrismaClient();

async function main() {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

async function run() {
  try {
    await main();
  } catch (e) {
    console.error("Error seeding data:", e.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

run();
