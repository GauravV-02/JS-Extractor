//Sha1 example
var sha1 = require('../node_module/sha1.js');
	
//create a button, any element with ID sha1
var file = document.getElementById('sha1');

file.addEventListener('change', function() {
    alert("Sha1 Digest of " + this.files[0].name + ": " + sha1(this.files[0].name).toString());
});
