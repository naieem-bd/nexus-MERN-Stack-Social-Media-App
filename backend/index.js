const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')

dotenv.config()

mongoose.connect(process.env.DB_URL,
  () => {
    console.log('MongoDB Connected!')
  }
)

app.listen(2727, () => {
  console.log('Server is running on port 2727')
})