const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// register screen
router.post('/register', async (req, res) => {
  try {
    // generate new hashed password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    })

    // save user and respond
    const user = await newUser.save()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
})


// login screen
router.post('/login', async (req, res) => {
  try {
    // check user email
    const user = await User.findOne({email: req.body.email})
    !user && res.status(404).json('user not found')

    // check user password
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    // send user if(id and pass matched)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router