function addFavorite(checkboxElem) {
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

    var favUser = user1;

    var arrayFavoritten = [favUser[0]._id];

    var updateMapfavorite = {};

    if (checkboxElem.checked) {
        if (user[0].favoritten == '') {
            updateMapfavorite.favoritten = JSON.stringify(arrayFavoritten);
        } else {
            let oldFavorite = JSON.parse(user[0].favoritten);
            if (oldFavorite.indexOf(favUser[0]._id) < 0) {
                updateMapfavorite.favoritten = favUser[0]._id;

                oldFavorite = oldFavorite.concat(arrayFavoritten);
                updateMapfavorite.favoritten = JSON.stringify(oldFavorite);
            } else {
                updateMapfavorite.favoritten = JSON.stringify(oldFavorite);

            }
        }

        // alert("toegevoegd")

    }
    else {
        let oldFavorite = JSON.parse(user[0].favoritten);
        console.log(oldFavorite, 'before');
        if (oldFavorite.indexOf(favUser[0]._id) > -1) {
            oldFavorite = oldFavorite.splice(oldFavorite.indexOf(favUser[0]._id), favUser[0]._id);
            console.log(oldFavorite, 'after');
            updateMapfavorite.favoritten = JSON.stringify(oldFavorite);
        }
        //  alert("niet toegevoegd")
    }
    scrumlib.updateDataset(ca[1], updateMapfavorite)

    scrumlib.save();
    //    console.log(user[0].favorite, "   ", counter);
    updateFavGevers(checkboxElem, favUser, user, ipara);

}
function updateFavGevers(checkboxElem, favUser, user, ipara) {


    var arrayFavGevers = [user[0]._id];
    var updateMapfavGever = {};
    if (checkboxElem.checked) {

        if (favUser[0].favorGevers == '') {
            updateMapfavGever.favorGevers = JSON.stringify(arrayFavGevers);
        } else {
            let oldFavGever = JSON.parse(favUser[0].favorGevers);
            if (oldFavGever.indexOf(user[0]._id) < 0) {
                updateMapfavGever.favorGevers = user[0]._id;
                oldFavGever = oldFavGever.concat(arrayFavGevers);
                updateMapfavGever.favorGevers = JSON.stringify(oldFavGever);
            } else {
                updateMapfavGever.favorGevers = JSON.stringify(oldFavGever);

            }
        }
        // alert("toegevoegd")
    }
    else {
        let oldFavGever = JSON.parse(favUser[0].favorGevers);
        if (oldFavGever.indexOf(user[0]._id) > -1) {
            oldFavGever = oldFavGever.splice(oldFavGever.indexOf(user[0]._id), user[0]._id);

            updateMapfavGever.favorGevers = JSON.stringify(oldFavGever);
        } else {
            updateMapfavGever.favorGevers = JSON.stringify(oldFavGever);

        }
        //  alert("niet toegevoegd")
    }
    scrumlib.updateDataset(ipara, updateMapfavGever)

    scrumlib.save();


}