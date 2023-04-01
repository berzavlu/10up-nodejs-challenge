const express = require('express')
const port = 4000

// Init server
const app = express()

app.get('/', function (req, res) {
	res.send('Silence is golden')
})

app.listen(port, () => {
	console.log(`10UP app listening on port ${port}`)
})
