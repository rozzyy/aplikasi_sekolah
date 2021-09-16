exports.kelasSchema = {
    nama: {
        notEmpty: {
            errorMessage: "Kolom nama tidak boleh kosong."
        }
    },
    tingkatanId: {
        notEmpty: {
            errorMessage: "Kolom tingkatan tidak boleh kosong."
        }
    },
    jurusanId: {
        notEmpty: {
            errorMessage: "Kolom jurusan tidak boleh kosong."
        }
    },
}