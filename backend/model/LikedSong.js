const mongoose = require("mongoose");

const LikedSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    songId: []
})

const LikedSong = mongoose.model('LikedSong', LikedSchema)



module.exports = { LikedSong }