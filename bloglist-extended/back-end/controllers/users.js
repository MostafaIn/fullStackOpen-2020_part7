const usersRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')


usersRouter.get('/', async (req, res) => {
  const users = await User.find({}).populate('blogs',{ url: 1, title: 1, author: 1, likes: 1 } )
  res.json(users.map( user => user.toJSON()))
})

usersRouter.post('/', async (req, res) => {
  const body = req.body

  if(!body.password || body.password.length < 3){
    return res.status(400)
      .json({ error: 'password is required & must be more than 3 characters!' })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    name: body.name,
    username: body.username,
    passwordHash: passwordHash
  })

  const savedUser = await user.save()
  res.json(savedUser)
})


module.exports = usersRouter