import db from "../models";
const bcrypt = require("bcrypt");
import jwt from "jsonwebtoken";
export const registerServices = (dataUser) =>
  new Promise(async (resolve, reject) => {
    try {
      const { firstName, lastName, password, email } = dataUser;
      const newPassword = await bcrypt.hash(password, 12);
      const response = await db.Users.findOrCreate({
        where: { email },
        defaults: {
          firstName,
          lastName,
          password: newPassword,
          email,
        },
      });
      resolve({
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Tạo người mới thành công"
            : "Người dùng đã tồn tại",
      });
    } catch (error) {
      reject(error);
    }
  });

export const loginUserServices = (dataUser) =>
  new Promise(async (resolve, reject) => {
    try {
      const { email, password } = dataUser;
      const user = await db.Users.findOne({
        where: { email },
      });
      const checkPassword = user && bcrypt.compareSync(password, user.password); // kiểm tra true false
      const token = checkPassword
        ? jwt.sign(
            {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              roleID: user.roleID,
            },
            process.env.ACCESS_TOKEN_SECRET
          )
        : null;

      resolve({
        success: true,
        accessToken: token, // trả token
      });
    } catch (error) {
      reject(error);
    }
  });
