const { v4: uuid } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("roles", [
      {
        roleId: uuid(),
        role: "Trainee",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: uuid(),
        role: "Instructor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: uuid(),
        role: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
};
