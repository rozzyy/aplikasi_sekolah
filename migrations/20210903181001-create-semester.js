'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Semesters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      tgl_mulai: {
        type: Sequelize.DATE
      },
      tgl_akhir: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      tahun_ajaran_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'TahunAjarans',
          key: 'id'
        },
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Semesters');
  }
};