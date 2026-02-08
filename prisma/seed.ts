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
      isPublished: true,
      categories: ['Garden & Outdoors'],
    },
    {
      id: '6b7c8d9e-0f1a-4b2c-9d3e-4f5a6b7c8d9e',
      title: 'Beginner Acoustic Guitar',
      description: 'Full size acoustic guitar kit with tuner and picks.',
      price: 129.0,
      isPublished: true,
      categories: ['Music & Instruments'],
    },
    {
      id: '718de8bf-f6ea-4662-a4c4-f6759049ff28',
      title: 'Nimbus Smartwatch S2',
      description: 'Slim fitness smartwatch with GPS and 7-day battery.',
      price: 199.99,
      isPublished: true,
      categories: ['Electronics', 'Sports & Outdoors'],
    },
    {
      id: '65c5fc50-1200-4344-b4f8-8c1a7cc4803a',
      title: 'Comet USB-C Dock 12-in-1',
      description: 'All-in-one dock with HDMI, Ethernet, and USB ports.',
      price: 89.5,
      isPublished: true,
      categories: ['Electronics'],
    },
    {
      id: '9d5690a8-3880-41ae-a4ef-3aaad6007551',
      title: 'Paperlight E-Reader Sleeve',
      description: 'Padded sleeve with pocket for charger and stylus.',
      price: 24.0,
      isPublished: true,
      categories: ['Books'],
    },
    {
      id: '900b4f39-0a03-4e36-ab33-5eba8abbc443',
      title: 'Maplewood Cutting Board Set',
      description: 'Two-board set with juice groove and grip corners.',
      price: 41.75,
      isPublished: true,
      categories: ['Home & Kitchen'],
    },
    {
      id: '27c86214-4260-4058-b7cc-6eee61841579',
      title: 'Canyon Trekking Poles',
      description: 'Lightweight adjustable poles with cork grips.',
      price: 58.0,
      isPublished: true,
      categories: ['Sports & Outdoors'],
    },
    {
      id: 'a28a18c2-21cd-49d2-ab28-4a074f45f6be',
      title: 'Breeze Linen T-Shirt',
      description: 'Breathable linen tee with relaxed fit.',
      price: 32.0,
      isPublished: true,
      categories: ['Clothing'],
    },
    {
      id: '74c5e02d-4c01-4d8c-826b-2ababbb0143d',
      title: 'Evergreen Herb Planter Kit',
      description: 'Indoor herb kit with pots, seeds, and markers.',
      price: 27.25,
      isPublished: true,
      categories: ['Garden & Outdoors', 'Home & Kitchen'],
    },
    {
      id: '9b8dd7c6-c89c-4588-aa4e-96b302e0b315',
      title: 'Aurora Bluetooth Speaker',
      description: 'Compact speaker with deep bass and 12h playtime.',
      price: 64.99,
      isPublished: true,
      categories: ['Electronics'],
    },
    {
      id: 'b501a845-669c-4d17-84d2-6feec1322c79',
      title: 'Studio Monitor Headphones',
      description: 'Closed-back headphones tuned for accurate mixing.',
      price: 149.0,
      isPublished: true,
      categories: ['Music & Instruments', 'Electronics'],
    },
    {
      id: 'ae5d0771-2261-4d3d-88f8-8b1417933302',
      title: 'Solo Chef Cast-Iron Skillet',
      description: 'Pre-seasoned 10-inch skillet with pour spouts.',
      price: 36.5,
      isPublished: true,
      categories: ['Home & Kitchen'],
    },
    {
      id: '1a10b925-307d-407d-bbed-328524fab912',
      title: 'City Cyclist Daypack',
      description: 'Water-resistant backpack with helmet strap.',
      price: 74.0,
      isPublished: true,
      categories: ['Clothing', 'Sports & Outdoors'],
    },
    {
      id: 'efa6bf8d-b5ac-4d10-a1ca-d0e45b762fd5',
      title: 'Pocket Field Guide: Birds',
      description: 'Portable bird guide with color photos and notes.',
      price: 18.95,
      isPublished: true,
      categories: ['Books'],
    },
    {
      id: '44265447-4622-43aa-b0cf-64909db398c1',
      title: 'Skyline Yoga Mat Pro',
      description: 'Non-slip mat with alignment markers.',
      price: 49.0,
      isPublished: true,
      categories: ['Sports & Outdoors'],
    },
    {
      id: 'c11f1f95-99ce-4b56-9c69-90a6e04a2a77',
      title: 'Sable Denim Jacket',
      description: 'Classic denim jacket with brushed lining.',
      price: 92.0,
      isPublished: true,
      categories: ['Clothing'],
    },
    {
      id: 'fca9f609-e986-4590-b90f-d59570ad7d15',
      title: 'Quartz Kitchen Timer',
      description: 'Magnetic timer with loud alarm and backlight.',
      price: 14.5,
      isPublished: true,
      categories: ['Home & Kitchen'],
    },
    {
      id: 'a9e12b70-2cd8-49ba-9275-0e042d8f8c75',
      title: 'Canvas Artist Tote',
      description: 'Roomy tote with interior pockets and zipper.',
      price: 39.0,
      isPublished: true,
      categories: ['Clothing'],
    },
    {
      id: '077ff759-c701-4caa-a6e8-e179cecc188c',
      title: 'Orbit Wireless Charging Pad',
      description: 'Fast charger with LED status ring.',
      price: 29.99,
      isPublished: true,
      categories: ['Electronics'],
    },
    {
      id: '23107b1d-75bf-4a1b-8cdb-bc5ac581e280',
      title: 'Lakeside Picnic Blanket',
      description: 'Water-resistant blanket with carrying handle.',
      price: 44.0,
      isPublished: true,
      categories: ['Sports & Outdoors'],
    },
    {
      id: '10d544ab-5537-463b-b879-f5107016f827',
      title: 'Seed-to-Supper Cookbook',
      description: 'Seasonal recipes with garden planning tips.',
      price: 26.0,
      isPublished: true,
      categories: ['Books', 'Home & Kitchen'],
    },
    {
      id: '0c17c7c2-b8b4-4ec9-845e-d72a95b993a3',
      title: 'Garden Drip Irrigation Kit',
      description: 'DIY kit with tubing, emitters, and connectors.',
      price: 52.5,
      isPublished: true,
      categories: ['Garden & Outdoors'],
    },
    {
      id: 'b7e6616b-296f-447e-b6fd-7dc019c3c0df',
      title: 'Echo Ukulele Starter Pack',
      description: 'Soprano ukulele with tuner and songbook.',
      price: 68.0,
      isPublished: true,
      categories: ['Music & Instruments'],
    },
    {
      id: '74cb870d-b278-4a95-b2d2-396e2f8f7591',
      title: 'Studio USB Microphone',
      description: 'Plug-and-play condenser mic with pop filter.',
      price: 79.99,
      isPublished: true,
      categories: ['Music & Instruments', 'Electronics'],
    },
    {
      id: '89638059-3518-4f56-8480-3f672ef896f4',
      title: 'Night Owl Desk Organizer',
      description: 'Stackable organizer with tray and pen cups.',
      price: 22.0,
      isPublished: true,
      categories: ['Home & Kitchen'],
    },
    {
      id: 'fa8eef5f-3786-4720-93e8-3da67e4e7fc2',
      title: 'Trailblazer Hiking Socks (3-Pack)',
      description: 'Cushioned merino blend socks for long hikes.',
      price: 28.0,
      isPublished: true,
      categories: ['Clothing', 'Sports & Outdoors'],
    },
    {
      id: '27eb5c0f-0db0-4805-a49b-6ffd890649da',
      title: 'Minimalist Book Stand',
      description: 'Adjustable stand for cookbooks and tablets.',
      price: 21.5,
      isPublished: true,
      categories: ['Books', 'Home & Kitchen'],
    },
    {
      id: 'd8c65d06-8c21-4e65-b0bc-3089b77cfb74',
      title: 'Cedar Raised Planter Box',
      description: 'Weather-resistant planter for patio gardens.',
      price: 84.0,
      isPublished: true,
      categories: ['Garden & Outdoors'],
    },
    {
      id: 'c79ecfd9-a7e0-4719-ad4d-57373b56a519',
      title: 'Glide Running Belt',
      description: 'Slim belt with zip pocket and bottle loops.',
      price: 19.99,
      isPublished: true,
      categories: ['Sports & Outdoors'],
    },
    {
      id: '0297eca2-77f0-4a02-af20-6d231c1f1624',
      title: 'Atlas Travel Journal',
      description: 'Hardcover journal with map pages and prompts.',
      price: 17.0,
      isPublished: true,
      categories: ['Books'],
    },
    {
      id: '579f4570-4df3-411d-83f6-317df2c382e5',
      title: 'Waveform Guitar Pedal',
      description: 'Analog overdrive with tone and gain controls.',
      price: 109.0,
      isPublished: true,
      categories: ['Music & Instruments'],
    },
    {
      id: 'c4e932d7-6961-465c-99a3-3bf72c6d331d',
      title: 'Lumen Bedside Lamp',
      description: 'Dimmable lamp with USB charging port.',
      price: 45.0,
      isPublished: true,
      categories: ['Home & Kitchen'],
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
        user: userId,
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
        user: userId,
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
        // Zitadel admin id
        await articleSeed('357102073475039235');
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
