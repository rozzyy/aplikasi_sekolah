exports.jurusanSchema = {
    nama: {
        notEmpty: {
            errorMessage: "Kolom nama tidak boleh kosong."
        }
    },
    akreditasi: {
        notEmpty: {
            errorMessage: "Kolom akreditasi tidak boleh kosong."
        }
    },
}