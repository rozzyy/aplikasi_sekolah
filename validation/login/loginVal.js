const { body, validationResult } = require('express-validator')

exports.loginSchema = {
    email: {
        notEmpty: {
            errorMessage: "Kolom Email tidak boleh kosong."
        },
        optional: {
            options: { nullable: true }
        }
    },
    no_induk: {
        notEmpty: {
            errorMessage: "Kolom Nomor Induk tidak boleh kosong."
        },
        optional: {
            options: { nullable: true }
        }
    },
    password: {
        notEmpty: {
            errorMessage: "Password tidak boleh kosong."
        },
        isLength: {
            errorMessage: "Password tidak boleh kurang dari 8 karakter",
            options: { min: 7 }
        }
    }
}

exports.validate = validations => {
    return async(req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)))

        const errors = validationResult(req)
        if(errors.isEmpty()) {
            return next()
        }

        const validasi = {}
        errors.array().forEach(element => {
            validasi[element.param] = []
        });
        errors.array().forEach(item => {
            if(item.param) {
                validasi[item.param].push(item.msg)
            } 
        })

        res.status(400).json({
            errors: validasi
        })
    }
}