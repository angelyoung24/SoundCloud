SC.initialize({ client_id: 'f665fc458615b821cdf1a26b6d1657f6' });

var search = document.getElementById('search');
var submit = document.getElementById('submit');
var pauseButton = document.getElementById('pauseButton');
var playButton = document.getElementById('playButton');
var stopButton = document.getElementById('stopButton');
var cloudplayer
var playlist
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');


submit.addEventListener('click', function () {
    SC.get("/tracks/", { q: search.value })
        .then(function (response) {
            playlist = response
            SC.stream("/tracks/" + response[0].id).then(function (player) {
                cloudPlayer = player;
                cloudPlayer.play();
                box1.innerHTML = response[0].title;
                box2.innerHTML = response[0].genre;
                box3.innerHTML = response[0].created_at;
                box4.innerHTML = response[0].artwork_url;
                });

            });
        });


pauseButton.addEventListener('click', function () {
    console.log("paused");
    cloudPlayer.pause();

});

playButton.addEventListener('click', function() {
    console.log("play");
    cloudPlayer.play();
});

stopButton.addEventListener('click', function () {
    console.log("stop");
    cloudPlayer.pause();
    cloudPlayer.seek(0);
});





