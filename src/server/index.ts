import Hapi, { Request } from "@hapi/hapi";
import type { Message } from "../data-types/message";
import { getMessageById, loadChat, newMessage } from "./api";

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: "localhost",
  });
  server.route({
    method: "GET",
    path: "/",
    handler: async (request: any, h: any) => {
      const messages = await loadChat();
      return JSON.stringify(messages);
    },
  });
  server.route({
    method: "GET",
    path: "/receive/{id}",
    handler: (request: Request, h: any) => {
      const id = request.params.id;
      const message = getMessageById(id);
      return message;
    },
  });
  server.route({
    method: "PUT",
    path: "/dispatch",
    handler: async (request: Request, h: any) => {
      const message = request.payload as Message;
      const id = await newMessage(message);
      return JSON.stringify({ id });
    },
  });
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
