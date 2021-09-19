const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require('./routes/users')

dotenv.config()

mongoose.connect(process.env.DB_URL, () => {
  console.log('MongoDB Connected!')
})

// middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use('/api/users', userRoute)


app.listen(2727, () => {
  console.log('Server is running on port 2727')
})