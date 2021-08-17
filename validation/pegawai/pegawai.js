exports.pegawaiSchema = {
    nama: {
        notEmpty: {
            errorMessage: "Kolom nama tidak boleh kosong."
        }
    },
    nuptk: {
        notEmpty: {
            errorMessage: "Kolom nuptk tidak boleh kosong."
        }
    },
    jenis_kelamin: {
        notEmpty: {
            errorMessage: "Kolom jenis kelamin tidak boleh kosong."
        }
    },
    tmpt_lahir: {
        notEmpty: {
            errorMessage: "Kolom tempat lahir tidak boleh kosong."
        }
    },
    tgl_lahir: {
        notEmpty: {
            errorMessage: "Kolom tanggal lahir tidak boleh kosong."
        }
    },
    jenis_ptk: {
        notEmpty: {
            errorMessage: "Kolom jenis ptk tidak boleh kosong."
        }
    },
    nip: {
        notEmpty: {
            errorMessage: "Kolom nip tidak boleh kosong."
        }
    },
    agama: {
        notEmpty: {
            errorMessage: "Kolom agama tidak boleh kosong."
        }
    },
}