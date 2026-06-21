const db = require("./config/db");

async function createTable() {
  try {
    await db.query(`
      CREATE TABLE github_profiles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) UNIQUE,
        name VARCHAR(255),
        public_repos INT,
        followers INT,
        following INT,
        total_stars INT,
        most_used_language VARCHAR(100),
        profile_url VARCHAR(255),
        analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log("Table Created Successfully");
  } catch (error) {
    console.error(error);
  }
}

createTable();