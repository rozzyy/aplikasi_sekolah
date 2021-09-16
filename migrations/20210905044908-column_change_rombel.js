'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn('Rombels', 'kelas_id', Sequelize.INTEGER),
      queryInterface.addColumn('Rombels', 'tahun_ajaran_id', Sequelize.INTEGER),
      queryInterface.removeColumn('Rombels', 'kelas'),
      queryInterface.removeColumn('Rombels', 'jurusan'),
      queryInterface.removeColumn('Rombels', 'ruang')
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Rombels')
  }
};
