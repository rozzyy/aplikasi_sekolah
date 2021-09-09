exports.absensiGuruSchema = {
    siswa_id: {
        notEmpty: {
            errorMessage: "Kolom siswa tidak boleh kosong."
        }
    },
    jam_hadir: {
        notEmpty: {
            errorMessage: "Kolom jam hadir tidak boleh kosong."
        }
    },
    pegawai_id: {
        notEmpty: {
            errorMessage: "Kolom pegawai tidak boleh kosong."
        }
    },
    kehadiran: {
        notEmpty: {
            errorMessage: "Kolom kehadiran tidak boleh kosong."
        }
    }
}