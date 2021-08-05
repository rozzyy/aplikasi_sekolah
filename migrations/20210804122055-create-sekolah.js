'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sekolahs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jenjang: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      notelepon: {
        type: Sequelize.STRING
      },
      web: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      provinsi: {
        type: Sequelize.STRING
      },
      kabkota: {
        type: Sequelize.STRING
      },
      kecamatan: {
        type: Sequelize.STRING
      },
      kelurahan: {
        type: Sequelize.STRING
      },
      dusun: {
        type: Sequelize.STRING
      },
      rt_rw: {
        type: Sequelize.STRING
      },
      tgl_berdiri: {
        type: Sequelize.DATE
      },
      akreditas: {
        type: Sequelize.STRING
      },
      kurikulum: {
        type: Sequelize.STRING
      },
      npsn: {
        type: Sequelize.STRING
      },
      luas_tanah: {
        type: Sequelize.STRING
      },
      status_bos: {
        type: Sequelize.BOOLEAN
      },
      penyelenggaraan: {
        type: Sequelize.STRING
      },
      jam_masuk: {
        type: Sequelize.STRING
      },
      jam_pulang: {
        type: Sequelize.STRING
      },
      lama_belajar: {
        type: Sequelize.STRING
      },
      internet: {
        type: Sequelize.BOOLEAN
      },
      perpustakaan: {
        type: Sequelize.BOOLEAN
      },
      batas_spp: {
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
    await queryInterface.dropTable('Sekolahs');
  }
};