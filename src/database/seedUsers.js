const User = require('../models/User');
const db = require('../config/database');

User.deleteMany({})
  .then(res => console.log(res))
  .catch(e => console.log(e));

const seedUsers = [
  {
    email: 'alice@example.com',
    passwordHash: '12345678',
    username: 'cole_alice',
    firstName: 'Alice',
    lastName: 'Cole',
  },
  {
    email: 'brian@example.com',
    passwordHash: '12345678',
    username: 'briansm',
    firstName: 'Brian',
    lastName: 'Smith',
  },
  {
    email: 'charlie@example.com',
    passwordHash: '12345678',
    username: 'charlie_',
    firstName: 'Charlie',
    lastName: 'Hawk',
  },
];

User.insertMany(seedUsers)
  .then(res => console.log(res))
  .catch(e => console.log(e));
