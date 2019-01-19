<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// include database and object file
include_once '../config/database.php';
include_once '../objects/profiel.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare profiel object
$profiel = new Profiel($db);
 
// get profiel id
$data = json_decode(file_get_contents("php://input"));

if (!empty($data->id)) {
    // set profiel id to be deleted
    $profiel->id = $data->id;
 
    // delete the profiel
    if ($profiel->delete()) {
 
        // set response code - 200 ok
        http_response_code(200);
 
        // tell the user
        echo json_encode(array("message" => "profiel was deleted."));
    }else {
 
        // set response code - 503 service unavailable
        http_response_code(503);
     
        // tell the user
        echo json_encode(array("message" => "Unable to delete profiel."));
    }
}
 
// if unable to delete the profiel
else {
 
    // set response code - 503 service unavailable
    http_response_code(503);
 
    // tell the user
    echo json_encode(array("message" => "Unable to delete profiel : geef id op."));
}
?>