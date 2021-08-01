'use strict';

module.exports = (sequelize, DataTypes) => {
  const Rombel = sequelize.define("Rombel", {
    kelas: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    ruang: DataTypes.INTEGER 
  }, {
    paranoid: true
  })

  return Rombel
}