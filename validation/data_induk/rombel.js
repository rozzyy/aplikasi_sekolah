exports.rombelSchema = {
    kelas_id: {
        notEmpty: {
            errorMessage: "Kolom kelas tidak boleh kosong."
        }
    },
    tahun_ajaran_id: {
        notEmpty: {
            errorMessage: "Kolom tahun ajaran tidak boleh kosong."
        }
    }
}