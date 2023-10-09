const roleRouter = require("./roles");
const usersRouter = require("./users");
const favoritesRouter = require("./favorites");

function route(app) {
  app.use("/roles", roleRouter);
  app.use("/users", usersRouter);
  app.use("/favorites", favoritesRouter);
}
module.exports = route;
