<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/profiel.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare profiel object
$profiel = new Profiel($db);
 
// get id of profiel to be edited
$data = json_decode(file_get_contents("php://input"));
 
// set ID property of profiel to be edited

if (!empty($data->id)) {
    $profiel->id = $data->id;

    if(!empty($data->id)){ $profiel->id = $data->id;}
    if(!empty($data->familienaam)){ $profiel->familienaam = $data->familienaam;}
    if(!empty($data->voornaam)){ $profiel->voornaam = $data->voornaam;}
    if(!empty($data->geboortedatum)){ $profiel->geboortedatum = $data->geboortedatum;}
    if(!empty($data->email)){ $profiel->email = $data->email;}
    if(!empty($data->nickname)){ $profiel->nickname = $data->nickname;}
    if(!empty($data->foto)){ $profiel->foto = $data->foto;}
    if(!empty($data->beroep)){ $profiel->beroep = $data->beroep;}
    if(!empty($data->sexe)){ $profiel->sexe = $data->sexe;}
    if(!empty($data->haarkleur)){ $profiel->haarkleur = $data->haarkleur;}
    if(!empty($data->oogkleur)){ $profiel->oogkleur = $data->oogkleur;}
    if(!empty($data->grootte)){ $profiel->grootte = $data->grootte;}
    if(!empty($data->gewicht)){ $profiel->gewicht = $data->gewicht;}
    if(!empty($data->wachtwoord)){ $profiel->wachtwoord = $data->wachtwoord;}

     
    // update the profiel
    if ($profiel->update()) {
 
        // set response code - 200 ok
        http_response_code(200);
 
        // tell the user
        echo json_encode(array("message" => "profiel was updated."));
    }else {
 
        // set response code - 503 service unavailable
        http_response_code(503);
     
        // tell the user
        echo json_encode(array("message" => "Unable to update profiel."));
    }
}
 
// if unable to update the profiel, tell the user
else {
 
    // set response code - 503 service unavailable
    http_response_code(503);
 
    // tell the user
    echo json_encode(array("message" => "Unable to update profiel : geef id op."));
}
?>