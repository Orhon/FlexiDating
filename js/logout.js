var logoutButton = document.getElementById("logout");
var login = document.getElementById('login');
var register = document.getElementById('register');
var profiel = document.getElementById('profiel');
var zoeken = document.getElementById("zoeken");
var usernaam = document.getElementById("userLogged");


var x = document.cookie.split("=");


if(x != null && x!=''){
    //wel ingelogd
    login.setAttribute("style","display: none");
    register.setAttribute("style","display: none");

    logoutButton.setAttribute("style","display: block");
    profiel.setAttribute("style","display: block");
    zoeken.setAttribute("style","display: block");
    usernaam.setAttribute("style","display: block;color:white");
}else{
    //niet ingelogd
    logoutButton.setAttribute("style","display: none");
    profiel.setAttribute("style","display: none");
    zoeken.setAttribute("style","display: none");
    usernaam.setAttribute("style","display: none; ");

    login.setAttribute("style","display: block");
    register.setAttribute("style","display: block");
}

function logout() {
    document.cookie = "id" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href = "index.html";
}