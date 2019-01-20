function validate() {
    //  console.log(scrumlib.login(login_email.value, login_pw.value));
    //var restoredSession = JSON.parse(localStorage.getItem('flexidata'));
    // console.log(restoredSession[7].email,"  , ", restoredSession[7].passid);
    //  localStorage.getItem('session', JSON.stringify(profielData));
    //   console.log("restoredSession");
  //  scrumlib.addProperty("favoritten", "String", "");
    //scrumlib.addProperty("favorGevers", "String", "");
   // scrumlib.addProperty("provincie", "String", "");
    //scrumlib.save();
var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var id = scrumlib.login(username, password);

    document.cookie = "id" + "=" + id + ";expires=" + 100;
    //console.log( document.cookie);

    //alert(id);
    if (scrumlib.login(username, password)) {

        window.location.href = "persoonlijkepagina.html"; // Redirecting to other page.
    } else {
        alert("You have entered wrong username or password;");

    }
    //console.log( document.getElementsByTagName("form"));
    //var restoredSession = ;
    //console.log(restoredSession);

    /*if (username == restoredSession.email && password == restoredSession.passid){


    }*/

    //
    // Disabling fields after 3 attempts.
    console.log(document.cookie);

}