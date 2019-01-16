var profielData = {};

function formValidation() {
    var uid = document.registratie.nickname;
    // console.log(document.registratie[0].name);
    var uname1 = document.registratie.voornaam;
    var uname2 = document.registratie.familienaam;
    var brp = document.registratie.beroep;
    var ugebdat = document.registratie.geboorteDatum;
    //var uleftijd = document.registratie.leeftijd;
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
    var ustad = document.registratie.stad;
    var upassid = document.registratie.passid;
    var formElements = document.registratie;
    //   console.log(upassid);
    // foto validatie op het einde van deze code


    if (nickname_validation(uid, 5, 12)) {
        if (voornaam_validation(uname1, 3, 15)) {
            if (allLetter(uname1)) {
                if (familienaam_validation(uname2, 3, 15)) {
                    if (allLetter(uname2)) {
                        if (beroep_validation(brp, 5, 12)) {
                            if (allLetter(brp)) {
                                if (geboorteDatum_validation(ugebdat)) {
                                    //if (alphanumeric(uadd)) {
                                    // if (allnumeric(uleftijd)) {
                                    if (allnumeric(ugewicht)) {
                                        if (allnumeric(ugrootte)) {
                                            if (haarSelect(uhaar)) {
                                                if (ogenSelect(uogen)) {
                                                    if (validateEmail(uemail)) {
                                                        if (validateGeslacht(umsex, ufsex)) {
                                                            if (lichaamsBouwSelect(ulichaam)) {
                                                                if (provincieSelect(uprovincie)) {
                                                                    if (stad_validation(ustad, 4, 15)) {
                                                                        if (allLetter(ustad)) {
                                                                            if (passid_validation(upassid, 4, 12)) {
                                                                                if (ValidateFileUpload()) {
                                                                                    
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                    //   }
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
    //  console.log(uid_len);
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        alert("Nickname moet niet leeg zijn / lengte tussen " + mx + " en " + my);
        uid.focus();
        return false;
    }
    return true;
}

function voornaam_validation(uname1, mx, my) {
    var uname1_len = uname1.value.length;
    //   console.log(uname1_len);
    if (uname1_len == 0 || uname1_len >= my || uname1_len < mx) {
        alert("Voornaam moet niet leeg zijn / lengte tussen " + mx + " en " + my);
        uname1.focus();
        return false;
    }
    return true;
}

function familienaam_validation(uname2, mx, my) {
    var uname2_len = uname2.value.length;
    if (uname2_len == 0 || uname2_len >= my || uname2_len < mx) {
        alert("Familienaam moet niet leeg zijn / lengte tussen " + mx + " en " + my);
        uname2.focus();
        return false;
    }
    return true;
}


function beroep_validation(brp, mx, my) {
    var brp_len = brp.value.length;
    if (brp_len == 0 || brp_len >= my || brp_len < mx) {
        alert("Beroep moet niet leeg zijn / lengte tussen " + mx + " en " + my);
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

function geboorteDatum_validation() {
    var lblError = document.getElementById("lblError");

    //Get the date from the TextBox.
    var dateString = document.getElementById("geboorteDatum").value;
    //var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
    var regex = /^\d{4}\-\d{1,2}\-\d{1,2}$/;

    //Check whether valid dd/MM/yyyy Date Format.
    if (regex.test(dateString)) {
        var parts = dateString.split("-");
        var dtDOB = new Date(parts[0] + "-" + parts[1] + "-" + parts[2]);
        var dtCurrent = new Date();
        lblError.innerHTML = "18 jaar ALLEEN in aanmerking komend."
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
        lblError.innerHTML = "Voer ALLEEN de datum in het jjjj-MM-dd formaat in."
        return false;
    }
}

// ook voor uleftijd, ugewicht en ugrootte
function allnumeric(unummer) {
    var numbers = /^[0-9]+$/;
    if (unummer.value.match(numbers)) {
        return true;
    } else {
        alert("Vul alle velden in. Sommige velden (gewicht, grootte) moeten ALLEEN numerieke tekens bevatten");
        unummer.focus();
        return false;
    }
}

function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    } else {
        alert("Vul alle velden in. Sommige velden (Nickname, Voornaam, FamilieNaam, Beroep, Stad) moeten ALLEEN uit tekens bestaan");
        uname.focus();
        return false;
    }
}


function haarSelect(uhaar) {
    if (uhaar.value == "Default") {
        alert("Kiez de kleur van uw haar van de lijst");
        uhaar.focus();
        return false;
    } else {
        return true;
    }
}

function ogenSelect(uogen) {
    if (uogen.value == "Default") {
        alert("Kiez de kleur van uw ogen van de lijst");
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
        alert("U hebt een ongeldig e-mailadres of GEEN adres ingevoerd!");
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
        alert("Selecteer Man of Vrouw");
        umsex.focus();
        return false;
    } else {
        return true;
    }
}

function lichaamsBouwSelect(ulichaam) {
    if (ulichaam.value == "Default") {
        alert("Selecteer uw lichamsbouw van de lijst");
        ulichaam.focus();
        return false;
    } else {
        return true;
    }
}

function provincieSelect(uprovincie) {
    if (uprovincie.value == "Default") {
        alert("Selecteer uw provincie van de lijst");
        uprovincie.focus();
        return false;
    } else {
        return true;
    }
}

function stad_validation(ustad, mx, my) {
    var ustad_len = ustad.value.length;
    if (ustad_len == 0 || ustad_len >= my || ustad_len < mx) {
        alert("Stad moet niet leeg zijn / lengte tussen " + mx + " en " + my);
        ustad.focus();
        return false;
    }
    return true;
}

function ValidateFileUpload() {
    var fuData = document.getElementById('fileChooser');
    var FileUploadPath = fuData.value;

    //To check if user upload any file
    if (FileUploadPath == '') {
        alert("Upload een afbeelding");

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
            alert("Met de foto kunnen ALLEEN de volgende bestandstypen gebruikt worden, namelijk: GIF, PNG, JPG, JPEG en BMP. ");

        }
    }
    console.log(document.registratie.length);
    for (var i = 0; i < document.registratie.length; i++) {
        if (document.registratie[i].type != "submit")
            console.log(document.registratie[i].value);
        profielData[document.registratie[i].name] = document.registratie[i].value;
    }
  //  localStorage.setItem('session', JSON.stringify(profielData));
 //   localStorage.setItem('session', JSON.stringify(profielData));
    console.log(scrumlib.createDataset(profielData));
}

function passid_validation(upassid, mx, my) {
    var upassid_len = upassid.value.length;
    if (upassid_len == 0 || upassid_len >= my || upassid_len < mx) {
        alert("Wachtwoord mag niet leeg zijn / lengte moet zijn tussen " + mx + " en " + my);
        upassid.focus();
        return false;
    } else {
        alert("Formulier succesvol ingediend");
        window.location.reload()
        return true;
    }
}
   
