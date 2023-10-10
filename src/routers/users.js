const express = require("express");
const userRouter = express.Router();
const controllers = require("../controllers");
const uploadCloud = require("../middlewares/upload");
const checkAuthentication = require("../middlewares/checkAuth");

userRouter.get("/", controllers.getAllUsers);
userRouter.get("/me", [checkAuthentication], controllers.getOneUser);

userRouter.put(
  "/update",
  [checkAuthentication],
  uploadCloud.single("avatar"),
  controllers.updateUser
);

userRouter.delete("/delete", [checkAuthentication], controllers.deleteUser);

module.exports = userRouter;
