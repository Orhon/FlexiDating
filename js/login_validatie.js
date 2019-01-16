function validate(){
  //  console.log(scrumlib.login(login_email.value, login_pw.value));
  //  var restoredSession = JSON.parse(localStorage.getItem('flexidata'));
 //   console.log(restoredSession.email,"  , ", restoredSession.passid);
  //  localStorage.getItem('session', JSON.stringify(profielData));
var username = document.getElementsByTagName("form")[0].email.value;
var password = document.getElementsByTagName("form")[0].passid.value;
var restoredSession = scrumlib.login(username, password);
console.log(restoredSession);
//console.log(password);
/*if (username == restoredSession.email && password == restoredSession.passid){

    window.location.href = "private.html"; // Redirecting to other page.
}*/

//alert("You have entered wrong username or password;");
// Disabling fields after 3 attempts.


}