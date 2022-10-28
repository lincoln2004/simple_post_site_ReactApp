const helmet = require('helmet')
const cors = require('cors')

const express = require('express')

const router = require('../routes/routes.js')

const app = express()

app.use(helmet())
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(router)

module.exports = {app}