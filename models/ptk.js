'use strict';

module.exports = (sequelize, DataTypes) => {
  const PTK = sequelize.define("PTK", {
    nama: DataTypes.STRING
  }, {
    paranoid: true
  })

  return PTK
}