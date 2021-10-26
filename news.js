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

        var article = document.createElement("div");
        article.className = "col-sm";
        article.id = "news-article";

        var title = document.createElement("h4");
        title.id = "news-header";
        title.textContent = data[i].title;
        data[i].title;

        var body = document.createElement("p");
        body.id = "news-body";
        body.textContent = data[i].body;

        var date = document.createElement("small")
        date.id = "news-footer";
        date.textContent = data[i].date;

        if(data[i].hasOwnProperty("image")){
            var image = document.createElement("img");
            image.className = "img-fluid";
            image.id = "news-image";
            image.src = data[i].image;

            article.append(image, title, body, date);
        }
        else if (data[i].hasOwnProperty("video")){
            var video = document.createElement("iframe");
            video.id = "news-image";
            video.src = data[i].video;
            video.width = "360";
            video.height = "175";
            video.title = "YouTube video player";
            video.frameborder = "0";
            video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";


            article.append(video, title, body, date);
        }

        row.append(article)
    }
}

