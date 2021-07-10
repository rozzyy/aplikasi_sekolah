'use strict';

module.exports = (sequelize, DataTypes) => {
  const Siswa = sequelize.define("Siswa", {
    nama: DataTypes.STRING,
    nipd: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    nisn: DataTypes.STRING,
    tmpt_lahir: DataTypes.STRING,
    tgl_lahir: DataTypes.DATE,
    nik: DataTypes.STRING,
    agama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    rt: DataTypes.STRING,
    rw: DataTypes.STRING,
    dusun: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kodepos: DataTypes.STRING,
    jenis_tinggal: DataTypes.STRING,
    transportasi: DataTypes.STRING,
    telepon: DataTypes.STRING,
    hp: DataTypes.STRING,
    email: DataTypes.STRING,
    skhun: DataTypes.STRING,
    penerima_kps: DataTypes.BOOLEAN,
    no_kps: DataTypes.STRING,
    rombel: DataTypes.STRING,
    no_pun: DataTypes.STRING,
    no_ijazah: DataTypes.STRING,
    penerima_kip: DataTypes.BOOLEAN,
    no_kip: DataTypes.STRING,
    nama_kip: DataTypes.STRING,
    no_akta: DataTypes.STRING,
    bank: DataTypes.STRING,
    no_rek: DataTypes.STRING,
    layak_pip: DataTypes.BOOLEAN,
    alasan_pip: DataTypes.STRING,
    kbthn_khusus: DataTypes.STRING,
    sekolah_asal: DataTypes.STRING,
    anak_ke: DataTypes.INTEGER,
    lintang: DataTypes.STRING,
    bujur: DataTypes.STRING,
    berat_badan: DataTypes.STRING,
    tinggi_badan: DataTypes.STRING,
    ling_kepala: DataTypes.STRING,
    jmlh_saudara: DataTypes.STRING,
    jarak_rumah: DataTypes.STRING
  }, {
    paranoid: true
  })

  Siswa.associate = function(models) {
    Siswa.hasOne(models.Ortu, {
      as: "ortus"
    })
  }

  Siswa.associate = function(models) {
    Siswa.belongsTo(models.Role, {
      foreignKey: "roleId",
      as: "role"
    })
  }

  return Siswa
}