<?php
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

$postdata = json_decode(file_get_contents("php://input"), true);

$data = json_decode(file_get_contents('database/films.json'), true);

if ($postdata["title"] != null) {
    array_push($data, [
        "title" => $postdata["title"], 
        "producer" => $postdata["producer"], 
        "genre" => $postdata["genre"],
        "productionDate" => $postdata["productionDate"],
        "taken" => $postdata["taken"],
        "username" => $postdata["username"]
    ]);
}

file_put_contents('database/films.json', json_encode($data));
?>