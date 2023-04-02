const axios = require('axios')
const { ObjectId } = require('mongodb')
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

  async getMovie(movieId) {
		var mongoModel = null

		try {
			// Connection and Open DB
			await this.mongoClientDB.connect()

			// Models
			mongoModel = new MongoModel(this.mongoClientDB.getDB())
      const id = new ObjectId(movieId)
      const response = await mongoModel.get('movies', { _id: id })
      
			return {
				status: true,
        data: response,
				message: 'Success get movie detail',
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

  async addMovie(moviePayload) {
		var mongoModel = null

		try {
			// Connection and Open DB
			await this.mongoClientDB.connect()

			// Models
			mongoModel = new MongoModel(this.mongoClientDB.getDB())
      const response = await mongoModel.create('movies', moviePayload)
      
			return {
				status: true,
        data: response,
				message: 'Success get movie detail',
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

  async deleteMovie(movieId) {
		var mongoModel = null

		try {
			// Connection and Open DB
			await this.mongoClientDB.connect()

			// Models
			mongoModel = new MongoModel(this.mongoClientDB.getDB())
      const id = new ObjectId(movieId)
      const response = await mongoModel.delete('movies', { _id: id })
      
			return {
				status: true,
        data: response,
				message: 'Success deleted movie',
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

  async updateMovie(movieId, moviePayload) {
		var mongoModel = null

		try {
			// Connection and Open DB
			await this.mongoClientDB.connect()

			// Models
			mongoModel = new MongoModel(this.mongoClientDB.getDB())
      const id = new ObjectId(movieId)
      const response = await mongoModel.findAndUpdate('movies', { _id: id }, {
        $set: {
          ...moviePayload
        }
      })
      
			return {
				status: true,
        data: response,
				message: 'Success get movie detail',
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
