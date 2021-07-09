'use strict';

module.exports = (sequelize, DataTypes) => {
  const Kelas = sequelize.define("Kelas", {
    nama: DataTypes.STRING
  }, {
    paranoid: true
  })

  return Kelas
}