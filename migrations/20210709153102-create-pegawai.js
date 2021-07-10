'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pegawais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      nuptk: {
        type: Sequelize.STRING
      },
      jenis_kelamin: {
        type: Sequelize.STRING
      },
      tmpt_lahir: {
        type: Sequelize.STRING
      },
      tgl_lahir: {
        type: Sequelize.DATE
      },
      nip: {
        type: Sequelize.STRING
      },
      status_pegawai: {
        type: Sequelize.STRING
      },
      jenis_ptk: {
        type: Sequelize.STRING
      },
      agama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      rt: {
        type: Sequelize.STRING
      },
      rw: {
        type: Sequelize.STRING
      },
      dusun: {
        type: Sequelize.STRING
      },
      kelurahan: {
        type: Sequelize.STRING
      },
      kecamatan: {
        type: Sequelize.STRING
      },
      kodepos: {
        type: Sequelize.STRING
      },
      telepon: {
        type: Sequelize.STRING
      },
      hp: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      tgs_tambahan: {
        type: Sequelize.STRING
      },
      sk_cpns: {
        type: Sequelize.STRING
      },
      tgl_cpns: {
        type: Sequelize.DATE
      },
      sk_angkat: {
        type: Sequelize.STRING
      },
      tmt_sk: {
        type: Sequelize.DATE
      },
      lembaga_angkat: {
        type: Sequelize.STRING
      },
      golongan: {
        type: Sequelize.STRING
      },
      sumber_gaji: {
        type: Sequelize.STRING
      },
      nama_ibu: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      nama_pasangan: {
        type: Sequelize.STRING
      },
      nip_pasangan: {
        type: Sequelize.STRING
      },
      pkrj_pasangan: {
        type: Sequelize.STRING
      },
      tmt_pns_pasangan: {
        type: Sequelize.STRING
      },
      lisensi_kepsek: {
        type: Sequelize.BOOLEAN
      },
      diklat: {
        type: Sequelize.BOOLEAN
      },
      braille: {
        type: Sequelize.BOOLEAN
      },
      bhs_isyarat: {
        type: Sequelize.BOOLEAN
      },
      npwp: {
        type: Sequelize.STRING
      },
      nama_wp: {
        type: Sequelize.STRING
      },
      bank: {
        type: Sequelize.STRING
      },
      no_rek: {
        type: Sequelize.STRING
      },
      rek_atas_nama: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      no_kk: {
        type: Sequelize.STRING
      },
      karpeg: {
        type: Sequelize.STRING
      },
      karis: {
        type: Sequelize.STRING
      },
      lintang: {
        type: Sequelize.STRING
      },
      bujur: {
        type: Sequelize.STRING
      },
      nuks: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      roleId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Roles",
          key: "id"
        },
        onDelete: "CASCADE"
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pegawais');
  }
};