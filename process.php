<?php

include_once('db.php');

$flag=0;
if(isset($_POST['user'])&&isset($_POST['pass'])&&isset($_POST['email']))
{
$username = mysql_real_escape_string($_POST['user']);
$password = mysql_real_escape_string($_POST['pass']);
$email = mysql_real_escape_string($_POST['email']);
 $result = mysql_query("SELECT * FROM signupdata");
while( $row = mysql_fetch_assoc( $result ))
{

if(($username== $row['username']) || ($email==$row['email']))
{
$flag++;
}
}
if($flag>0)
{
echo "exists";
}
else
{
$query=mysql_query("INSERT INTO signupdata (username,password,email) VALUES('$username','$password','$email')");
 if(!$query)
 {
  echo 'failed';
 }
}
}
?>