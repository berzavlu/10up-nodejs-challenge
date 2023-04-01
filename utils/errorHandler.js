const Error = require('./error.js')

function errorHandler(err, req, res, next) {
  let errorResult = null
	if (err instanceof Error) {
    errorResult = {
      status: false,
			data: {},
			message: err.messageUser,
			messageUser: err.messageUser,
		}
	} else {
		// General Error
    console.log('Error: ', err.message)
		errorResult = {
			status: false,
			data: {},
			message: "An unexpected error occurred. Please try again",
			messageUser: "An unexpected error occurred. Please try again",
			/*  */
		}
	}

	res.status(err.status || 500).json(errorResult)
}

module.exports = errorHandler