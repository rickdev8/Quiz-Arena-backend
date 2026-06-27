import { prisma } from "../lib/prisma-lib";

export class UserRepository {
  async create(data: any) {
    const user = await prisma.user.create({
      data: {
        nick: data.nick,
        score: data.score,
        badges: data.badges ?? [],
        level: data.level
      },
    });

    return user;
  }

  async findByNick(nick: string) {
    return await prisma.user.findUnique({
      where: {
        nick,
      },
    });
  }

  async findAll() {
    const users = await prisma.user.findMany({
      orderBy: {
        score: "desc",
      },
    });

    return users.map((user, index) => ({
      ...user,
      rank: index + 1,
    }));
  }

 
  async findAllScores() {
    const users = await prisma.user.findMany({
      select: {
        score: true,
      },
    });

    return users;
  }
}