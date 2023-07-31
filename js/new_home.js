var row = $("#news-row");

fetch('/news.json')
    .then(function (response) {
        return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});

function appendData(data){
    for (var i = 0; i < 3; i++) {
        $("#news-row").append('<div class="col-lg-4 col-md-6 col-sm-12"><div class="card shadow-sm"><img class="img-fluid rounded-top" src="' + data[i].image + '"><div class="card-body"><p class="card-text"><strong>' + data[i].title + '</strong><br>' + data[i].body + '</p><div class="d-flex justify-content-between align-items-center"><button type="button" class="btn btn-sm btn-outline-secondary">View</button><small class="text-body-secondary">' + data[i].date + '</small></div></div></div></div>');
    }
}

$("body").append('<!-- Footer --><div class="container"><footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"><div class="col-md-4 d-flex align-items-center"><a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"><img class="footer-logo" src="/images/square-lion/logo.png"></a><span class="mb-3 mb-md-0 text-body-secondary">© 2023 Square Lion, LLC</span></div><ul class="nav col-md-4 justify-content-end list-unstyled d-flex"><li class="ms-3"><a class="text-body-secondary" href="https://www.youtube.com/channel/UCSqHz-5bSZKgIhJ4xVqpFUw"><i class="fa-brands fa-square-youtube"></i></a></li><li class="ms-3"><a class="text-body-secondary" href="https://www.instagram.com/squarelionofficial/"><i class="fa-brands fa-square-instagram"></i></a></li><li class="ms-3"><a class="text-body-secondary" href="https://www.facebook.com/SquareLionOfficial"><i class="fa-brands fa-square-facebook"></i></a></li><li class="ms-3"><a class="text-body-secondary" href="https://twitter.com/SqLionOfficial"><i class="fa-brands fa-square-twitter"></i></a></li><li class="ms-3"><a class="text-body-secondary" href="https://github.com/square-lion/"><i class="fa-brands fa-square-github"></i></a></li><li class="ms-3"><a class="text-body-secondary" href="https://square-lion.itch.io/"><i class="fa-brands fa-itch-io"></i></a></li></ul></footer></div>');