<script src="profielen.json" type="text/javascript"> </script>
 
window.onload = function () {
    scrumlib.addProperty("favorite", "String", "");
    scrumlib.addProperty("provincie", "String", "");
    scrumlib.save();
var profielen = {};
button = document.getElementById("test");
button.addEventListener("click", function (e) {

    profielen = JSON.parse(jsonProfielen);
    console.log(profielen.voornaam[1].voornaam);
    var random = document.getElementById('infokopjes');
    random.appendChild(kiesRandomProfiel());
 


    function kiesRandomProfiel(json){
     // @json JSON string
 
     var randomProfiel = document.createDocumentFragment();
 
     return randomProfiel;
    }
}

} //einde window.onload