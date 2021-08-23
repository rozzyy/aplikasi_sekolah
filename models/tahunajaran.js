'use strict';

module.exports = (sequelize, DataTypes) => {
  const TahunAjaran = sequelize.define("TahunAjaran", {
    nama: DataTypes.STRING
  }, {
    paranoid: true
  })

  return TahunAjaran
}

