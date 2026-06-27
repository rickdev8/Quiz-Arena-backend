"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const prisma_lib_1 = require("../lib/prisma-lib");
class UserRepository {
    async create(data) {
        const user = await prisma_lib_1.prisma.user.create({
            data: {
                nick: data.nick,
                score: data.score,
                badges: data.badges ?? [],
                level: data.level
            },
        });
        return user;
    }
    async findByNick(nick) {
        return await prisma_lib_1.prisma.user.findUnique({
            where: {
                nick,
            },
        });
    }
    async findAll() {
        const users = await prisma_lib_1.prisma.user.findMany({
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
        const users = await prisma_lib_1.prisma.user.findMany({
            select: {
                score: true,
            },
        });
        return users;
    }
}
exports.UserRepository = UserRepository;
