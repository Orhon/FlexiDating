
function addFavorite(checkboxElem) {
    scrumlib.addProperty("favoritten", "String", "");
    scrumlib.addProperty("favorGevers", "String", "");
   // scrumlib.addProperty("provincie", "String", "");
    scrumlib.save();
    var parameters = location.search.substring(1).split("?");
    //    console.log(parameters);
    var ipara = parameters;
    //   console.log(ipara);

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
                oldFavorite = oldFavorite.concat(arrayFavoritten);
                updateMapfavorite.favoritten = JSON.stringify(oldFavorite);
            } else {
                updateMapfavorite.favoritten = JSON.stringify(oldFavorite);

            }
        }

        // alert("toegevoegd")

    }
    //else {

    //  alert("niet toegevoegd")
    //}
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

    // verdwijnen van favoritten  als checkbox onchecked
    //else {

    //  alert("niet toegevoegd")
    //}
    //    console.log(user[0].favorite, "   ", counter);
    scrumlib.updateDataset(ipara, updateMapfavGever)

    scrumlib.save();


}