import db from "../models"; // db tự động biết ở model
const bcrypt = require("bcrypt");
export const createUserServices = ({ firstName, lastName, password, email }) =>
  new Promise(async (resolve, reject) => {
    try {
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

export const getAllUserServices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Users.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"], // mún ẩn
        },
        // include: [
        //   {
        //     model: db.Role,
        //     as: "role",
        //     attributes: {
        //       exclude: ["createdAt", "updatedAt"],
        //     },
        //   },
        // ],
      });
      const roles = response.map((role) => role.toJSON());
      resolve({
        success: true,
        data: roles,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOneUserServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Users.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      resolve({
        success: true,
        data: response.dataValues,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateUserServices = (id, body) =>
  new Promise(async (resolve, reject) => {
    try {
      // chỉ cập nhật theo các trường của userInfoNew trên user gốc, phần còn lại ko ảnh hưởng
      await db.Users.update(body, {
        where: { id }, // nếu đúng id thì sẽ cập nhật theo userInfoNew
      });
      resolve({
        success: true,
        message: `Role updated successfully`,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteUserServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Users.destroy({
        where: { id },
      });
      resolve({
        success: response > 0 ? true : false,
        message: `Delete role successfully`,
      });
    } catch (error) {
      reject(error);
    }
  });
