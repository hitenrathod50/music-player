const { User } = require("../model/User");
const jwt = require('jsonwebtoken')
const SIGN = 'SONGAPPX849302KEYIS39320SE943CURE84393@@@@@@38784738789JKDSJLF'

const jwtCheck = async (req, res) => {

    const token = req.cookies.Uid
    if (token) {
        const value = jwt.verify(token, SIGN)

        console.log(value);

        if (value) res.json({ user: 'isUser' })
        else res.json({ user: 'noUser' })
    }
    else res.json({ user: 'noUser' })

}

module.exports = { jwtCheck }