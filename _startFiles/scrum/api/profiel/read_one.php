<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/profiel.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare profiel object
$profiel = new Profiel($db);
 
// set ID property of record to read
$profiel->id = isset($_GET['id']) ? $_GET['id'] : die();
 
// read the details of profiel to be edited
$profiel->readOne();

if ($profiel->familienaam != null) {
    // create array
    $profiel_arr = array(
        "id" => $profiel->id,
        "familienaam" => $profiel->familienaam,
        "voornaam" => $profiel->voornaam,
        "geboortedatum" => $profiel->geboortedatum,
        "email" => $profiel->email,
        "nickname" => $profiel->nickname,
        "foto" => $profiel->foto,
        "beroep" => $profiel->beroep,
        "sexe" => $profiel->sexe,
        "haarkleur" => $profiel->haarkleur,
        "oogkleur" => $profiel->oogkleur,
        "grootte" => $profiel->grootte,
        "gewicht" => $profiel->gewicht,
        "wachtwoord" => $profiel->wachtwoord
    );
 
    // set response code - 200 OK
    http_response_code(200);
 
    // make it json format
    echo json_encode($profiel_arr);
} else {
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user profiel does not exist
    echo json_encode(array("message" => "profiel does not exist."));
}
?>