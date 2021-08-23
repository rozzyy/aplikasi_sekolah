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
        status: 'Ibu',
        alamat: 'Jalan Cengkeh No. 1',
        no_telepon: '081232345456',
        userId: 2,
        siswaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Jhoni",
        tahun_lahir: new Date("1980"),
        pendidikan: "SMA",
        pekerjaan: "Wiraswasta",
        penghasilan: "0",
        nik: "1232343454567890",
        status: 'Ayah',
        alamat: 'Jalan Cengkeh No. 1',
        no_telepon: '081232345456',
        userId: 2,
        siswaId: 1,
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
