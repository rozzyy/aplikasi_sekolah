'use strict';

module.exports = (sequelize, DataTypes) => {
  const Rombel = sequelize.define("Rombel", {
    nama: DataTypes.STRING
  }, {
    paranoid: true
  })

  return Rombel
}