const express = require('express')
const axios = require('axios')
const router = express.Router()

const UserController = require('../controllers/user')

const userController = new UserController()

router.post('/login', async function (req, res, next) {
  console.log('/login')
  try {
    const payload = req.body
    const result = await userController.login(payload)

    res.status(200).json(result)
  } catch (err) {
    next(err)
  }
})


module.exports = router
