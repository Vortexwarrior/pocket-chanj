const sequelize = require('./config/connection');

const { User } = require('./models');
const { signup, login } = require('./utils/auth');

const testUserSignup = async () => {
    try {
        const newUser = await signup({
            username: 'testuser',
            email: 'testuser@example.com',
            password: 'testpassword',
        });
        console.log('New user created:', newUser.toJSON());
    } catch (err) {
        console.error('Error creating user:', err);
    }
};

const testUserLogin = async () => {
    try {
        const user = await login('testuser@example.com', 'testpassword');
        console.log('User logged in:', user.toJSON());
    } catch (err) {
        console.error('Error loggin in: ', err);
    }
};

testUserSignup();
testUserLogin();