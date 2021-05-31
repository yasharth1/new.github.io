<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
  <title>Login</title>
  <style>
    body {
      font-size: x-large;
      text-align: center;
    }
    .container {
      margin-top: 10px;
    }
    h1 {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <nav id="navbarNav" class="navbar navbar-expand-lg navbar-light bg-light">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
    </svg>
    <a class="navbar-brand"> Navbar</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="about.html">About</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/ColorChangingWebpage/reg.php">Login/register</a>
        </li>
      </ul>
    </div>
  </nav>
  <?php
  $server = "localhost";
  $user = "root";
  $pass = "";
  $db = "registration";
  $conn = mysqli_connect($server, $user,$pass,$db);
    if($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"]; 
    $password = $_POST["password"]; 
    $email = $_POST["email"];
    $sqli = "SELECT `email` FROM `users` WHERE `email`=" . '$email';
    $result = $conn->query($sqli);
    $sql = "INSERT INTO users ".
    "(username,email,password) "."VALUES ".
    "('$username','$email','$password')";
    $result = mysqli_query($conn, $sql);
    echo '
    <div class="alert alert-success d-flex align-items-center" role="alert">' . '<div>'
      . "<strong>Success! </strong>" . "You are" . " registered succesfully!"
      . '</div>' .
    '</div>';
    }
    elseif (!$conn) {
      die("Unable to connect to database");
    }
  ?>
  <div class="container">
    <h1>Register</h1>
    <form action="/ColorChangingWebpage/reg.php" method="post">
      <label for="username">Username:</label><br>
      <input type="text" class="form-control" id="username" name="username" placeholder="Create a username" required><br><br>
      <label for="email">Email: </label><br>
      <input type="email" class="form-control" id="email" name="email" placeholder="Enter your Email" required><br><br>
      <label for="password">Password: </label><br>
      <input type="password" class="form-control" id="password" name="password" placeholder="Create a password" required><br><br>
      <button type="submit" class="btn btn-primary btn-lg">Register</button>
    </form>
  </div>
</body>
</html>