const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// register screen
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })

  try {
    const salt = await bcrypt.genSalt(10)
    
    const user = await newUser.save()
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router