const express = require("express");
const userRouter = express.Router();
const upload = require("../middlewares/upload");

const controllers = require("../controllers");

userRouter.get("/", controllers.getAllUsers);
userRouter.get("/:id", controllers.getOneUser);
userRouter.post("/create", controllers.createUser);
userRouter.put("/:id", upload.single("avatar"), controllers.updateUser);
userRouter.delete("/:id", controllers.deleteUser);

module.exports = userRouter;
