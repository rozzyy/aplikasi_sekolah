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
        return queryInterface.bulkInsert("Elearnings", [
            {
                link: "https://www.youtube.com/watch?v=TXnBPy1bm94",
                file: '',
                judul: 'Test Elearning',
                mapel: 'Bahasa Arab',
                tingkatanId: 1,
                pegawaiId: 1  ,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
         await queryInterface.bulkDelete('Elearnings', null, {});
    }
};
