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