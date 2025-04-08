const { User } = require("../model/User");
const jwt = require('jsonwebtoken')
const SIGN = 'SONGAPPX849302KEYIS39320SE943CURE84393@@@@@@38784738789JKDSJLF'

const login = async (req, res) => {

    const { userName, password } = req.body;

    const user = await User.findOne({ userName, password })

    if (!user) {
        res.json({ status: 'fail' })
    }

    else {
        req.user = user;
        console.log(user)
        var token = jwt.sign({ userName: user.userName, _id: user._id }, SIGN);
        res.cookie("Uid", token, { httpOnly: true, sameSite: 'none', secure: true, maxAge: 2 * 24 * 60 * 60 * 1000 })
        res.json({ status: 'success' })
    }

}

module.exports = { login }