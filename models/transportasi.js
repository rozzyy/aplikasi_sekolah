'use strict';

module.exports = (sequelize, DataTypes) => {
  const Transportasi = sequelize.define("Transportasi", {
    nama: DataTypes.STRING
  }, {
    paranoid: true
  })

  return Transportasi
}