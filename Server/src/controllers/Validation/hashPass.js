const bcrypt = require('bcrypt');

// Hash password function
const hashPass = async (password) => {
  try {
    // Generate a salt (the higher the salt rounds, the more secure it is but also slower)
    const salt = await bcrypt.genSalt(10);
    
    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Return the hashed password
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
  }
};

module.exports = hashPass;