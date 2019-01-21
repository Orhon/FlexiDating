function Function() {
    var userSemail = document.getElementById('userEmail').value;
    var ca = document.cookie.split("=");
    var condition = {email: {"waarde": userSemail, "match": "="}};
    console.log(scrumlib.getDatasetsByConditions(condition));
    var user = scrumlib.getDatasetsByConditions(condition);
    var updatemap = {};
    console.log(user);
    var newpassword = document.getElementById('newPassword').value;
    var confirmpassword = document.getElementById('confirmPassword').value;
    if ((userSemail == "") || (newpassword == "") || (confirmpassword ==""))
       {
        alert(' vul alle velden in A.U.B');
       }
    else
    { 
        if (user.length == 0) {
            alert("Email is niet in onze database ");
            
        }
        else
        {   
        var oldpasswprd = user[0].wachtwoord;
            if (oldpasswprd == newpassword) {
                alert("Nieuwe wachtwoord kan niet zelfde zijn als de oude ");
            } 
            else 
            {
                if (newpassword != confirmpassword) {
                    alert("Verkeerd combinatie ");
                } 
                else {
                    updatemap.wachtwoord = newpassword;
                    scrumlib.updateDataset(user[0]._id, updatemap);
                    scrumlib.save();
                    }
            }
        } 
             

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