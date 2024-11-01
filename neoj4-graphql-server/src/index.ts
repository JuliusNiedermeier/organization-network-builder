import { createServer } from "./server";

createServer().then((server) =>
  server.listen().then((info) => console.log(info.url))
);
