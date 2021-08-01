'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert("Siswas", [
        {
            nama: "ABDI FAJAR SATRIA",
            nipd: "18082",
            jenis_kelamin: "L",
            nisn: "12345678",
            tmpt_lahir: "Sei Mencirim",
            tgl_lahir: new Date("2003-07-13"),
            nik: "1207231307030006",
            agama: "Islam",
            alamat: "Sei Mencirim",
            rt: "0",
            rw: "0",
            dusun: "Dusun C",
            kelurahan: "Sei Mencirim",
            kecamatan: "Kec. Perbaungan",
            kodepos: "20986",
            jenis_tinggal: "Bersama Orang Tua",
            transportasi: "Angkutan Umum",
            telepon: "081235353435",
            hp: "083177040918",
            email: "abdifajar@gmail.com",
            skhun: "BK-2180726083103",
            penerima_kip: false,
            no_kip: "PXLWT2",
            rombel: "XII TKR 3",
            no_pun: "2-18-07-26-083-103-2",
            no_ijazah: "MTs-06 020036331",
            penerima_kip: false,
            no_kip: "12345",
            nama_kip: "Abdi",
            no_akta: "1218-LT-25032014-0077",
            bank: "BRI",
            no_rek: "12345678",
            layak_pip: false,
            alasan_pip: "Siswa Miskin",
            kbthn_khusus: "Tidak Ada",
            sekolah_asal: "MTs AL WASHLIYAH 16 PERBAUNGAN",
            anak_ke: "1",
            lintang: "3.5681",
            bujur: "98.981",
            berat_badan: "75",
            tinggi_badan: "170",
            ling_kepala: "12",
            jmlh_saudara: "5",
            jarak_rumah: "12 km",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1
        }
      ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Siswas', null, {})
  }
};
