'use strict';

module.exports = (sequelize, DataTypes) => {
  const Jurusan = sequelize.define("Jurusan", {
    nama: DataTypes.STRING,
    kode: DataTypes.STRING,
  }, {
    paranoid: true
  })

  return Jurusan
}