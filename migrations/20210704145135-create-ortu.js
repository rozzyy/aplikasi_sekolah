'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ortus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      tahun_lahir: {
        type: Sequelize.DATE
      },
      pendidikan: {
        type: Sequelize.STRING
      },
      pekerjaan: {
        type: Sequelize.STRING
      },
      penghasilan: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      status: {
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
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Siswas",
          key: "id"
        },
        onDelete: "CASCADE"
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Ortus');
  }
};