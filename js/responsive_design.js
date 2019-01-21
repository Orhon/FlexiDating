/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveMenu() {
    console.log("responsive script werkt");
    var x = document.getElementById("responseMenu");

    if (x.className === "topmenu") {
        x.className += " responsive";
    } else {
        x.className = "topmenu";
    }
}

function isMobileDevice() {
    
    let isMobileDevice = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)
    if (window.innerWidth <=600){
        isMobileDevice = false;
    }
    return isMobileDevice;
};


window.addEventListener("resize", myScript);


function myScript() {
    if(isMobileDevice){
        //hideMenu()
    }
};

function hideMenu(){
    logoutButton.setAttribute("style","display: none");
    profiel.setAttribute("style","display: none");
    zoeken.setAttribute("style","display: none");
    usernaam.setAttribute("style","display: none; ");

    login.setAttribute("style","display: none");
    register.setAttribute("style","display: none");
}