import db from "../models";

export const createBrandsServices = (brand) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Brands.findOrCreate({
        where: { title: brand.title },
        defaults: { title: brand.title },
      });
      resolve({
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Tạo Product thành công"
            : "Product đã tồn tại",
      });
    } catch (error) {
      console.log(error, ">>");
      reject(error);
    }
  });

export const getAllBrandsServices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Brands.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      const brands = response.map((item) => item.toJSON());
      resolve({
        success: true,
        data: brands,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOneBrandsServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Brands.findOne({
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

export const updateBrandsServices = ({ id, title }) => console.log(id, title);
// new Promise(async (resolve, reject) => {
//   try {
//     await db.Brands.update(title, {
//       where: { id },
//     });
//     resolve({
//       success: true,
//       message: `Product cập nhật thành công`,
//     });
//   } catch (error) {
//     reject(error);
//   }
// });

export const deleteBrandsServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Brands.destroy({
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
