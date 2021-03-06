'use strict';

const bcrypt = require('bcrypt')

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
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync("12345678", salt)
   return queryInterface.bulkInsert("Users", [
     {
       nama: "Rozzy Rahmanda",
       no_induk: "12345678",
       email: "rozzyrahmanda0@gmail.com",
       password: hash,
       createdAt: new Date(),
       updatedAt: new Date(),
       roleId: 4
     },
     {
      nama: "Farah",
      no_induk: "123456789",
      email: "farah@gmail.com",
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 3
    }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Users', null, {})
  }
};
