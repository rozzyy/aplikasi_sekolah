'use strict';

module.exports = (sequelize, DataTypes) => {
  const Ruangan = sequelize.define("Ruangan", {
    nama: DataTypes.STRING,
    tipe_ruangan: DataTypes.STRING
  }, {
    paranoid: true
  })

  return Ruangan
}