function playBackgroundSong()
{
    var audio = new Audio('sound/theme_song.mp3');
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    audio.play();
}

function playSoundEffect(audio_file)
{
    var audio = document.createElement("audio");
    audio.src = audio_file;
    audio.addEventListener("ended", function () {
        document.removeChild(this);
    }, false);
    audio.play();
}