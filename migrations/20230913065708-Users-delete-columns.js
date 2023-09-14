'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users','firstName')
  },

  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users','lastName')
  },

  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users','email')
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('Users','firstName')
  },
  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('Users','lastName')
  },
  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('Users','email')
  }
};
