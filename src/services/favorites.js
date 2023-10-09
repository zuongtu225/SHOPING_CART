import db from "../models"; // db tự động biết ở model
export const createFavoriteServices = ({ favorite }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Favorites.findOrCreate({
        where: { favorite },
        defaults: { favorite },
      });
      resolve({
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Create role successfully"
            : "Role is available",
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });

export const getAllFavoriteServices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Favorites.findAll();
      const favorites = response.map((item) => item.toJSON());
      resolve({
        success: true,
        data: favorites,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOneFavoriteServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Favorites.findOne({
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

export const deleteFavoriteServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Favorites.destroy({
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
