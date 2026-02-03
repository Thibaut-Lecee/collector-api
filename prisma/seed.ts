import console from 'node:console';
import process from 'node:process';
import { parseArgs } from 'node:util';
import { v4 as uuidv4 } from 'uuid';
import { prisma } from '../src/infrastructure/database/prisma';

const options = {
  environment: { type: 'string' as const },
};

const categoriesSeed = async () => {
  const categories = [
    { id: uuidv4(), name: 'Electronics' },
    { id: uuidv4(), name: 'Books' },
    { id: uuidv4(), name: 'Clothing' },
    { id: uuidv4(), name: 'Home & Kitchen' },
    { id: uuidv4(), name: 'Sports & Outdoors' },
    { id: uuidv4(), name: 'Toys & Games' },
    { id: uuidv4(), name: 'Health & Personal Care' },
    { id: uuidv4(), name: 'Automotive' },
    { id: uuidv4(), name: 'Garden & Outdoors' },
    { id: uuidv4(), name: 'Music & Instruments' },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { name: category.name },
      update: {},
      create: {
        id: category.id,
        name: category.name,
      },
    });
  }
};

const userSeed = async () => {
  const email = 'johndoe@test.com';
  return prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      username: 'johndoe',
    },
  });
};

const articleSeed = async (userId: string) => {
  const categoryNames = [
    'Electronics',
    'Books',
    'Clothing',
    'Home & Kitchen',
    'Sports & Outdoors',
    'Garden & Outdoors',
    'Music & Instruments',
  ];

  const categories = await prisma.category.findMany({
    where: { name: { in: categoryNames } },
  });
  const categoryByName = new Map(categories.map((category) => [category.name, category.id]));

  const articles = [
    {
      id: 'dff4b2c7-4201-4d21-9d1c-8c83b6e8f2f1',
      title: 'Aria X1 Bluetooth Headphones',
      description: 'Wireless headphones with active noise reduction and 30h battery.',
      price: 149.99,
      isPublished: true,
      categories: ['Electronics'],
    },
    {
      id: '8d3a7c9b-5b1b-4e2f-a1f1-2e3c7b1b5d2a',
      title: 'Minimalist Desk Lamp',
      description: 'Adjustable LED desk lamp with warm and cool light modes.',
      price: 59.0,
      isPublished: true,
      categories: ['Home & Kitchen'],
    },
    {
      id: 'f28c0b55-8a3f-4f0d-9f0c-5f1a9c8f0a77',
      title: 'Starlight Voyage (Sci Fi Novel)',
      description: 'A fast paced space adventure with strong characters.',
      price: 19.5,
      isPublished: true,
      categories: ['Books'],
    },
    {
      id: '3df8b1f8-9438-4f7f-b95a-8e2bb7d5a4c8',
      title: 'Trailproof Rain Jacket',
      description: 'Lightweight waterproof jacket built for hiking and travel.',
      price: 89.9,
      isPublished: true,
      categories: ['Clothing', 'Sports & Outdoors'],
    },
    {
      id: '9a8b7c6d-5e4f-4a3b-8c2d-1e0f9a8b7c6d',
      title: 'Garden Hand Tool Set',
      description: 'Stainless steel tools for planting, weeding, and pruning.',
      price: 34.95,
      isPublished: false,
      categories: ['Garden & Outdoors'],
    },
    {
      id: '6b7c8d9e-0f1a-4b2c-9d3e-4f5a6b7c8d9e',
      title: 'Beginner Acoustic Guitar',
      description: 'Full size acoustic guitar kit with tuner and picks.',
      price: 129.0,
      isPublished: false,
      categories: ['Music & Instruments'],
    },
  ];

  for (const article of articles) {
    const categoryLinks = article.categories
      .map((name) => categoryByName.get(name))
      .filter((id): id is string => Boolean(id))
      .map((categoryId) => ({ categoryId }));

    await prisma.article.upsert({
      where: { id: article.id },
      update: {
        title: article.title,
        description: article.description,
        price: article.price,
        isPublished: article.isPublished,
        userId,
        categories: {
          deleteMany: {},
          create: categoryLinks,
        },
      },
      create: {
        id: article.id,
        title: article.title,
        description: article.description,
        price: article.price,
        isPublished: article.isPublished,
        userId,
        categories: {
          create: categoryLinks,
        },
      },
    });
  }
};

async function main() {
  const {
    values: { environment },
  } = parseArgs({ options });
  console.log('Start seeding...', environment);

  switch (environment) {
    case 'development':
      /** data for your development */
      await categoriesSeed();
      {
        const user = await userSeed();
        await articleSeed(user.id);
      }
      break;
    case 'test':
      /** data for your test environment */
      break;
    case 'production':
      /** data for your production environment */
      break;
    default:
      break;
  }
  console.log('Seeding completed.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
