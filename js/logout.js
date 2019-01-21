var x = document.cookie.split("=");
// <li id="zoeken"><a href="zoeken.html">zoeken</a></li>
// <li id="profiel"><a href="personalpage_private.html">persoonlijke pagina</a></li>
// <li id="login"><a href="login.html">login</a></li>
// <li id="register"><a href="registratie.html">registreer</a></li>
// <li id="logout"><a href="javascript:void(0);" onclick="logout()">Logout</a></li>
var menuLiLoggedIn = ['zoeken', 'personalpage_private','logout'];
var menuLiLoggedOut = ['login', 'registratie'];


if(x != null && x!=''){
    for (let i = 0; i < menuLiLoggedIn.length; i++) {
        console.log("is ingelogd");
        let element = document.createElement('li')
        element.setAttribute("id",menuLiLoggedIn[i])
        let link = document.createElement("a");
        link.setAttribute('href', menuLiLoggedIn[i] + ".html" );
        if(menuLiLoggedIn[i] == "personalpage_private" ){
            link.innerHTML = 'persoonlijke pagina'
        }else if(menuLiLoggedIn[i] == "logout"){
            link.innerHTML = menuLiLoggedIn[i];
            link.setAttribute('onclick',"logout()" );
            link.setAttribute('href', "javascript:void(0)" );
        }
        else{
            link.innerHTML = menuLiLoggedIn[i];
        }
        element.append(link);
        document.getElementById("menuUl").append(element);
    }   
}else{
    
    for (let i = 0; i < menuLiLoggedOut.length; i++) {
        let element = document.createElement('li')
        element.setAttribute("id",menuLiLoggedOut[i])
        let link = document.createElement("a");
        link.setAttribute('href', menuLiLoggedOut[i] + ".html" );
        link.innerHTML = menuLiLoggedOut[i];
        element.append(link);
        document.getElementById("menuUl").append(element);
    }   
}

// var logoutButton = document.getElementById("logout");
// var login = document.getElementById('login');
// var register = document.getElementById('registratie');
// var profiel = document.getElementById('personalpage_private');
// var zoeken = document.getElementById("zoeken");
// var usernaam = document.getElementById("userLogged");



// //checkLogin();
// function checkLogin() {
//     if(x != null && x!=''){
//         //wel ingelogd
//         login.setAttribute("style","display: none");
//         register.setAttribute("style","display: none");
    
//         logoutButton.setAttribute("style","display: block");
//         profiel.setAttribute("style","display: block");
//         zoeken.setAttribute("style","display: block");
//         usernaam.setAttribute("style","display: block;");
//     }else{
//         //niet ingelogd
//         logoutButton.setAttribute("style","display: none");
//         profiel.setAttribute("style","display: none");
//         zoeken.setAttribute("style","display: none");
//         usernaam.setAttribute("style","display: none; ");
    
//         login.setAttribute("style","display: block");
//         register.setAttribute("style","display: block");
//     }
// }


function logout() {
    document.cookie = "id" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href = "index.html";
}


