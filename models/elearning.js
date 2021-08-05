'use strict';

module.exports = (sequelize, DataTypes) => {
  const Elearning = sequelize.define("Elearning", {
    link: DataTypes.STRING,
    file: DataTypes.STRING,
    judul: DataTypes.STRING,
    rombelId: DataTypes.INTEGER,
    pelajaranId: DataTypes.INTEGER,
    pegawaiId: DataTypes.INTEGER
  }, {
    paranoid: true
  })

  return Elearning
}