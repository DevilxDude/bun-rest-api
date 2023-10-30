import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Bun Dev, I am gonna build RESTFUL APIs")
  .get("/post/:id", ({ params: { id } }) => {
    // return `Hello ID: ${id}`;
    return { id, title: "Learn bun" };
  })
  .post("/post", ({ body, set }) => {
    set.status = 201;
    return body;
  })
  .get("/track/*", () => {
    return {
      tracks: ["Dancing Feat", "Sam I", "Animals"],
    };
  })
  .get("/tracks", () => {
    return new Response(
      JSON.stringify({
        tracks: ["Dancing Feat", "Sam I", "Animals"],
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      }
    );
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
