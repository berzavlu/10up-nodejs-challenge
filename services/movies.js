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

router.get('/:movieId', authorization, async function (req, res, next) {
  try {
    const movieId = req.params.movieId
    const result = await moviesController.getMovie(movieId)

    res.status(200).json(result)
  } catch (err) {
    next(err)
  }
})

router.post('/new', authorization, async function (req, res, next) {
  try {
    const result = await moviesController.addMovie(req.body)

    res.status(200).json(result)
  } catch (err) {
    next(err)
  }
})

router.delete('/delete/:movieId', authorization, async function (req, res, next) {
  try {
    const movieId = req.params.movieId
    const result = await moviesController.deleteMovie(movieId)

    res.status(200).json(result)
  } catch (err) {
    next(err)
  }
})

router.put('/update/:movieId', authorization, async function (req, res, next) {
  try {
    const movieId = req.params.movieId
    const result = await moviesController.updateMovie(movieId, req.body)

    res.status(200).json(result)
  } catch (err) {
    next(err)
  }
})


module.exports = router