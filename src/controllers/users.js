import * as handleError from "../middlewares/handleError";
import * as services from "../services";

export const createUser = async (req, res) => {
  try {
    const response = await services.createUserServices(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return handleError.internalServerError(res);
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const response = await services.getAllUserServices();
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.getOneUserServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const avatar = req.file.path;
  try {
    const response = await services.updateUserServices(id, {
      ...req.body,
      avatar,
    });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.deleteUserServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
