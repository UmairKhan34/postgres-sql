const student = [];
const {
  createUser,
  getAllUser,
  getUser,
  deleteUser,
} = require("../models/userModel");
const responseHandler = require("../responseHandler.js");
const { getRole } = require("../models/commonModels.js");
module.exports = {
  createStudent: async (req, res) => {
    try {
      const role = await getRole(req.body);
      if (role.error) {
        return res.send({
          error: role.error,
        });
      }
      console.log(role.response.dataValues);
      delete req.body.role;
      req.body.roleId = role.response.dataValues.roleId;
      const user = await createUser(req.body);
      responseHandler(user, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await getAllUser();
      responseHandler(users, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getUser: async (req, res) => {
    try {
      const users = await getUser(req.query);
      responseHandler(users, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteUsers: async (req, res) => {
    try {
      const user = await deleteUser(req.query);
      responseHandler(user, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
