const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

// GET /api/projects
router.get('/projects', portfolioController.getAllProjects);

// GET /api/projects/:id
router.get('/projects/:id', portfolioController.getProjectById);

// POST /api/projects (demo)
router.post('/projects', portfolioController.createProject);

module.exports = router;