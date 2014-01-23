<?php
$host="localhost";
$username="joedemar_jmd43";
$password="Patroy91";
$database="joedemar_EC";
$table="Posts";

//Create connection ("Server", "Login name", "Password", "Database name")
$connect = mysql_connect($host, $username , $password); 
 //Check connection
if (!$connect)
{
	die ('could not connect: '. mysql_error());
}
 
//create connection and select database
mysql_select_db($database, $connect);

//select text column and orders them by most recent postID
$query = "SELECT text FROM $table ORDER BY postID DESC";
$result = mysql_query($query);

//create an array of recent responses
while($row = mysql_fetch_array($result)){
	$rows[] = $row['text'];
}
echo json_encode($rows);

mysql_close($connect);
?>