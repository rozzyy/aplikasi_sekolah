'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pelajaran = sequelize.define("Pelajaran", {
    nama: DataTypes.STRING,
    kode: DataTypes.STRING
  })
  
  return Pelajaran
}