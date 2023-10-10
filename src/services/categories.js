import db from "../models";

export const createCategoryServices = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Categories.findOrCreate({
        where: { title: data.title },
        defaults: { title: data.title },
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

export const getAllCategoriesServices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Categories.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      const Category = response.map((item) => item.toJSON());
      resolve({
        success: true,
        data: Category,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOneCategoryServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Categories.findOne({
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

export const updateCategoryServices = (id, title) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Categories.update(title, {
        where: { id },
      });
      console.log(response, "<<");
      resolve({
        success: true,
        message: `Product cập nhật thành công`,
      });
    } catch (error) {
      reject(error);
    }
  });
export const deleteCategoryServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Categories.destroy({
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
