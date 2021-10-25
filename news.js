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
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
    mainContainer.appendChild(div);
  }
}