<?php
$mysqli = @new mysqli('localhost', 'root', '', 'attraction');

if (!$mysqli) {
    die("Error");
}
else
{
    echo "Всё гуд";
}
?>
