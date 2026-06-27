"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("@fastify/cors"));
const app = (0, fastify_1.default)();
app.register(routes_1.Routes);
app.register(cors_1.default, {
    origin: "*",
});
app.listen({ port: 3001, host: '0.0.0.0' }, () => {
    console.log("Servidor rodando!");
});
exports.default = app;
