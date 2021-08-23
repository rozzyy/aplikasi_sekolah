"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        return queryInterface.bulkInsert("Tingkatans", [
            {
                nama: "X",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nama: "XI",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nama: "XII",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
         await queryInterface.bulkDelete('Tingkatans', null, {});
    }
};
