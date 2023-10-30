import { Elysia } from "elysia";

const app = new Elysia()
  .state({
    version: 1,
    id: 1,
    email: "jane@gmail.com",
  })
  .decorate("getDate", () => Date.now())
  .get("/", () => "Hello Bun Dev, I am gonna build RESTFUL APIs")
  .get("/post/:id", ({ params: { id } }) => {
    // return `Hello ID: ${id}`;
    return { id, title: "Learn bun" };
  })
  .post("/post", ({ body, set, store }) => {
    console.log({ store });

    set.status = 201;
    return body;
  })
  .get("/track/*", () => {
    return {
      tracks: ["Dancing Feat", "Sam I", "Animals"],
    };
  })
  .get("/tracks", ({ store, getDate }) => {
    console.log({ store, date: getDate() });

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
