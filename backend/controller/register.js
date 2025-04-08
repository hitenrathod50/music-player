const { User } = require("../model/User");

const register = async (req, res) => {

    const { userName, password } = req.body;

    console.log(userName + " " + password)

    const user = await User.findOne({ userName })

    if (!user) {
        const response = await User.create({ userName, password })

        if (response) res.status(201).json({ status: 'success' });
        else res.json({ status: 'fail' });
    }
    else {
        res.json({ status: 'fail' });
    }
}

module.exports = { register }