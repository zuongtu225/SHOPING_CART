const express = require("express");
const roleRouter = express.Router();
const controllers = require("../controllers");

roleRouter.get("/", controllers.getAllRoles);
roleRouter.get("/:id", controllers.getOneRole);
roleRouter.post("/create", controllers.createRole);
roleRouter.put("/:id", controllers.updateRole);
roleRouter.delete("/:id", controllers.deleteRole);

module.exports = roleRouter;
