'use strict';

module.exports = (sequelize, DataTypes) => {
  const Lembaga = sequelize.define("Lembaga", {
    nama: DataTypes.STRING
  }, {
    paranoid: true
  })

  return Lembaga
}