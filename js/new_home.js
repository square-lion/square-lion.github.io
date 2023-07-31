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
    for (var i = 0; i < 4; i++) {
        $("#news-row").append('<div class="col-lg-4 col-md-6 col-sm-12"><div class="card shadow-sm"><img class="img-fluid rounded-top" src="' + data[i].image + '"><div class="card-body"><p class="card-text"><strong>' + data[i].title + '</strong><br>' + data[i].body + '</p><div class="d-flex justify-content-between align-items-center"><button type="button" class="btn btn-sm btn-outline-secondary">View</button><small class="text-body-secondary">' + data[i].date + '</small></div></div></div></div>');
    }
}