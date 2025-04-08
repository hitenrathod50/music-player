const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/songApplication')
    .then(() => {
        console.log("Connected...")
    })
    .catch(() => {
        console.log("Error...")
    })


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema)



module.exports = { User }