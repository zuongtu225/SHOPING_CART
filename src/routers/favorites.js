const express = require("express");
const roleRouter = express.Router();

const controllers = require("../controllers");

roleRouter.get("/", controllers.getAllFavorites);
// roleRouter.get("/:id", controllers.getOneFavorite);
// roleRouter.post("/create", controllers.createFavorite);
// roleRouter.delete("/:id", controllers.deleteFavorite);

module.exports = roleRouter;
