const jwt = require('jsonwebtoken')
const tokenData = {
    id:1,
    username: 'mamata'
}

const token = jwt.sign(tokenData, 'jwt@123')
console.log(token)