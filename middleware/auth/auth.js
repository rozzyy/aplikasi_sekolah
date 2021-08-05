const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        req.apiUser = jwt.verify(token, process.env.TOKEN_SECRET)
        res.locals.apiUser = req.apiUser
        next()
    } catch (error) {
        res.status(401).json({
            status: "error",
            msg: "Unauthorized."
        })
    }
}