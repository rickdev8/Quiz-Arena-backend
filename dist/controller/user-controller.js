"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user-service");
class UserController {
    async create(request, reply) {
        const userService = new user_service_1.UserService();
        const user = await userService.create(request.body);
        console.log(request.body);
        return reply.status(201).send(user);
    }
    async listPlayers(request, reply) {
        const userService = new user_service_1.UserService();
        const users = await userService.listPlayers();
        return reply.status(201).send(users);
    }
}
exports.UserController = UserController;
