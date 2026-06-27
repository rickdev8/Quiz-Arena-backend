"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repositorie_1 = require("../repositories/user-repositorie");
const define_level_1 = require("../utils/define-level");
const badge_service_1 = require("./badge-service");
class UserService {
    async create(data) {
        const userRepository = new user_repositorie_1.UserRepository();
        const badgeService = new badge_service_1.BadgeService();
        const { nick, points, bestStreak, timeTakenMs, totalQuestions } = data;
        if (!nick) {
            throw new Error("Nick é obrigatório");
        }
        const existingPlayers = await userRepository.findAllScores();
        const gameData = {
            points,
            bestStreak: bestStreak ?? 0,
            timeTakenMs: timeTakenMs ?? null,
            totalQuestions: totalQuestions ?? 0,
        };
        const badges = badgeService.calculate(gameData, existingPlayers);
        const user = {
            nick,
            score: points,
            level: (0, define_level_1.DefineLevel)(points),
            badges,
        };
        await userRepository.create(user);
        return user;
    }
    async listPlayers() {
        const userRepository = new user_repositorie_1.UserRepository();
        const users = await userRepository.findAll();
        console.log(users);
        return users;
    }
}
exports.UserService = UserService;
