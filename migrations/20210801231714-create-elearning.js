'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Elearnings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      link: {
        type: Sequelize.STRING
      },
      judul: {
        type: Sequelize.STRING
      },
      file: {
        type: Sequelize.STRING
      },
      mapel: {
        type: Sequelize.STRING
      },
      tingkatanId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Tingkatans',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      pegawaiId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Pegawais',
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
    await queryInterface.dropTable('Elearnings');
  }
};