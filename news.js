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
        var title = document.createElement("h4");
        title.id = "news-header";
        title.textContent = data[i].title;
        data[i].title;
        article.append(title);



        row.append(article)
    }
}

