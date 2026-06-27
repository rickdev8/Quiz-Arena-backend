import { PrismaClient } from "@prisma/client"; // ou do seu output customizado, se tiver
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

export const prisma = new PrismaClient({ adapter });