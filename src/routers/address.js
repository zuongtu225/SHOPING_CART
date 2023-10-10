const express = require("express");
const addressRouter = express.Router();
const controllers = require("../controllers");
const checkAuthentication = require("../middlewares/checkAuth");

addressRouter.get("/", controllers.getAllAddress);
addressRouter.get("/me", [checkAuthentication], controllers.getOneAddress);
addressRouter.post("/create", [checkAuthentication], controllers.createAddress); // khi có PK Là User thì phải check token rồi chuyển user sang controllers
addressRouter.put("/update", [checkAuthentication], controllers.updateAddress);
addressRouter.delete(
  "/delete",
  [checkAuthentication],
  controllers.deleteAddress
);

module.exports = addressRouter;
