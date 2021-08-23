'use strict';

module.exports = (sequelize, DataTypes) => {
  const Jurusan = sequelize.define("Jurusan", {
    nama: DataTypes.STRING,
    akreditasi: DataTypes.STRING,
  }, {
    paranoid: true
  })

  Jurusan.associate = function(models) {
    Jurusan.hasMany(models.Kelas, {
      foreignKey: 'jurusanId'
    })
  }

  return Jurusan
}