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
        status_pegawai: 'Guru PNS',
        jabatan: 'guru',
        nip: '1029384' + i,
        nuptk: '123234343454' + i,
        tmpt_lahir: 'Medan',
        tgl_lahir: faker.date.past(),
        jenis_kelamin: 'Laki-laki',
        agama: 'Islam',
        alamat: faker.address.streetAddress(),
        rt: '01',
        rw: '02',
        kelurahan: 'Padang Hilir',
        kecamatan: 'Padang Baja',
        kodepos: faker.address.zipCode(),
        hp: '08123434423' + i,
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    for (let i = 0; i < 30; i++) {
      dummyJSON.push({
        nama: faker.name.findName(),
        status_pegawai: 'Pegawai TU',
        jabatan: 'staff',
        nip: '1029385' + i,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    
    await queryInterface.bulkInsert('Pegawais', dummyJSON, {})

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Pegawais', null, {});
  }
};
