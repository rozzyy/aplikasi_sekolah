'use strict';

module.exports = (sequelize, DataTypes) => {
  const SumberGaji = sequelize.define("SumberGaji", {
    nama: DataTypes.STRING
  }, {
    paranoid: true
  })

  return SumberGaji
}