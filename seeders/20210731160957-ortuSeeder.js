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
    return queryInterface.bulkInsert("Ortus", [
      {
        nama: "Farah",
        tahun_lahir: new Date("1980"),
        pendidikan: "SMA",
        pekerjaan: "Ibu Rumah Tangga",
        penghasilan: "0",
        nik: "1232343454567890",
        status_wali: 'Ibu',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
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
     return queryInterface.bulkDelete('Ortus', null, {})
  }
};
