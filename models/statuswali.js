'use strict';

module.exports = (sequelize, DataTypes) => {
  const StatusWali = sequelize.define("StatuWali", {
    nama: DataTypes.STRING
  }, {
    paranoid: true
  })

  return StatusWali
}