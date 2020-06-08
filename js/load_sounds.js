function play_audio(audio_file)
{
    var audio = document.createElement("audio");
    audio.src = audio_file;
    audio.addEventListener("ended", function () {
        document.removeChild(this);
    }, false);
    audio.play();
}