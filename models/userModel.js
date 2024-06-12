const db = require('../config/db');


// usercreting q
const createUser = (email, password, callback) => {
  const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(query, [email, password], callback);
};

// get user q
const getUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], callback);
};

module.exports = {
  createUser,
  getUserByEmail
};
