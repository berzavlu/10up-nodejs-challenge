const express = require('express')
const bodyParser = require('body-parser')
const port = 4000
const url = '/api/'

// Utils
const errorHandler = require('./utils/errorHandler')
const headerHandler = require('./utils/headerHandler')

// Services
const moviesService = require('./services/movies')

// Init server
const app = express()

// Handlers
app.use(headerHandler)

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '40mb' }))
app.use(bodyParser.json())

// Routes
app.use(url + 'movies', moviesService)

app.get('/', function (req, res) {
	res.send('Silence is golden')
})

app.use(errorHandler)

app.listen(port, () => {
	console.log(`10UP app listening on port ${port}`)
})
