fetch("2022_games.json")
    .then(function (response) {
        return response.json();
})
.then(function (data) {
    display_games(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});

function display_games(data){
    var menu_games = document.getElementsByClassName("menu-games");

    for (var i = 0; i < data.length; i++) {
        box = document.createElement("table");
        box.className = "mini-game";

        winner = data[i].winner;
    }
}