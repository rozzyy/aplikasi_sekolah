"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.addColumn("Siswas", "rombel_id", {
            allowNull: true,
            type: Sequelize.INTEGER,
            references: {
                model: "Rombels",
                key: "id"
            },
            onDelete: "CASCADE"
        });

        await queryInterface.removeColumn('Siswas', 'rombel')
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.removeColumn('Siswas', 'rombel_id')
    }
};
