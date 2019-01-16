
function validate(){
    var restoredSession = JSON.parse(localStorage.getItem('flexidata'));
    console.log(restoredSession[0].email,"  , ", restoredSession[0].wachtwoord);
  //  localStorage.getItem('session', JSON.stringify(profielData));
var username = document.getElementsByTagName("form")[0].email.value;
var password = document.getElementsByTagName("form")[0].passid.value;
console.log(username);
//console.log(password);
if (username == restoredSession[0].email && password == restoredSession[0].wachtwoord){
    window.location.href = "private.html"; // Redirecting to other page.
}

alert("You have entered wrong username or password;");
// Disabling fields after 3 attempts.


}