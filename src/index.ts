import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Bun Dev, I am gonna build RESTFUL APIs")
  .get("/post/:id", ({ params: { id } }) => {
    // return `Hello ID: ${id}`;
    return { id, title: "Learn bun" };
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
