import db from "../models"; // db tự động biết ở model

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
        message: `Cập nhật thành công`,
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
