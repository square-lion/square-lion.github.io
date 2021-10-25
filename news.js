fetch('news.json')
    .then(function (response) {
        return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});

function appendData(data) {
        var mainContainer = document.getElementById("menu-box");
    for (var i = 0; i < data.length/3+1; i++) {
        if(i % 3 == 0){
            var row = document.createElement("div")
            row.className = "row";
            mainContainer.appendChild(row);

            for(var i = 0; i < data.length; i++){
                var article = document.createElement("div");
                article.className = "col-sm";
                article.id = "news-article";
                row.append(article)
            }

            mainContainer.appendChild(row);
        }
        var div = document.createElement("div");
        div.innerHTML = data[i].title;
        mainContainer.appendChild(div);
    }
}

