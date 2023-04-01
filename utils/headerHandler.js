function headerHandler(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
	if ('OPTIONS' === req.method) {
		res.send(200)
	} else {
		next()
	}
}

module.exports = headerHandler
