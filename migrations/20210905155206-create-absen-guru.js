'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AbsenGurus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      siswa_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Siswas',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      jam_hadir: {
        type: Sequelize.STRING
      },
      pegawai_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Pegawais',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      kehadiran: {
        type: Sequelize.STRING
      },
      keterangan: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AbsenGurus');
  }
};