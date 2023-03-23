import { Book, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const postData: Book[] = [
  {
    id: 'ca1c82db-2e8b-4957-a687-1be3660f9876',
    name: 'Book1',
    outline: 'おもしろい話です',
    author: '田中 太郎',
    publisher: 'A社',
    category: 'novel',
    price: 1540,
    releasedAt: '2023-01-01',
    createdAt: new Date('2023-03-01T00:00:00+09:00'),
    updatedAt: new Date('2023-03-01T00:00:00+09:00'),
  },
  {
    id: 'f3a63736-07a2-4d94-9bb4-68a039fb0ecc',
    name: 'Book2',
    outline: '楽しい話です',
    author: '山田 太郎',
    publisher: 'B社',
    category: 'novel',
    price: 1540,
    releasedAt: '2023-01-02',
    createdAt: new Date('2023-03-02T00:00:00+09:00'),
    updatedAt: new Date('2023-03-02T00:00:00+09:00'),
  },
  {
    id: '43dd7b47-d2b5-48e8-94d3-22e4d1d21c21',
    name: 'Book3',
    outline: 'ためになる話です',
    author: '鈴木 太郎',
    publisher: 'A社',
    category: 'business',
    price: 1980,
    releasedAt: '2023-01-03',
    createdAt: new Date('2023-03-03T00:00:00+09:00'),
    updatedAt: new Date('2023-03-03T00:00:00+09:00'),
  },
];

const doBookSeed = async () => {
  const posts = [];
  for (const post of postData) {
    const createPosts = prisma.book.create({
      data: post,
    });
    posts.push(createPosts);
  }
  return await prisma.$transaction(posts);
};

const main = async () => {
  console.log('Start seeding ...');
  await doBookSeed();
  console.log('Seeding finished.');
};

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
