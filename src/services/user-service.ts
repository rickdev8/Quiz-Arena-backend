import { UserRepository } from "../repositories/user-repositorie";
import { DefineLevel } from "../utils/define-level";
import { BadgeService, BadgeGameData } from "./badge-service";

export class UserService {
  async create(data: any) {
    const userRepository = new UserRepository()
    const badgeService = new BadgeService()

    const { nick, points, bestStreak, timeTakenMs, totalQuestions } = data;

    if (!nick) {
      throw new Error("Nick é obrigatório");
    }

  
    const existingPlayers = await userRepository.findAllScores()

    const gameData: BadgeGameData = {
      points,
      bestStreak: bestStreak ?? 0,
      timeTakenMs: timeTakenMs ?? null,
      totalQuestions: totalQuestions ?? 0,
    }

    const badges = badgeService.calculate(gameData, existingPlayers)

    const user = {
      nick,
      score: points,
      level: DefineLevel(points),
      badges,
    };

    await userRepository.create(user)

    return user;
  }

  async listPlayers() {
    const userRepository = new UserRepository()

    const users = await userRepository.findAll()

    console.log(users)

    return users
  }
}