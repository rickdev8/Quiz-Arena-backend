import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../services/user-service";


export class UserController {
  async create(request: FastifyRequest<{ Body: any }>, reply: FastifyReply) {
    const userService = new UserService();

    const user = await userService.create(request.body);

    console.log(request.body)

    return reply.status(201).send(user);
  }

  async listPlayers(request: FastifyRequest<{ Body: any }>, reply: FastifyReply){
    const userService = new UserService();

    const users = await userService.listPlayers();

    return reply.status(201).send(users);
  }

}