import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { UserController } from "../controller/user-controller";

export async function Routes(app: FastifyInstance) {
  const userController = new UserController();

  app.post("/post-user", async (request: FastifyRequest<{ Body: any }>, reply: FastifyReply) => {
    await userController.create(request, reply);
    console.log("user criado");
  });

  app.get("/listen-users", async (request: FastifyRequest<{ Body: any }>, reply: FastifyReply) => {
    return await userController.listPlayers(request, reply);
  });

}