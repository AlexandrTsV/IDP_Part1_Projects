<?php
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

$postdata = json_decode(file_get_contents("php://input"), true);
$data = json_decode(file_get_contents('database/users.json'), true);
$res = false;

if ($postdata["username"] != null)
{
    foreach ($data as $key => $user) {
        if ($user["username"] == $postdata["username"]) {
            $res = true;
        }
    }

    echo(!$res);

    if (!$res)
    {
        array_push($data, [
            "username" => $postdata["username"], 
            "address" => $postdata["address"], 
            "birth" => $postdata["birth"], 
            "phone" => $postdata["phone"]
        ]);
    }
}

file_put_contents('database/users.json', json_encode($data));
?>