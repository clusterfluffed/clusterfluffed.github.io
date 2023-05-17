<!DOCTYPE html>
<html>
 
<head>
    <title>Insert Page page</title>
</head>
 
<body>
        <?php
 
        // servername => localhost
        // username => root
        // password => empty
        // database name => user
        $conn = mysqli_connect("localhost", "root", "", "user");
         
        // Check connection
        if($conn === false){
            die("ERROR: Could not connect. "
                . mysqli_connect_error());
        }
         
        // Taking all 5 values from the form data(input)
        $register_user_id = $_REQUEST['register-user-id'];
        $name = $_REQUEST['name'];
        $email = $_REQUEST['email'];
        $pswd =  $_REQUEST['pswd'];
        $register_date = $_REQUEST['register-date'];
        
        
         
        // Performing insert query execution
        // here our table name is college
        $sql = "INSERT INTO user  VALUES ('$register_user_id',
            '$name','$email','$pswd','$register_date')";
         
        if(mysqli_query($conn, $sql)){
            echo "<h3>data stored in a database successfully."
                . " Please browse your localhost php my admin"
                . " to view the updated data</h3>";
 
            echo nl2br("\n$register_user_id\n $name\n "
                . "$email\n $pswd\n $register_date");
        } else{
            echo "ERROR: Hush! Sorry $sql. "
                . mysqli_error($conn);
        }
         
        // Close connection
        mysqli_close($conn);
        ?>
</body>
 
</html>