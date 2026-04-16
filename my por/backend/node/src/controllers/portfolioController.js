const Project = require('../models/Project');

// Get all projects
const getAllProjects = (req, res) => {
    const projects = Project.getAll();
    res.json(projects);
};

// Get project by ID
const getProjectById = (req, res) => {
    const project = Project.getById(req.params.id);
    if (project) {
        res.json(project);
    } else {
        res.status(404).json({ error: 'Project not found' });
    }
};

// Create new project (demo)
const createProject = (req, res) => {
    const newProject = Project.create(req.body);
    res.status(201).json(newProject);
};

module.exports = {
    getAllProjects,
    getProjectById,
    createProject
};