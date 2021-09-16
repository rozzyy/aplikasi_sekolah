"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.changeColumn("Rombels", "kelas_id", {
            allowNull: true,
            type: Sequelize.INTEGER,
            references: {
                model: "Kelas",
                key: "id"
            },
            onDelete: "CASCADE"
        });

        await queryInterface.changeColumn("Rombels", "tahun_ajaran_id", {
            allowNull: true,
            type: Sequelize.INTEGER,
            references: {
                model: "TahunAjarans",
                key: "id"
            },
            onDelete: "CASCADE"
        });
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.dropTable("Rombels");
    }
};
