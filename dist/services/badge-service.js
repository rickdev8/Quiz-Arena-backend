"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeService = void 0;
const HOT_STREAK_THRESHOLD = 5;
const BRAIN_POWER_THRESHOLD = 1000;
const SPEED_DEMON_MS_PER_QUESTION = 8000;
const TOP_10_SIZE = 10;
class BadgeService {
    calculate(game, existingPlayers) {
        const badges = [];
        badges.push("rookie");
        if (game.bestStreak >= HOT_STREAK_THRESHOLD) {
            badges.push("hot_streak");
        }
        if (game.timeTakenMs !== null && game.totalQuestions > 0) {
            const avgMsPerQuestion = game.timeTakenMs / game.totalQuestions;
            if (avgMsPerQuestion <= SPEED_DEMON_MS_PER_QUESTION) {
                badges.push("speed_demon");
            }
        }
        if (game.points >= BRAIN_POWER_THRESHOLD) {
            badges.push("brain_power");
        }
        const allScores = [...existingPlayers.map((p) => p.score), game.points].sort((a, b) => b - a);
        const rank = allScores.indexOf(game.points) + 1;
        if (rank === 1) {
            badges.push("champion");
        }
        if (rank <= TOP_10_SIZE) {
            badges.push("top_10");
        }
        return badges;
    }
}
exports.BadgeService = BadgeService;
