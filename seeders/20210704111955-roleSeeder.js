'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Roles', [
     {
       name: "siswa",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: "ortu",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: "guru",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "staff",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "administrator",
        createdAt: new Date(),
        updatedAt: new Date()
      },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Roles', null, {})
  }
};
