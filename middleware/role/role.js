const User = require('../../models').User

module.exports = async (req, res, next) => {
    try {
    } catch (error) {
        res.status(401).json({
            message: "User is invalid."
        })
    }
}