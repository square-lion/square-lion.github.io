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
    var mainContainer = document.getElementsByClassName("news-container")[0];

    row = document.createElement("div")
    row.className = "row";
    mainContainer.append(row);

    for (var i = 0; i < 4; i++) {
    
        var article = document.createElement("div");
        article.className = "news";
        article.id = "news-article";

        var title = document.createElement("h4");
        title.textContent = data[i].title;
        data[i].title;

        var body = document.createElement("p");
        body.textContent = data[i].body;

        var date = document.createElement("small")
        date.textContent = data[i].date;

        if(data[i].hasOwnProperty("image")){
            var image = document.createElement("img");
            image.src = data[i].image;

            article.append(image, title, body, date);
        }
        else if (data[i].hasOwnProperty("video")){
            var video = document.createElement("iframe");
            video.src = data[i].video;
            video.width = "100%";
            video.height = "55%";
            video.title = "YouTube video player";
            video.frameborder = "0";
            video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            video.setAttribute('allowFullScreen', '')




            article.append(video, title, body, date);
        }

        row.append(article)
    }
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}