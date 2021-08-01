'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pegawai = sequelize.define("Pegawai", {
    nama: DataTypes.STRING,
    nuptk: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    tmpt_lahir: DataTypes.STRING,
    tgl_lahir: DataTypes.DATE,
    nip: DataTypes.STRING,
    status_pegawai: DataTypes.STRING,
    jenis_ptk: DataTypes.STRING,
    agama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    rt: DataTypes.STRING,
    rw: DataTypes.STRING,
    dusun: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kodepos: DataTypes.STRING,
    telepon: DataTypes.STRING,
    hp: DataTypes.STRING,
    email: DataTypes.STRING,
    tgs_tambahan: DataTypes.STRING,
    sk_cpns: DataTypes.STRING,
    tgl_cpns: DataTypes.DATE,
    sk_angkat: DataTypes.STRING,
    tmt_sk: DataTypes.DATE,
    lembaga_angkat: DataTypes.STRING,
    golongan: DataTypes.STRING,
    sumber_gaji: DataTypes.STRING,
    nama_ibu: DataTypes.STRING,
    status: DataTypes.STRING,
    nama_pasangan: DataTypes.STRING,
    nip_pasangan: DataTypes.STRING,
    pkrj_pasangan: DataTypes.STRING,
    tmt_pns_pasangan: DataTypes.STRING,
    lisensi_kepsek: DataTypes.BOOLEAN,
    diklat: DataTypes.BOOLEAN,
    braille: DataTypes.BOOLEAN,
    bhs_isyarat: DataTypes.BOOLEAN,
    npwp: DataTypes.STRING,
    nama_wp: DataTypes.STRING,
    bank: DataTypes.STRING,
    no_rek: DataTypes.STRING,
    rek_atas_nama: DataTypes.STRING,
    nik: DataTypes.STRING,
    no_kk: DataTypes.STRING,
    karpeg: DataTypes.STRING,
    karis: DataTypes.STRING,
    lintang: DataTypes.STRING,
    bujur: DataTypes.STRING,
    nuks: DataTypes.STRING,
    jabatan: DataTypes.STRING
  }, {
    paranoid: true
  })

  Pegawai.associate = function(models) {
    Pegawai.belongsTo(models.User, {
      foreignKey: "userId"
    })
  }

  return Pegawai
}