//var profielen = {};

// Ahora la variable restoredSession contiene el objeto que fue guardado
// en localStorage

/*
(function() {
	function toJSONString( form ) {
		var obj = {};
        var elements = form.querySelectorAll( "input, select, textarea" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;
            

			if( name ) {
				obj[ name ] = value;
			}
		}

		return JSON.stringify( obj );
	}

	document.addEventListener("DOMContentLoaded", function() {
        var form = document.getElementById( "registratie" );
        console.log(form);
		var output = document.getElementById( "output" );
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var json = toJSONString( this );
			output.innerHTML = json;

		}, false);

	});

})();
var formElements=document.registratie;    
var postData={};
for (var i=0; i<formElements.length; i++)
console.log(formElements[i].name);
if (formElements[i].type!="submit") 
    postData[formElements[i].name]=formElements[i].value;
    //we dont want to include the submit-buttom
   */     
/*
function formToJson(){
    var formElement = document.getElementsByTagName("form")[0],
    
        inputElements = formElement.getElementsByTagName("input"),
        jsonObject = {};
        console.log(formElement);
    for(var i = 0; i < inputElements.length; i++){
        var inputElement = inputElements[i];
        console.log(inputElement);
        jsonObject[inputElement.name] = inputElement.value;

    }
    return JSON.stringify(jsonObject);
    
}
var json = formToJson();
			output.innerHTML = postData;*/