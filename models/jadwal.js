'use strict';

module.exports = (sequelize, DataTypes) => {
    const Jadwal = sequelize.define("Jadwal", {
      nama: DataTypes.STRING,
      rombelId: DataTypes.STRING,
      jam_mulai: DataTypes.STRING,
      jam_selesai: DataTypes.STRING,
      hari: DataTypes.STRING,
      pegawaiId: DataTypes.STRING
    }, {
      paranoid: true
    })

    return Jadwal
}