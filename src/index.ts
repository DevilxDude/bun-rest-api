import { Elysia, t } from "elysia";
import { signinDTO } from "./models";

const app = new Elysia();

const user = new Elysia().group("/user", (app) =>
  app
    .post("/sign-in", ({ body }) => body, {
      body: signinDTO,
      response: signinDTO,
    })
    .post("/sign-up", () => "Signup route")
    .post("/profile", () => "Profile ROuter")
    .get("/:id", () => "Get User by id Route")
);

const products = new Elysia().group("/products", (app) =>
  app
    .post("/", () => "Create Product")
    .get(
      "/:id",
      ({ params: { id } }) => {
        return {
          id,
        };
      },
      {
        params: t.Object({
          id: t.Numeric(),
        }),
      }
    )
    .put("/:id", () => "Update Product by ID")
    .delete("/:id", () => "Delete Product by iD")
);

app.group("/v1", (app) =>
  app
    .get("/", () => "Version 1")
    .use(user)
    .use(products)
);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
