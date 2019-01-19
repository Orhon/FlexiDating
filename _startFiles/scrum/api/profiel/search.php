<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/core.php';
include_once '../config/database.php';
include_once '../objects/profiel.php';
include_once '../objects/filter.php';
 
// instantiate database and profiel object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$profiel = new Profiel($db);
$filter = new Filter();

$filter->id = $_GET["id"];
$filter->familienaam = $_GET["familienaam"];
$filter->voornaam = $_GET["voornaam"];
$filter->geboortedatum = $_GET["geboortedatum"];
$filter->email = $_GET["email"];
$filter->nickname = $_GET["nickname"];
$filter->beroep = $_GET["beroep"];
$filter->sexe = $_GET["sexe"];
$filter->haarkleur = $_GET["haarkleur"];
$filter->oogkleur = $_GET["oogkleur"];
$filter->grootte = $_GET["grootte"];
$filter->grootteOperator = $_GET["grootteOperator"];
$filter->gewicht = $_GET["gewicht"];
$filter->gewichtOperator = $_GET["gewichtOperator"];
$filter->wachtwoord = $_GET["wachtwoord"];
$filter->orderBy = $_GET["orderBy"];


// query profielen
//echo $profiel->search($filter);
$stmt = $profiel->search($filter);
$num = $stmt->rowCount();
 
// check if more than 0 record found
if ($num > 0) {
 
    // profielen array
    $profielen_arr = array();
    $profielen_arr["records"] = array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $profiel_item = array(
            "id" => $id,
            "familienaam" => $familienaam,
            "voornaam" => $voornaam,
            "geboortedatum" => $geboortedatum,
            "email" => $email,
            "nickname" => $nickname,
            "foto" => $foto,
            "beroep" => $beroep,
            "sexe" => $sexe,
            "haarkleur" => $haarkleur,
            "oogkleur" => $oogkleur,
            "grootte" => $grootte,
            "gewicht" => $gewicht,
            "wachtwoord" => $wachtwoord
        );
        array_push($profielen_arr["records"], $profiel_item);
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show profielen data
    echo json_encode($profielen_arr);
} else {
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user no profielen found
    echo json_encode(
        array("message" => "No profielen found.")
    );
}
?>