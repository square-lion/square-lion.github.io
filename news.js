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

    //Create first row
    var row = document.createElement("div")
    row.className = "row";
    mainContainer.append(row);

    for (var i = 0; i < data.length; i++) {
        if(i % 3 == 0){
            row = document.createElement("div")
            row.className = "row";
            mainContainer.append(row);
        }

        //For Each Article
        var article = document.createElement("div");
        article.className = "col-sm";
        article.id = "news-article";
        row.append(article)
    }
}

