exports.siswaSchema = {
    nama: {
        notEmpty: {
            errorMessage: "Kolom nama tidak boleh kosong."
        }
    },
    nipd: {
        notEmpty: {
            errorMessage: "Kolom nipd tidak boleh kosong."
        }
    },
    jenis_kelamin: {
        notEmpty: {
            errorMessage: "Kolom jenis kelamin tidak boleh kosong."
        }
    },
    nisn: {
        notEmpty: {
            errorMessage: "Kolom nisn tidak boleh kosong."
        }
    },
}