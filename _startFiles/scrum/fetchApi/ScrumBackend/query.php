<?php declare (strict_types = 1);

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$var_get = '';
$stringsign = '"';

$profielen = json_decode(file_get_contents("profielen.json"), true);

//get GET-data
foreach ($_GET as $key => $value) {
    $var_get .= $stringsign . $key . $stringsign . ':' . $stringsign . $value . $stringsign . ',';
}
$var_get = rtrim($var_get, ',');

var_dump($profielen, $var_get);

$num = 1;

if ($num > 0) {
    // set response code - 200 OK
    http_response_code(200);

    // show products data in json format
    echo json_encode($products_arr);
} else {

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no products found
    echo json_encode(
        array("message" => "No products found.")
    );
}
