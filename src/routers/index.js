const roleRouter = require("./roles");
const usersRouter = require("./users");
const addressRouter = require("./address");
const authRouter = require("./auth");
const productsRouter = require("./products");
const brandsRouter = require("./brands");
const categoryRouter = require("./categories");

function route(app) {
  app.use("/roles", roleRouter);
  app.use("/users", usersRouter);
  app.use("/address", addressRouter);
  app.use("/auth", authRouter);
  app.use("/brands", brandsRouter);
  app.use("/categories", categoryRouter);
  app.use("/products", productsRouter);
}
module.exports = route;
