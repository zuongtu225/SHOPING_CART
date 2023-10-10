import * as services from "../services";
import * as handleError from "../middlewares/handleError";

export const createAddress = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.createAddressServices({ ...req.body, id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const getAllAddress = async (req, res) => {
  try {
    const response = await services.getAllAddressServices();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return handleError.internalServerError(res);
  }
};
export const getOneAddress = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.getOneAddressServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const updateAddress = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.updateBrandsServices({ id, ...req.body });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const deleteAddress = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.deleteAddressServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
