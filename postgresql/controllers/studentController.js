const student = [];
const { response, use } = require("../app");
const { createUser, getAllUser } = require("../models/userModel");
const responseHandler = require("../responseHandler.js");
module.exports = {
  createStudent: async (req, res) => {
    try {
      const user = await createUser(req.body);
      responseHandler(user, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getStudent: async (req, res) => {
    try {
      const users = await getAllUser();
      responseHandler(users, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteStudent: (req, res) => {
    try {
      const { username, password } = req.body;
      student.pop({ username, password });
      return res.send({
        response: "Delete Student data",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
