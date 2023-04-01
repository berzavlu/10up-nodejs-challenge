class Error1UP extends Error {
	/**
	 * Constructor Custom Error 
	 * @param {*} status
	 * @param {*} type
	 * @param {*} id 
	 * @param {*} message [System Message]
	 * @param {*} messageUser 
	 */
	constructor(status, type, id, message, messageUser, cause) {
		super(message);

		this.name = this.constructor.name;
		this.status = status || 500;
		this.type = type || 0;
		this.id = id || 0;

		this.message = message ||
			"An unexpected error occurred. Please try again"

		this.messageUser = messageUser ||
			"An unexpected error occurred. Please try again"

		if (cause) {
			this.cause = cause
		}
	}
}

module.exports = Error1UP
