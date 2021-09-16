'use strict';

module.exports = (sequelize, DataTypes) => {
  const TahunAjaran = sequelize.define("TahunAjaran", {
    nama: DataTypes.STRING
  }, {
    paranoid: true
  })

  TahunAjaran.associate = function(models) {
    TahunAjaran.hasMany(models.Semester, {
      foreignKey: 'tahun_ajaran_id'
    })

    TahunAjaran.hasMany(models.Rombel, {
      foreignKey: 'tahun_ajaran_id'
    })
  }

  return TahunAjaran
}

