<?php
require_once __DIR__ . '/../models/ProjectModel.php';

function getAllProjects() {
    $projects = getAllProjectsFromModel();
    echo json_encode($projects);
}

function getProjectById($id) {
    $project = getProjectByIdFromModel($id);
    if ($project) {
        echo json_encode($project);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Project not found']);
    }
}

function createProject() {
    $data = json_decode(file_get_contents("php://input"), true);
    $newProject = createProjectInModel($data);
    http_response_code(201);
    echo json_encode($newProject);
}
?>