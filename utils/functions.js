const jwt = require('jsonwebtoken')
const { jwt_secret, sessionTime } = require('./constants')

function generateJWT(json_user) {
  return token = jwt.sign(json_user, jwt_secret, { expiresIn: sessionTime })
}

module.exports = {
  generateJWT
}
