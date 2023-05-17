<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
    </style>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,400;0,600;0,900;1,400;1,600;1,900&display=swap');
    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <title>Kart Track</title>
  </head>
  <body>
    <div class="login-wrapper">
    <div class="form-container">
      <div class="img-container">
        <img class="logo-header" src="/Kart Track Logo.png" alt="Kart-Track-Logo" border="0" />
      </div>
    </div>
    <div class="button-form-container">
      <div class="button-form-container-inner">
        <div class="login-container-half ic1">
          <h4>First time here?</h4>
          <button class="register-btn" id="register">Register</button>
        </div>
        <div class="login-container-half ic2">
          <h4>Ready to Login?</h4>
          <button class="login-btn" id="login">Login</button>
        </div>
      </div>
    </div>
    <div action="insert.php" method="post" class="login-form-container" id="register-section" autocomplete="on" hidden="true">
      <form action="">
          <h1>Register</h1>
          <p>Please fill in the following info to create an account.</p>
          <hr>
          <div class="input-container-full ic1" hidden="true">
            <input type="text" name="register-user-id" id="register-user-id" value=""/>
          </div>
          <div class="input-container-full ic1">
            <label class="input-label" for="name">Name</label>
            <input type="text" placeholder="*Enter Your Name" name="name" id="name" required/>
          </div>
          <div class="input-container-full ic1">
            <label class="input-label" for="email">Email</label>
            <input type="email" placeholder="*Enter Email" name="email" id="email" required/>
          </div>
          <div class="input-container-full ic1">
            <label class="input-label" for="psw">Password</label>
            <input type="password" placeholder="*Enter Password (6 character minimum)" name="pswd" id="pswd" minlength="6" required/>
          </div>
          <div class="input-container-full ic1" hidden="true">
            <input type="text" name="register-date" id="register-date" value=""/>
          </div>
        
          <hr>
          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
      
          <button type="submit" class="registerbtn" id="register-button">Register</button>
      </form>
    </div>

    <div class="login-form-container" id="login-section" autocomplete="on" hidden="true">
      <form action="">
          <h1>Login</h1>
          <p>Welcome Back!</p>
          <hr>
          <div class="input-container-full ic1">
            <label class="input-label" for="login-email">Email</label>
            <input type="email" placeholder="*Enter Email" name="login-email" id="login-email" required/>
          </div>
          <div class="input-container-full ic1">
            <label class="input-label" for="login-psw">Password</label>
            <input type="password" placeholder="*Enter Password" name="login-psw" id="login-psw"  required/>
          </div>
          <button type="submit" class="registerbtn" id="login-button">Login</button>
      </form>
    </div>

    <div class="info-form-container">
      <div class="input-container-full ic1">
      <h1>Some info about Kart Track</h1>
      </div>
      <div class="input-container-full ic1">
      <h3>more words that might be informative</h3>
      </div>
      <div class="input-container-full ic1">
      <h3>Hey, look at what kart track can do</h3>
      </div>
      <div class="input-container-full ic1">
        <h4>Whats that... Some fancy screenshots?</h4>
      </div>
      <div class="input-container-full ic1">
        <h4>stuff</h4>
      </div>
      <div class="input-container-full ic1">
        <h4>more stuff</h4>
      </div>
    </div>

  </div>
    
    <script src="https://kit.fontawesome.com/a8027ef181.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="index-script.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCNBmAlN847-ZUXvvG5PU55SEV3foa01n4&libraries=places"></script>
  </body>
</html>