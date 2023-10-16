import db from "../models";
export const getAllUserRepository = async () => {
  const data = await db.Users.findAll({
    include: [
      {
        model: db.Roles,
        as: "roles",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: db.Addresses,
        as: "address",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    ],
    attributes: {
      exclude: ["password", "roleId", "createdAt", "updatedAt"],
    },
  });
  return data;
};

export const getOneUserRepository = async ({ id }) => {
  const data = await db.Users.findOne({
    where: { id },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

export const updateUserRepository = async (id, body) => {
  const response = await db.Users.update(body, {
    where: { id },
  });
  return response;
};
