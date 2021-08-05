'use strict';

module.exports = (sequelize, DataTypes) => {
  const Agama = sequelize.define("Agama", {
    nama: DataTypes.STRING
  }, {
    paranoid: true
  })

  return Agama
}