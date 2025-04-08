const { User } = require("./model/User")
const PORT = 3000
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const { register } = require("./controller/register")
const { login } = require("./controller/login")
const { jwtCheck } = require("./controller/jwtCheck")
const cookieParser = require('cookie-parser')
const { logout } = require("./controller/logout")
const { LikedSong } = require("./model/LikedSong")

app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5000',
    methods: ['GET', 'post', 'DELETE', 'PUT'],
    credentials: true,
}))

app
    .route('/register')
    .post(register)

app
    .route('/login')
    .post(login)

app
    .route('/checkToken')
    .post(jwtCheck)

app
    .route('/logout')
    .post(logout)


app.listen(PORT, () => {
    console.log(`App running on 127.0.0.1:${PORT}`)
})