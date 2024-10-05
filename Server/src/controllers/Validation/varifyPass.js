const bcrypt = require('bcrypt');

// Verify password function
const verifyPass = async (password, hashedPassword) => {
  try {
    // Compare the password with the hashed password
    const match = await bcrypt.compare(password, hashedPassword);
    console.log("verify passs console",match, password, hashedPassword)
    if (match) {
      console.log('Password is correct');
      return true;
    } else {
      console.log('Password is incorrect');
      return false
      
    }
  } catch (error) {
    console.error('Error verifying password:', error);
  }
};

module.exports = verifyPass;
