"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: Sequelize.INTEGER,
      name: Sequelize.TEXT,
      surname: Sequelize.TEXT,
      photo: Sequelize.TEXT,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
