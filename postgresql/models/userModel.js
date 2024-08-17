const { models } = require("./index");

module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.users.create({
        ...body,
      });
      return {
        response: user,
      };
    } catch (error) {
      console.log("Error in Model", error);
      return {
        error: error,
      };
    }
  },
  getAllUser: async () => {
    try {
      const users = await models.users.findAll({
        attributes: {
          exclude: ["password"],
        },
      });
      return {
        response: users,
      };
    } catch (error) {
      console.log("Error in Model", error);
      return {
        error: error,
      };
    }
  },
};
