'use strict';

module.exports = (sequelize, DataTypes) => {
  const StatusKawin = sequelize.define("StatusKawin", {
    nama: DataTypes.STRING
  }, {
    paranoid: true
  })

  return StatusKawin
}