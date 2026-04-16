<?php
// In-memory database for demo
$projects = [
    [
        'id' => '1',
        'title' => 'PHP Security Framework',
        'description' => 'Custom PHP security library with input validation, CSRF protection, and XSS prevention.',
        'tags' => ['PHP', 'Security', 'OWASP'],
        'icon' => '🐘'
    ],
    [
        'id' => '2',
        'title' => 'REST API Gateway',
        'description' => 'API rate limiter and authentication middleware built in pure PHP.',
        'tags' => ['PHP', 'API', 'Middleware'],
        'icon' => '🔌'
    ],
    [
        'id' => '3',
        'title' => 'Portfolio CMS',
        'description' => 'Lightweight CMS for portfolio management with admin panel.',
        'tags'] = ['PHP', 'MySQL', 'CMS'],
        'icon' => '📝'
    ]
];

function getAllProjectsFromModel() {
    global $projects;
    return $projects;
}

function getProjectByIdFromModel($id) {
    global $projects;
    foreach ($projects as $project) {
        if ($project['id'] == $id) {
            return $project;
        }
    }
    return null;
}

function createProjectInModel($data) {
    global $projects;
    $newId = strval(count($projects) + 1);
    $newProject = [
        'id' => $newId,
        'title' => $data['title'] ?? 'New PHP Project',
        'description' => $data['description'] ?? '',
        'tags' => $data['tags'] ?? ['PHP'],
        'icon' => $data['icon'] ?? '🐘'
    ];
    $projects[] = $newProject;
    return $newProject;
}
?>