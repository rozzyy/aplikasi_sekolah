const faker = require('faker')

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
     let dummyJSON = []
     for (let i = 0; i < 30; i++) {
       dummyJSON.push({
         nama: faker.name.findName(),
         nisn: '1029370' + i,
         nipd: '1890' + i,
         rombel: 'X-TKJ-3',
         jenis_kelamin: 'laki-laki',
         createdAt: new Date(),
         updatedAt: new Date()
       })
     }
     return queryInterface.bulkInsert("Siswas", dummyJSON, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Siswas', null, {})
  }
};
