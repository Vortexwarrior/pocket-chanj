const bcrypt = require('bcrypt');
const { User } = require('../models');

// Function to hash the password
const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

// Function to compare passwords for login
const checkPassword = async (inputPassword, hashedPassword) => {
  return bcrypt.compare(inputPassword, hashedPassword);
};

// Function to create a new user
const signup = async (userData) => {
  try {
    const hashedPassword = await hashPassword(userData.password);
    const newUser = await User.create({
      username: userData.username,
      email: userData.email,
      password: hashedPassword,
    });
    return newUser;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to create a new user.');
  }
};

// Function to log in an existing user
const login = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error('No user with that email.');
    }

    const validPassword = await checkPassword(password, user.password);
    if (!validPassword) {
      throw new Error('Incorrect password.');
    }

    return user;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to log in.');
  }
};

module.exports = { signup, login };
