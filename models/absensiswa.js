'use strict';

module.exports = (sequelize, DataTypes) => {
  const AbsenSiswa = sequelize.define("AbsenSiswa", {
    image_url: DataTypes.STRING
  }, {
    paranoid: true
  })

  AbsenSiswa.associate = function(models) {
    AbsenSiswa.belongsTo(models.Siswa, {
      foreignKey: "siswaId"
    })
  }

  return AbsenSiswa
}