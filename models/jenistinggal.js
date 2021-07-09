'use strict';

module.exports = (sequelize, DataTypes) => {
  const JenisTinggal = sequelize.define("JenisTinggal", {
    nama: DataTypes.STRING
  }, {
    paranoid: true
  })

  return JenisTinggal
}