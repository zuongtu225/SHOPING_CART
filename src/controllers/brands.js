import * as handleError from "../middlewares/handleError";
import * as services from "../services";

export const createBrand = async (req, res) => {
  try {
    const response = await services.createBrandsServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};

export const getAllBrands = async (req, res) => {
  try {
    const response = await services.getAllBrandsServices();
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const getOneBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.getOneBrandsServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const updateBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.updateBrandsServices({ id, ...req.body });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const deleteBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.deleteBrandsServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
