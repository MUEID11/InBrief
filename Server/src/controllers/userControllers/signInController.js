const userModel = require("../../models/userModel");
const generateJwt = require("../Validation/generateJwt");
const hashPass = require("../Validation/hashPass");
const verifyPass = require("../Validation/varifyPass");

const signInController = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const hashedPassword = await hashPass(password);
  try {
    const user = await userModel.findOne({ email});
    console.log(user);
    if(!user){
      res.status(401).send({message: "unauthorized"});
    }

    if (user) {
      const isPassValid = verifyPass(password, hashedPassword);
      if(isPassValid){
        const token = generateJwt({
          id: user?._id,
          email: user?.email,
          age: user?.age,
        });
        console.log(token);
        res.json(token);
      }else{
        res.status(404).send({message: "Incorrect Password"})
      }
    }
  } catch (error) {
    res.send(error);
  }
};
module.exports = signInController;
