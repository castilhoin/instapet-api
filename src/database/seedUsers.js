const User = require('../models/User');
const db = require('../config/database');

const seedUsers = [
  {
    firstName: 'Alice',
    lastName: 'Cole',
    email: 'alice@example.com',
    passwordHash: '123456',
  },
  {
    firstName: 'Brian',
    lastName: 'Smith',
    email: 'brian@example.com',
    passwordHash: '123456',
  },
  {
    firstName: 'Charlie',
    lastName: 'Hawk',
    email: 'charlie@example.com',
    passwordHash: '123456',
  },
];

User.insertMany(seedUsers).then(res => console.log(res)).catch(e => console.log(e));
