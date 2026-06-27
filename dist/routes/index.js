"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = Routes;
const user_controller_1 = require("../controller/user-controller");
async function Routes(app) {
    const userController = new user_controller_1.UserController();
    app.post("/post-user", async (request, reply) => {
        await userController.create(request, reply);
        console.log("user criado");
    });
    app.get("/listen-users", async (request, reply) => {
        return await userController.listPlayers(request, reply);
    });
}
