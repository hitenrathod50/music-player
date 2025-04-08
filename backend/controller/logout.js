const { User } = require("../model/User");

const logout = async (req, res) => {

    const token = req.cookies.Uid
    res.clearCookie('Uid', { path: '/', secure: true })
    res.json({logout : "true"})
}

module.exports = { logout }