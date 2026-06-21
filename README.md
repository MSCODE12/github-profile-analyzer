# GitHub Profile Analyzer API

## Project Overview

GitHub Profile Analyzer is a backend application built using Node.js, Express.js, MySQL, and GitHub Public API.

The application fetches GitHub user profile information, analyzes useful insights, stores the results in a MySQL database, and provides APIs to retrieve stored profile data.

## Tech Stack

* Node.js
* Express.js
* MySQL (Aiven Cloud)
* GitHub Public API
* Render Deployment

## Features

* Analyze GitHub profile by username
* Fetch profile data from GitHub API
* Calculate useful insights
* Store profile analysis in MySQL database
* Retrieve all analyzed profiles
* Retrieve a single analyzed profile

## API Endpoints

### Analyze GitHub Profile

POST /api/github/analyze/:username

Example:

POST /api/github/analyze/MSCODE12

### Get All Profiles

GET /api/github/profiles

### Get Single Profile

GET /api/github/profiles/:username

Example:

GET /api/github/profiles/MSCODE12

## Live Deployment

https://github-profile-analyzer-1-r1ky.onrender.com

## GitHub Repository

https://github.com/MSCODE12/github-profile-analyzer

## Database

MySQL hosted on Aiven Cloud

## Author

Madni Shaikh

B.Tech Computer Science and Technology (2025)
