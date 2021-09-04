'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AbsenSiswas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image_url: {
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
      },
      siswaId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Siswas',
          key: 'id'
        },
        onDelete: "CASCADE"
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AbsenSiswas');
  }
};