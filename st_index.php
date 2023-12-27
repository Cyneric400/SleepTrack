<style><?php #include "html/styles.css";?></style>
<?php echo file_get_contents("html/header.html");
echo file_get_contents("html/body.html");?>
<script defer src="html/my_script.js"></script>

<?php 
/* The PHP below can take the data recieved from the form and put it
into a DB while JavaScript handles the display. This, however,
* seems like it could wind up in a race condition or something similar,
* so it might be a good idea to rig the JS to a DB fetch rather than
* an event listener. */

/*echo $_POST["sleep-input"]; echo "   ";
echo $_POST["bed-input"]; echo "    ";
echo $_POST["date-input"];?>
*/?>
