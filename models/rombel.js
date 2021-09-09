'use strict';

module.exports = (sequelize, DataTypes) => {
  const Rombel = sequelize.define("Rombel", {
    kelas_id: DataTypes.INTEGER,
    tahun_ajaran_id: DataTypes.INTEGER
  }, {
    paranoid: true
  })

  Rombel.associate = function(models) {
    Rombel.belongsTo(models.Kelas, {
      foreignKey: 'kelas_id'
    })

    Rombel.belongsTo(models.TahunAjaran, {
      foreignKey: 'tahun_ajaran_id'
    })

    Rombel.hasMany(models.Siswa, {
      foreignKey: 'rombel_id',
    })
  }

  return Rombel
}