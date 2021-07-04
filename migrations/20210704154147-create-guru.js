'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Gurus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      nuptk: {
        type: Sequelize.STRING
      },
      jenis_kelamin: {
        type: Sequelize.STRING
      },
      tmpt_lahir: {
        type: Sequelize.STRING
      },
      tgl_lahir: {
        type: Sequelize.DATE
      },
      nip: {
        type: Sequelize.STRING
      },
      status_pegawai: {
        type: Sequelize.STRING
      },
      jenis_ptk: {
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
      sk_cpns: {
        type: Sequelize.STRING
      },
      tgl_sk: {
        type: Sequelize.DATE
      },
      golongan: {
        type: Sequelize.STRING
      },
      nama_ibu: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      no_kk: {
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
    await queryInterface.dropTable('Gurus');
  }
};