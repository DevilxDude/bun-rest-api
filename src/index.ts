import { Elysia } from "elysia";

const app = new Elysia();

app.group("/v1", (app) =>
  app
    .get("/", () => "Version 1")
    .group("/products", (app) =>
      app
        .post("/", () => "Create Product")
        .get("/:id", () => "Get Product by ID")
        .put("/:id", () => "Update Product by ID")
        .delete("/:id", () => "Delete Product by iD")
    )
);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
