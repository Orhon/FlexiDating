function Function() {
    console.log(document.cookie);
    var ca = document.cookie.split("=");
    console.log(ca);
    var user = scrumlib.getDatabaseById(ca[1]);
    var updatemap = {};

    var oldpasswprd = user[0].wachtwoord;



    var userSemail = document.getElementById('userEmail').value;
    var newpassword = document.getElementById('newPassword').value;
    var confirmpassword = document.getElementById('confirmPassword').value;
    if (userSemail == "" || newpassword == "" || confirmpassword == "") {
        alert('Please fill all the details');
    } else if (userSemail != user[0].email) {
        alert("Email doesn t match any email in the database ");
    } else if (oldpasswprd == newpassword) {
        alert("Old password and New Password cannot be same");
    } else if (newpassword != confirmpassword) {
        alert("password mismatch");
    } else {
        updatemap.wachtwoord = newpassword;
        scrumlib.updateDataset(user[0]._id, updatemap);
        scrumlib.save();
    }

}

function FunctionShowHidePass() {

    var input = document.getElementById("newPassword");

    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

function FunctionShowHideConf() {

    var input = document.getElementById("confirmPassword");

    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}