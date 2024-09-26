require('dotenv').config()
const jwt = require('jsonwebtoken')

const verifyJwt = async(req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  if(!token){
    res.status(401).send({message: "unauthorized access"});
  }
  try {
    jwt.verify(token, process.env.SECRET_JWT_KEY, (err, decoded) => {
      if(err)throw err;
      req.user = decoded;
      next();
    })
  } catch (error) {
    res.status(401).send({message: "unauthorized"})
  }
}

module.exports = verifyJwt;