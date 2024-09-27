require('dotenv').config();
const jwt = require('jsonwebtoken');
const generateJwt = ({id, email, age}) => {
  const token = jwt.sign({id, email, age,}, process.env.SECRET_JWT_KEY, {expiresIn: '7d'});
  return token;
}

module.exports = generateJwt;