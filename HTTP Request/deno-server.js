import { Server } from "https://deno.land/std@0.175.0/http/server.ts";
const handler = () => {
  return new Response("Deno! :)");
};
const server = new Server({ handler });
const listener = Deno.listen({ port: 4505 });
await server.serve(listener);
