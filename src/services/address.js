import db from "../models";
export const createAddressServices = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Addresses.findOrCreate({
        where: {
          address: body.address,
        },
        defaults: {
          address: body.address,
          userID: body.id,
          phoneNumber: body.phoneNumber,
        },
      });
      resolve({
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Tạo Address thành công"
            : "Address đã tồn tại",
      });
    } catch (error) {
      console.log(error, "44");
      reject(error);
    }
  });

export const getAllAddressServices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Addresses.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"], // bỏ những cái không cần thiết
        },
      });
      const addresses = response.map((address) => address.dataValues);
      resolve({
        success: true,
        data: addresses,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOneAddressServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Addresses.findOne({
        where: { userID: id },
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

export const updateAddressServices = ({ id, body }) =>
  new Promise(async (resolve, reject) => {
    const ProductCredentials = {
      ...(body.Product && { Product: body.Product }),
    };
    try {
      await db.Product.update(ProductCredentials, {
        where: { id },
      });
      resolve({
        success: true,
        message: `Product cập nhật thành công`,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteAddressServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Addresses.destroy({
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
