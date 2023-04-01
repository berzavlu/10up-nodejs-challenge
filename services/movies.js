const express = require('express')
const axios = require('axios')
const router = express.Router()

const MoviesController = require('../controllers/movies')
const authorization = require('../utils/authorization')

const moviesController = new MoviesController()

router.get('/list', authorization, async function (req, res, next) {
  console.log('/list')
  try {
    const params = req.query
    const result = await moviesController.getList(params)

    res.status(200).json(result)
  } catch (err) {
    next(err)
  }
})


module.exports = router