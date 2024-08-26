var routes = require("express").Router();
const {
  createStudent,
  getAll,
  getUser,
  deleteUsers,
} = require("../controllers/studentController");
const {
  createStudentSchema,
  getUserName,
} = require("../validations/studentValidation");

routes.get("/getStudent", getAll);
routes.get("/getUsers", getUserName, getUser);
routes.post("/createStudent", createStudentSchema, createStudent);
routes.delete("/deleteStudent", getUserName, deleteUsers);

module.exports = routes;
