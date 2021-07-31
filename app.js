const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', require('./router'))

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`)
})