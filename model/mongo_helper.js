const MongoClient = require('mongodb').MongoClient
const URI = process.env.MONGO_URL
const DB_NAME = '1up'

class MongoHelper {
	constructor() {
		this.client = null
		this.dbName = DB_NAME
		this.session = null
	}

	async connect() {
		this.client = await MongoClient.connect(URI, {
			useNewUrlParser: true
		})
	}

	getDB() {
		return this.client.db(DB_NAME)
	}

	close() {
		if (this.client) {
			this.client.close()
		}
	}
}

module.exports = MongoHelper
