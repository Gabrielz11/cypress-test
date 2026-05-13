const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT
  )`);

  // Insert a test user if not exists
  db.get("SELECT * FROM users WHERE email = ?", ["user@example.com"], (err, row) => {
    if (!row) {
      db.run("INSERT INTO users (email, password) VALUES (?, ?)", ["user@example.com", "password123"]);
      console.log("Test user created: user@example.com / password123");
    }
  });
});

module.exports = db;
