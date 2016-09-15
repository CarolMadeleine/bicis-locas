function validateForm(){
    var x = document.getElementById("name").value;
    if (x == null || x == "") {
        alert("ERROR");
        return false;
    };
     var x = document.getElementById("lastname").value;
    if (x == null || x == "") {
        alert("ERROR");
        return false;
    };
     var x = document.getElementById("input-email").value;
    if (x == null || x == "") {
        alert("ERROR");
        return false;
    };
     var x = document.getElementById("input-password").value;
    if (x == null || x == "") {
        alert("ERROR");
        return false;
    };

    var x = document.getElementById("input-password").value;
    if (isNaN(x) || x== "123456" || x== "098754" || x== "password" || x.length == 5 || /^\s+$/.test(x)) {
      window.alert ("No Válido") ;
    } else {
        return true;
    };

    var email = document.getElementById("input-email").value;
	if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
  	return false;
	};
    
    
}

