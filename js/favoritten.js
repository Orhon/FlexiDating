function favKnop(pFavknop, user, user1) {
    var knopClass = favKnopchange(user, user1);
    console.log(knopClass);
    pFavknop.setAttribute('class', knopClass);
    pFavknop.setAttribute('onclick', "myFunction(this)");
    console.log(pFavknop);
}

function favKnopchange(user, user1) {
    if (user[0].favoritten == "[]" || user[0].favoritten == "") {
        var added = "fa fa-thumbs-up";
    } else {

        let oldFavorite = JSON.parse(user[0].favoritten);
        console.log(oldFavorite.indexOf(user1[0]._id), user1[0]._id);
        if (oldFavorite.indexOf(user1[0]._id) > -1) {

            added = "fa fa-thumbs-down";
        } else {
            added = "fa fa-thumbs-up";
            console.log(added);
        }
    }
    return added;
}

function myFunction(x) {
    addFavorite(x);
    x.classList.toggle("fa-thumbs-down")
    console.log(x.classList.toggle("fa-thumbs-down"));
}

function addFavorite(x) {
    scrumlib.addProperty("favoritten", "String", "");
    scrumlib.addProperty("favorGevers", "String", "");
    // scrumlib.addProperty("provincie", "String", "");
    scrumlib.save();
    var parameters = location.search.substring(1).split("?");
    //    console.log(parameters);
    var ipara = parameters;


    var user1 = scrumlib.getDatasetById(ipara);
    var ca = document.cookie.split('=');
    var user = scrumlib.getDatasetById(ca[1]);

    var favUser = scrumlib.getDatasetById(ipara);

    var arrayFavoritten = [favUser[0]._id];

    var updateMapfavorite = {};


    if (x.classList.toggle("fa-thumbs-down")) {
        //  if (x.checked) {
        console.log('adding');
        var add = "true";
        if (user[0].favoritten == "[]" || user[0].favoritten == "") {
            updateMapfavorite.favoritten = JSON.stringify(arrayFavoritten);
        } else {
            let oldFavorite = JSON.parse(user[0].favoritten);
            if (oldFavorite.indexOf(favUser[0]._id) < 0) {
                //  updateMapfavorite.favoritten = favUser[0]._id;

                oldFavorite = oldFavorite.concat(arrayFavoritten);
                updateMapfavorite.favoritten = JSON.stringify(oldFavorite);
            } else {
                updateMapfavorite.favoritten = JSON.stringify(oldFavorite);

            }
        }

    } else {

        let oldFavorite1 = JSON.parse(user[0].favoritten);
        console.log(oldFavorite1, 'before');
        if (oldFavorite1.indexOf(favUser[0]._id) > -1) {
            console.log(favUser[0]._id, oldFavorite1, 'after');
            oldFavorite1.splice(oldFavorite1.indexOf(favUser[0]._id), 1);
            console.log(favUser[0]._id, oldFavorite1, 'after');
            updateMapfavorite.favoritten = JSON.stringify(oldFavorite1);
        }
        //  alert("niet toegevoegd")
    }
    scrumlib.updateDataset(ca[1], updateMapfavorite)

    scrumlib.save();
    //    console.log(user[0].favorite, "   ", counter);
    updateFavGevers(add, favUser, user, ipara);

}

function updateFavGevers(add, favUser, user, ipara) {


    var arrayFavGevers = [user[0]._id];
    var updateMapfavGever = {};
    //   if (checkboxElem.checked) {
    if (add == "true") {
        console.log("favgever");
        if (favUser[0].favorGevers == "[]" || favUser[0].favorGevers == "") {
            //      if (favUser[0].favorGevers == '') {
            updateMapfavGever.favorGevers = JSON.stringify(arrayFavGevers);
        } else {
            let oldFavGever = JSON.parse(favUser[0].favorGevers);
            if (oldFavGever.indexOf(user[0]._id) < 0) {
                // updateMapfavGever.favorGevers = user[0]._id;
                oldFavGever = oldFavGever.concat(arrayFavGevers);
                updateMapfavGever.favorGevers = JSON.stringify(oldFavGever);
            } else {
                updateMapfavGever.favorGevers = JSON.stringify(oldFavGever);

            }
        }
        // alert("toegevoegd")
    } else {
        let oldFavGever1 = JSON.parse(favUser[0].favorGevers);
        if (oldFavGever1.indexOf(user[0]._id) > -1) {
            oldFavGever1.splice(oldFavGever1.indexOf(user[0]._id), 1);

            updateMapfavGever.favorGevers = JSON.stringify(oldFavGever1);
        } else {
            updateMapfavGever.favorGevers = JSON.stringify(oldFavGever1);

        }
        //  alert("niet toegevoegd")
    }
    scrumlib.updateDataset(ipara, updateMapfavGever)

    scrumlib.save();


}