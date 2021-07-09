'use strict';

module.exports = (sequelize, DataTypes) => {
  const Tugas = sequelize.define("Tugas", {
    nama: DataTypes.STRING
  }, {
    paranoid: true
  })

  return Tugas
}