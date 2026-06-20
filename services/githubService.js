const axios = require("axios");

const {
  saveProfile
} = require("../models/profileModel");

const analyzeGithubProfile = async (username) => {

  const userResponse = await axios.get(
    `https://api.github.com/users/${username}`
  );

  const repoResponse = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );

  const user = userResponse.data;
  const repos = repoResponse.data;

  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  const languageCount = {};

  repos.forEach((repo) => {
    if (repo.language) {
      languageCount[repo.language] =
        (languageCount[repo.language] || 0) + 1;
    }
  });

  let language = "N/A";
  let max = 0;

  for (const lang in languageCount) {
    if (languageCount[lang] > max) {
      max = languageCount[lang];
      language = lang;
    }
  }

  const profileData = {
    username: user.login,
    name: user.name,
    publicRepos: user.public_repos,
    followers: user.followers,
    following: user.following,
    totalStars,
    language,
    profileUrl: user.html_url
  };

  await saveProfile(profileData);

  return profileData;
};

module.exports = {
  analyzeGithubProfile
};