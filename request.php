<?php
function setState () {

}
$func = array (
    "state"=>setState()
);
if (isset($_POST['reg']) || isset($_POST['state'])){
    print_r ($_POST);
    // foreach ($_POST as $index=>$value) {
    //      echo "<p>index: $index value: $value </p>";
        
    // }
}
?>
