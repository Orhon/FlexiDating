
function validate(){
    //  console.log(scrumlib.login(login_email.value, login_pw.value));
     //var restoredSession = JSON.parse(localStorage.getItem('flexidata'));
    // console.log(restoredSession[7].email,"  , ", restoredSession[7].passid);
    //  localStorage.getItem('session', JSON.stringify(profielData));
  //   console.log("restoredSession");
  var username = document.getElementById('email').value;
  var password = document.getElementById('password').value;
 
  var id = scrumlib.login(username, password);
  alert(id);
  //alert(id);
  if (scrumlib.login(username, password)){    
  
      window.location.href = "private.html"; // Redirecting to other page.
  }else{
      alert("You have entered wrong username or password;");
  
  }
  //console.log( document.getElementsByTagName("form"));
  //var restoredSession = ;
  //console.log(restoredSession);
  
  /*if (username == restoredSession.email && password == restoredSession.passid){
  
      
  }*/
  
  //
  // Disabling fields after 3 attempts.
  
  
  }
