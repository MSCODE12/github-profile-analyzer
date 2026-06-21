const db = require("./config/db");

async function test() {
  try {
    const [rows] = await db.query("SELECT 1 AS test");
    console.log("Database Connected Successfully");
    console.log(rows);
  } catch (error) {
    console.error("Connection Failed:");
    console.error(error);
  }
}

test();