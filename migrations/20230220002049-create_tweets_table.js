'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('tweets', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      content: Sequelize.STRING(300),
      userId: Sequelize.INTEGER(11),
      createdAt: Sequelize.Date,
      updatedAt: Sequelize.Date
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('tweets');
  }
};
