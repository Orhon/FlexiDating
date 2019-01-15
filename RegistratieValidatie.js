function formValidation() {
    var uid = document.registratie.nickname;
    var uname1 = document.registratie.voornaam;
    var uname2 = document.registratie.familienaam;
    var brp = document.registratie.beroep;
    var ugebdat = document.registratie.geboorteDatum;
    // console.log(ugebdat);
    var uleftijd = document.registratie.leeftijd;
    var ugewicht = document.registratie.gewicht;
    var ugrootte = document.registratie.grootte;
    var uhaar = document.registratie.haarkleur;
    var uogen = document.registratie.oogkleur;
    var uemail = document.registratie.email;
    // console.log(uemail);

    var umsex = document.registratie.msex;
    var ufsex = document.registratie.fsex;
    var ulichaam = document.registratie.lichaamsbouw;
    var uprovincie = document.registratie.provincie;
    var ustadt = document.registratie.stadt;
    var upassid = document.registratie.passid;
    //   console.log(upassid);
    // foto validatie op het einde van deze code


    if (nickname_validation(uid, 5, 12)) {
        if (voornaam_validation(uname1, 7, 15)) {
            if (allLetter(uname1)) {
                if (familienaam_validation(uname2, 7, 15)) {
                    if (allLetter(uname2)) {
                        if (beroep_validation(brp, 5, 12)) {
                            if (allLetter(brp)) {
                                if (geboorteDatum_validation(ugebdat)) {
                                    //if (alphanumeric(uadd)) {
                                    if (allnumeric(uleftijd)) {
                                        if (allnumeric(ugewicht)) {
                                            if (allnumeric(ugrootte)) {
                                                if (haarSelect(uhaar)) {
                                                    if (ogenSelect(uogen)) {
                                                        if (validateEmail(uemail)) {
                                                            if (validateGeslacht(umsex, ufsex)) {
                                                                if (lichaamsBouwSelect(ulichaam)) {
                                                                    if (provincieSelect(uprovincie)) {
                                                                        if (stadt_validation(ustadt, 7, 15)) {
                                                                            if (allLetter(ustadt)) {
                                                                                if (passid_validation(upassid, 7, 12)) {}
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return false;

}

function nickname_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        alert("Nickname should not be empty / length be between " + mx + " to " + my);
        uid.focus();
        return false;
    }
    return true;
}

function voornaam_validation(uname1, mx, my) {
    var uname1_len = uname1.value.length;
    if (uname1_len == 0 || uname1_len >= my || uname1_len < mx) {
        alert("Voornaam should not be empty / length be between " + mx + " to " + my);
        uname1.focus();
        return false;
    }
    return true;
}

function familienaam_validation(uname2, mx, my) {
    var uname2_len = uname2.value.length;
    if (uname2_len == 0 || uname2_len >= my || uname2_len < mx) {
        alert("Familienaam should not be empty / length be between " + mx + " to " + my);
        uname2.focus();
        return false;
    }
    return true;
}


function beroep_validation(brp, mx, my) {
    var brp_len = brp.value.length;
    if (brp_len == 0 || brp_len >= my || brp_len < mx) {
        alert("Beroep should not be empty / length be between " + mx + " to " + my);
        brp.focus();
        return false;
    }
    return true;
}

/*function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
        return true;
    } else {
        alert('Geboortedatum must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}*/


/*function geboorteDatum_validation(ugebdat) {

    // First check for the pattern
    var regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
    console.log(ugebdat);
    if (!regex_date.test(ugebdat)) {
        // console.log(ugebdat);
        return false;


    }

    // Parse the date parts to integers
    var parts = ugebdat.split("-");
    var day = parseInt(parts[2], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[0], 10);

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12) {
        alert("blalblalala ");
        return false;
    }

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        monthLength[1] = 29;
    }

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
}*/

function geboorteDatum_validation(ugebdat) {
    var lblError = document.getElementById("lblError");

    //Get the date from the TextBox.
    var dateString = document.getElementById("geboorteDatum").value;
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
    //var regex = /^\d{4}\-\d{1,2}\-\d{1,2}$/;

    //Check whether valid dd/MM/yyyy Date Format.
    if (regex.test(dateString)) {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        lblError.innerHTML = "Eligibility 18 years ONLY."
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
            return false;
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

            //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    return false;
                }
            }
        }
        lblError.innerHTML = "";
        return true;
    } else {
        lblError.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
        return false;
    }
}



// ook voor ugewicht en ugrootte
function allnumeric(uleftijd) {
    var numbers = /^[0-9]+$/;
    if (uleftijd.value.match(numbers)) {
        return true;
    } else {
        alert('ZIP code must have numeric characters only');
        uleftijd.focus();
        return false;
    }
}

function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    } else {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}


function haarSelect(uhaar) {
    if (uhaar.value == "Default") {
        alert('Select haarKleur from the list');
        uhaar.focus();
        return false;
    } else {
        return true;
    }
}

function ogenSelect(uogen) {
    if (uogen.value == "Default") {
        alert('Select ogenKleur from the list');
        uogen.focus();
        return false;
    } else {
        return true;
    }
}


function validateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

function validateGeslacht(umsex, ufsex) {
    x = 0;

    if (umsex.checked) {
        x++;
    }
    if (ufsex.checked) {
        x++;
    }
    if (x == 0) {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    } else {
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
}

function lichaamsBouwSelect(ulichaam) {
    if (ulichaam.value == "Default") {
        alert('Select lichaamsbouw from the list');
        ulichaam.focus();
        return false;
    } else {
        return true;
    }
}

function provincieSelect(uprovincie) {
    if (uprovincie.value == "Default") {
        alert('Select provincie from the list');
        uprovincie.focus();
        return false;
    } else {
        return true;
    }
}

function stadt_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        alert("Stadt should not be empty / length be between " + mx + " to " + my);
        uid.focus();
        return false;
    }
    return true;
}


function passid_validation(upassid, mx, my) {
    var upassid_len = upassid.value.length;
    if (upassid_len == 0 || upassid_len >= my || upassid_len < mx) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        upassid.focus();
        return false;
    }
    return true;
}

function ValidateFileUpload() {
    var fuData = document.getElementById('fileChooser');
    var FileUploadPath = fuData.value;

    //To check if user uploaded any file
    if (FileUploadPath == '') {
        alert("Please upload an image");

    } else {
        var Extension = FileUploadPath.substring(
            FileUploadPath.lastIndexOf('.') + 1).toLowerCase();

        //The file uploaded is an image

        if (Extension == "gif" || Extension == "png" || Extension == "bmp" ||
            Extension == "jpeg" || Extension == "jpg") {

            // To Display
            if (fuData.files && fuData.files[0]) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    $('#blah').attr('src', e.target.result);
                }

                reader.readAsDataURL(fuData.files[0]);
            }

        }

        //The file upload is NOT an image
        else {
            alert("Photo only allows file types of GIF, PNG, JPG, JPEG and BMP. ");

        }
    }
}