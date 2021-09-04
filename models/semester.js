'use strict';

module.exports = (sequelize, DataTypes) => {
  const Semester = sequelize.define("Semester", {
    nama: DataTypes.STRING,
    tgl_mulai: DataTypes.DATE,
    tgl_akhir: DataTypes.DATE,
    status: DataTypes.STRING,
    tahun_ajaran_id: DataTypes.INTEGER
  }, {
    paranoid: true
  })

  Semester.associate = function(models) {
    Semester.belongsTo(models.TahunAjaran, {
      foreignKey: 'tahun_ajaran_id'
    })
  }

  return Semester
}