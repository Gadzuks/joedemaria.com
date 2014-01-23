<?php
$host="localhost";
$username="joedemar_jmd43";
$password="Patroy91";
$database="joedemar_EC";
$table="Posts";

//$timestamp = $_GET[function for computer time];
$m = $_POST["message"]; //sets HTML message value, retrieved from javascript, as variable $m

$connect = mysql_connect($host, $username , $password);  //Create connection ("Server", "Login name", "Password", "Database name")
if (!$connect)												//Check connection
{
	die ('could not connect: '. mysql_error());
 }
 
//create connection and select database
mysql_select_db($database, $connect);

//Inserts values into my table ('table column') with VALUES of ('what you want to insert')
$query = "INSERT INTO $table (`text`) VALUES ('$m')";
$success = mysql_query($query);

if($success){ //Gives validation that the insert worked
	echo "Inserted successfully into database!";
}
else{
	echo "There was an error.";
}

mysql_close($connect);
?>