const axios = require('axios')
const Error = require('../utils/error')
const MongoHelper = require('../model/mongo_helper')
const MongoModel = require('../model/mongo')
const { generateJWT } = require('../utils/functions')

class UserController {
	constructor() {
		this.mongoClientDB = new MongoHelper()
	}

  async login(data) {
		var mongoModel = null

		try {
			// Connection and Open DB
			await this.mongoClientDB.connect()

			// Models
			mongoModel = new MongoModel(this.mongoClientDB.getDB())

      let user = await mongoModel.get('admin', {
        email: data.email,
        password: data.password,
      })

      let token = null

      if (user) {
        const payload = {
          userId: user._id,
          email: user.email,
          name: user.name,
        }
        token = generateJWT(payload)
      }

      return {
        status: user ? true : false,
        data: user ? { token } : null,
        message: user ? 'Login success' : 'User or password incorrect',
      }
		} catch (err) {
			if (err instanceof Error) {
				throw err
			} else {
        console.log(err)
				throw new Error(400, 0, 10, err.message, 'Internal error data user', err)
			}
		} finally {
			if (this.mongoClientDB) {
				this.mongoClientDB.close()
			}
		}
	}
}

module.exports = UserController
