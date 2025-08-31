<?php
// API Configuration endpoint
// This provides the Google Maps API key to the frontend without exposing it in HTML source

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

// Load environment variables from .env file if it exists
function loadEnv($path) {
    if (!file_exists($path)) {
        return false;
    }
    
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '=') !== false && strpos($line, '#') !== 0) {
            list($key, $value) = explode('=', $line, 2);
            $_ENV[trim($key)] = trim($value);
            putenv(trim($key) . '=' . trim($value));
        }
    }
    return true;
}

// Try to load .env file
loadEnv(__DIR__ . '/.env');

// Get API key from environment or use fallback
$apiKey = $_ENV['GOOGLE_API_KEY'] ?? getenv('GOOGLE_API_KEY') ?? 'AIzaSyAuC6uQvtDvk0xU3oHyrsd3Tt0iSD_Xiu8';

// Return configuration
echo json_encode([
    'googleMapsApiKey' => $apiKey,
    'timestamp' => time()
]);
?>
