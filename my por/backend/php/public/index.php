<?php
// Simple router to serve frontend files or API response
$request = $_SERVER['REQUEST_URI'];

// Handle API
if ($request === '/api/hello') {
    header('Content-Type: application/json');
    echo json_encode(['message' => 'Hello from PHP backend! [System Status: Secure]']);
    exit;
}

// Serve static frontend files
// Path: backend/php/public/ --> go up 3 levels to project root, then into frontend/public
$frontend_dir = realpath(__DIR__ . '/../../../frontend/public');

// Fallback: try one more level up (in case of path resolution issues)
if (!$frontend_dir) {
    $frontend_dir = realpath(__DIR__ . '/../../../../frontend/public');
}

// Debug: if still not found, log and show error
if (!$frontend_dir) {
    http_response_code(500);
    echo "Frontend directory not found. Checked: " . __DIR__ . '/../../../frontend/public';
    exit;
}

// Base case, default to index.html
$file = $frontend_dir . '/index.html';

// Extract path cleanly (handling potential query strings)
$parsedUrl = parse_url($request);
$path = $parsedUrl['path'] ?? '/';

if ($path !== '/') {
    $file = $frontend_dir . $path;
}

// Basic security checks to prevent directory traversal
$realBase = realpath($frontend_dir);
$realFile = realpath($file);

if ($realBase && $realFile && strpos($realFile, $realBase) === 0 && file_exists($realFile) && !is_dir($realFile)) {
    // Serve the file with correct mime type
    $extension = pathinfo($realFile, PATHINFO_EXTENSION);
    $mime = 'text/plain';
    if ($extension === 'html') $mime = 'text/html';
    if ($extension === 'css') $mime = 'text/css';
    if ($extension === 'js') $mime = 'application/javascript';
    if ($extension === 'png') $mime = 'image/png';
    if ($extension === 'jpg' || $extension === 'jpeg') $mime = 'image/jpeg';
    
    header("Content-Type: $mime");
    readfile($realFile);
    exit;
}

// 404 Not Found
http_response_code(404);
echo "404 Not Found";