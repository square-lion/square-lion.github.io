var ham = document.getElementsByClassName("hamnav-menu")[0];
var open = true;

function hamClicked(){
	if(!open){
		ham.style.display = "none";
		open = true;
	}
	else{
		ham.style.display = "inline";
		open = false;
	}
}
