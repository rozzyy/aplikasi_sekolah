'use strict';

module.exports = (sequelize, DataTypes) => {
  const Jabatan = sequelize.define("Jabatan", {
    nama: DataTypes.STRING
  }, {
    paranoid: true
  })

  return Jabatan
}