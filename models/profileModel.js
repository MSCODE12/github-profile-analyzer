const db = require("../config/db");

const saveProfile = async (data) => {
  await db.query(
    `
    INSERT INTO github_profiles
    (
      username,
      name,
      public_repos,
      followers,
      following,
      total_stars,
      most_used_language,
      profile_url
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      data.username,
      data.name,
      data.publicRepos,
      data.followers,
      data.following,
      data.totalStars,
      data.language,
      data.profileUrl
    ]
  );
};

const getProfiles = async () => {
  const [rows] = await db.query(
    "SELECT * FROM github_profiles"
  );

  return rows;
};

const getProfileByUsername = async (username) => {
  const [rows] = await db.query(
    "SELECT * FROM github_profiles WHERE username = ?",
    [username]
  );

  return rows[0];
};

module.exports = {
  saveProfile,
  getProfiles,
  getProfileByUsername
};