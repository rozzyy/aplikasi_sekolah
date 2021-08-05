const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
// const path = require('path')
// const fs = require('fs')
const cors = require('cors')

const app = express()

// static folder link
app.use(express.static('public'))

// cors
app.use(cors())

// symlink to public folder
// if (!(path.join(__dirname, './public/upload') === path.join(__dirname, './public'))) {
//     fs.symlink(path.join(__dirname, './storage/upload'), path.join(__dirname, './public/upload'), function (error) {
//         console.log(error)
//     })
// }

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', require('./router'))

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`)
})