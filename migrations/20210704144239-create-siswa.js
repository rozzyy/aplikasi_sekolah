'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Siswas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      nipd: {
        type: Sequelize.STRING
      },
      jenis_kelamin: {
        type: Sequelize.STRING
      },
      nisn: {
        type: Sequelize.STRING
      },
      tmpt_lahir: {
        type: Sequelize.STRING
      },
      tgl_lahir: {
        type: Sequelize.DATE
      },
      nik: {
        type: Sequelize.STRING
      },
      agama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      kelurahan: {
        type: Sequelize.STRING
      },
      kecamatan: {
        type: Sequelize.STRING
      },
      kodepos: {
        type: Sequelize.STRING
      },
      telepon: {
        type: Sequelize.STRING
      },
      hp: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      kelas: {
        type: Sequelize.STRING
      },
      jurusan: {
        type: Sequelize.STRING
      },
      rombel: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Siswas');
  }
};