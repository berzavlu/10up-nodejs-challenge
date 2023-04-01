const axios = require('axios')
const Error = require('../utils/error')
const MongoHelper = require('../model/mongo_helper')
const MongoModel = require('../model/mongo')

class MoviesController {
	constructor() {
		this.mongoClientDB = new MongoHelper()
	}

  async getList(id) {
		var mongoModel = null

		try {
			// Connection and Open DB
			await this.mongoClientDB.connect()

			// Models
			mongoModel = new MongoModel(this.mongoClientDB.getDB())

      const response = await mongoModel.getAll('movies')

			return {
				status: true,
        data: response,
				message: 'Success get movies',
			}
		} catch (err) {
			if (err instanceof Error) {
				throw err
			} else {
        console.log(err)
				throw new Error(400, 0, 10, err.message, 'Inter error loading movies', err)
			}
		} finally {
			if (this.mongoClientDB) {
				this.mongoClientDB.close()
			}
		}
	}
}

module.exports = MoviesController
