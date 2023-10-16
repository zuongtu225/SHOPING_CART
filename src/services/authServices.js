import {
  registerRepository,
  loginUserRepository,
} from "../repositories/authRepository";

export const registerServices = async (dataUser) => {
  try {
    const response = await registerRepository(dataUser);
    console.log(response, "ADSA");
    return {
      success: response[1] === true ? true : false,
      message:
        response[1] === true
          ? "Tạo người mới thành công"
          : "Người dùng đã tồn tại",
    };
  } catch (error) {
    return error;
  }
};
export const loginUserServices = async (dataUser) => {
  try {
    const token = await loginUserRepository(dataUser);
    return {
      success: token !== null ? true : false,
      accessToken: token !== null ? token : "Nhập sai mật khẩu",
    };
  } catch (error) {
    return error;
  }
};
