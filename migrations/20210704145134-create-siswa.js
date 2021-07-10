'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Siswas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      nipd: {
        type: Sequelize.STRING
      },
      jenis_kelamin: {
        type: Sequelize.STRING
      },
      nisn: {
        type: Sequelize.STRING
      },
      tmpt_lahir: {
        type: Sequelize.STRING
      },
      tgl_lahir: {
        type: Sequelize.DATE
      },
      nik: {
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
      jenis_tinggal: {
        type: Sequelize.STRING
      },
      transportasi: {
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
      skhun: {
        type: Sequelize.STRING
      },
      penerima_kps: {
        type: Sequelize.BOOLEAN
      },
      no_kps: {
        type: Sequelize.STRING
      },
      rombel: {
        type: Sequelize.STRING
      },
      no_pun: {
        type: Sequelize.STRING
      },
      no_ijazah: {
        type: Sequelize.STRING
      },
      penerima_kip: {
        type: Sequelize.BOOLEAN
      },
      no_kip: {
        type: Sequelize.STRING
      },
      nama_kip: {
        type: Sequelize.STRING
      },
      no_akta: {
        type: Sequelize.STRING
      },
      bank: {
        type: Sequelize.STRING
      },
      no_rek: {
        type: Sequelize.STRING
      },
      layak_pip: {
        type: Sequelize.BOOLEAN
      },
      alasan_pip: {
        type: Sequelize.STRING
      },
      kbthn_khusus: {
        type: Sequelize.STRING
      },
      sekolah_asal: {
        type: Sequelize.STRING
      },
      anak_ke: {
        type: Sequelize.INTEGER
      },
      lintang: {
        type: Sequelize.STRING
      },
      bujur: {
        type: Sequelize.STRING
      },
      berat_badan: {
        type: Sequelize.STRING
      },
      tinggi_badan: {
        type: Sequelize.STRING
      },
      ling_kepala: {
        type: Sequelize.STRING
      },
      jmlh_saudara: {
        type: Sequelize.STRING
      },
      jarak_rumah: {
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
    await queryInterface.dropTable('Siswas');
  }
};