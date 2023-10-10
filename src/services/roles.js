import db from "../models";
export const createRoleServices = ({ roleRequest }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Roles.findOrCreate({
        where: { role: roleRequest },
        defaults: { role: roleRequest },
      });
      resolve({
        success: response[1] === true ? true : false,
        message:
          response[1] === true ? "Tạo Role thành công" : "Role is available",
      });
    } catch (e) {
      reject(e);
    }
  });

export const getAllRoleServices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Roles.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"], // mún ẩn
        },
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

export const getOneRoleServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Roles.findOne({
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

export const updateRoleServices = ({ id, body }) =>
  new Promise(async (resolve, reject) => {
    try {
      await db.Roles.update(body, {
        where: { id },
      });
      resolve({
        success: true,
        message: `Role cập nhật thành công`,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteRoleServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Roles.destroy({
        where: { id },
      });
      resolve({
        success: response > 0 ? true : false,
        message: `Xóa thành công`,
      });
    } catch (error) {
      reject(error);
    }
  });
