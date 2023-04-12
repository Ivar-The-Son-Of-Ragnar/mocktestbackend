const express = require("express");
const router = express.Router();

const mockTestCreate = require('../controllers/teachers/mockTestCreateController');
const getMockTestsByAuthor = require("../controllers/teachers/mockTestListTController");
const teacherLeaderboard = require("../controllers/teachers/getLeaderBoard");

// GET route for retrieving the mock tests authored by a specific teacher
router.post('/mock-tests', getMockTestsByAuthor);
router.post('/mock-tests/create', mockTestCreate);
router.post('/t-leaderboard',teacherLeaderboard)
module.exports = router;