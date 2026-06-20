const {
  analyzeGithubProfile
} = require("../services/githubService");

const {
  getProfiles,
  getProfileByUsername
} = require("../models/profileModel");

const analyzeProfile = async (req, res) => {

  try {

    const username = req.params.username;

    const result =
      await analyzeGithubProfile(username);

    res.status(200).json(result);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

const getAllProfiles = async (req, res) => {

  const profiles =
    await getProfiles();

  res.json(profiles);

};

const getSingleProfile = async (req, res) => {

  const username =
    req.params.username;

  const profile =
    await getProfileByUsername(username);

  res.json(profile);

};

module.exports = {
  analyzeProfile,
  getAllProfiles,
  getSingleProfile
};