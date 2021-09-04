exports.semesterSchema = {
    nama: {
        notEmpty: {
            errorMessage: "Kolom nama tidak boleh kosong."
        }
    },
    tgl_mulai: {
        notEmpty: {
            errorMessage: "Kolom tanggal mulai tidak boleh kosong."
        }
    },
    tgl_akhir: {
        notEmpty: {
            errorMessage: "Kolom tanggal akhir tidak boleh kosong."
        }
    },
    tahun_ajaran_id: {
        notEmpty: {
            errorMessage: "Kolom tahun ajaran id tidak boleh kosong."
        }
    },
}