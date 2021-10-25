fetch('news.json'){
	.then(function (responce){
		return responce.json();
	})
	.then(function (data){
    	appendData(data);
  	})
	.catch(function (err){
		console.log(err);
	});
}

function appendData(data) {
  var mainContainer = document.getElementById("menu-box");
  for (var i = 0; i < data.length; i++) {
    var article = document.createElement("div");
    div.innerHTML = '<p>' + 
    mainContainer.appendChild(div);
  }
}