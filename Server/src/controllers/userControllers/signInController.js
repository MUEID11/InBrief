const userModel = require("../../models/userModel");
const generateJwt = require("../Validation/generateJwt");
const hashPass = require("../Validation/hashPass");
const verifyPass = require("../Validation/varifyPass");

const signInController = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await userModel.findOne({ email});
    console.log(user);
    if(!user){
      res.status(401).send({message: "unauthorized"});
    }

    if (user) {
      const isPassValid = await verifyPass(password, user?.password);
      if(isPassValid){
        const token = generateJwt({
          id: user?._id,
          email: user?.email,
          age: user?.age,
        });
        res.json(token)
      }else{
        res.status(403).send({message: "Incorrect Password"})
      }
    }
  } catch (error) {
    res.send(error);
  }
};
module.exports = signInController;
