document
  .getElementById("hiButton")
  .addEventListener("click", welcomeFunction);

function welcomeFunction() {
  let uName = document.getElementById("username").value;
  let passW = document.getElementById("password").value;

  const signup = ["Your username is ", "Your password is ", ];
 
  document.getElementById("usernameOutput").innerHTML =
    signup[0] +
    uName +
    ".  " +
    signup[1] + 
    passW +
    ".";
  }