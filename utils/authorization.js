const jwt = require('jsonwebtoken')
const { jwt_secret } = require('./constants')

function authorization(req, res, next) {
  let token = req.headers['authorization']

  if (!token) return res.sendStatus(401)

  token = token.replace(/^Bearer\s+/, "");

  jwt.verify(token, jwt_secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: 'Invalid token'
      })
    } else {
      req.decoded = decoded
      next()
    }
  })
}

module.exports = authorization
