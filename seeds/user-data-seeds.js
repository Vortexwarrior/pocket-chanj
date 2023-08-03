const {User} = require('../models');

const userData = [
    {
      username: "Johnny Rose",
      email: "johnny@roseschitt.com",
      password: "$$$Money4Ros3s$$$"
    },
    {
      username: "Moira Rose",
      email: "moira@rosebudd.com",
      password: "B3b3S3t#3th3G1gs"
    },
    {
      username: "David Rose",
      email: "d.rose@simplythebest.com",
      password: "R0s3Bud$AreRed"
    },
    {
      username: "Alexis Rose",
      email: "alexis@vavavoom.com",
      password: "A-L3xis$G4l"
    },
    {
      username: "Roland Schitt",
      email: "mayor@schittscreek.gov",
      password: "$ch!ttH@pp3ns"
    }
  ];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;