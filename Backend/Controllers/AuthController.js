// authController.js

const bcrypt = require('bcrypt');
const LogModel = require('../Models/LogModel'); // Import your user model

const login = async (req, res) => {
    const {  RegNo, Password } = req.body;
  
    try {
      // Find the user in the database based on the provided RegNo
      const user = await LogModel.findOne({ RegNo });
  
      if (!user) {
        // User not found
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
  
      // Compare the entered password with the hashed password stored in the database
      const passwordMatch = await bcrypt.compare(Password, user.Password);
  
      if (passwordMatch) {
        // Passwords match, user is authenticated
        return res.json({ success: true, message: 'Login successful' });
      } else {
        // Passwords do not match
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };

module.exports = { login };
