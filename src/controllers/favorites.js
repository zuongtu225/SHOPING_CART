import * as services from "../services";

export const createFavorite = async (req, res) => {
  try {
    const response = await services.createFavoriteServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

export const getAllFavorites = async (req, res) => {
  try {
    const response = await services.getAllFavoriteServices();
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

// export const getOneFavorite = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const response = await services.getOneFavoriteServices({ id });
//     return res.status(200).json(response);
//   } catch (error) {
//     return internalServerError(res);
//   }
// };
// export const deleteFavorite = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const response = await services.deleteFavoriteServices({ id });
//     return res.status(200).json(response);
//   } catch (error) {
//     return internalServerError(res);
//   }
// };
