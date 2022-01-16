function switchCSS(windowsize) {
	  if (windowsize > 800) {
		$("#switchable").attr("href", "css/desktop.css");
	  } else {
		 $("#switchable").attr("href", "css/mobile.css"); 
	  }
	}

$(document).ready(function() {
	switchCSS($(this).width());

	$(window).resize(function() {
		switchCSS($(this).width());
		});
});


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
