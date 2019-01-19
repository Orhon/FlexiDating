<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate profiel object
include_once '../objects/profiel.php';

$database = new Database();
$db = $database->getConnection();

$profiel = new Profiel($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// make sure data is not empty
if (!empty($data->id) &&
    !empty($data->familienaam) &&
    !empty($data->voornaam) &&
    !empty($data->geboortedatum) &&
    !empty($data->email) &&
    !empty($data->nickname) &&
    !empty($data->foto) &&
    !empty($data->beroep) &&
    !empty($data->sexe) &&
    !empty($data->haarkleur) &&
    !empty($data->oogkleur) &&
    !empty($data->grootte) &&
    !empty($data->gewicht) &&
    !empty($data->wachtwoord)) {
 
    // set profiel property values
    $profiel->id = $data->id;
    $profiel->familienaam = $data->familienaam;
    $profiel->voornaam = $data->voornaam;
    $profiel->geboortedatum = $data->geboortedatum;
    $profiel->email = $data->email;
    $profiel->nickname = $data->nickname;
    $profiel->foto = $data->foto;
    $profiel->beroep = $data->beroep;
    $profiel->sexe = $data->sexe;
    $profiel->haarkleur = $data->haarkleur;
    $profiel->oogkleur = $data->oogkleur;
    $profiel->grootte = $data->grootte;
    $profiel->gewicht = $data->gewicht;
    $profiel->wachtwoord = $data->wachtwoord;

 
    // create the profiel
    if ($profiel->create()) {
 
        // set response code - 201 created
        http_response_code(201);
 
        // tell the user
        echo json_encode(array("message" => "profiel was created."));
    }
 
    // if unable to create the profiel, tell the user
    else {
 
        // set response code - 503 service unavailable
        http_response_code(503);
 
        // tell the user
        echo json_encode(array("message" => "Unable to create profiel."));
    }
}
 
// tell the user data is incomplete
else {
 
    // set response code - 400 bad request
    http_response_code(400);
 
    // tell the user
    echo json_encode(array("message" => "Unable to create profiel. Data is incomplete."));
}
?>