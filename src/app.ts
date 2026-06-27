import fastify from "fastify";
import { Routes } from "./routes";
import cors from "@fastify/cors";

const app = fastify()

app.register(Routes)

app.register(cors, {
    origin: "*",
  });

app.listen({ port: 3001, host: '0.0.0.0' }, () => {
    console.log("Servidor rodando!")
})

export default app;