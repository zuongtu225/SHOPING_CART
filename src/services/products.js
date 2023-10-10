import db from "../models";

export const createProductsServices = (products) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Products.create({
        defaults: { products },
      });
      resolve({
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Tạo Product thành công"
            : "Product đã tồn tại",
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });

export const getAllProductsServices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Products.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"], // mún ẩn
        },
      });
      const products = response.map((item) => item.toJSON());
      resolve({
        success: true,
        data: products,
      });
    } catch (error) {
      reject(error);
    }
  });

// export const getOneProductsServices = ({ id }) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const response = await db.Product.findOne({
//         where: { id },
//         attributes: {
//           exclude: ["createdAt", "updatedAt"],
//         },
//       });
//       resolve({
//         success: true,
//         data: response.dataValues,
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });

// export const updateProductsServices = ({ id, body }) =>
//   new Promise(async (resolve, reject) => {
//     const ProductCredentials = {
//       ...(body.Product && { Product: body.Product }),
//     };
//     try {
//       await db.Product.update(ProductCredentials, {
//         where: { id },
//       });
//       resolve({
//         success: true,
//         message: `Product cập nhật thành công`,
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });

// export const deleteProductsServices = ({ id }) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const response = await db.Product.destroy({
//         where: { id },
//       });
//       resolve({
//         success: response > 0 ? true : false,
//         message: `Xóa thành công`,
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });
