var timer = 0;
var timeLeft = 10;
var setup = () => {
    $("#timer").html(convertSeconds(timeLeft - timer));
    timerUpdate = setInterval(timeIt, 1000);
};
var timeIt = () => {
    console.log(false);
    if (timer < 11) {
        $("#timer").html(convertSeconds(timeLeft - timer));
        timer++;
    } else {
        clearInterval(timerUpdate);
        document.childNodes[1].childNodes[0].innerHTML += "<audio autoplay><source src='app/Media Files/Ting-sound-effect.mp3'></audio>";
        setTimeout(() => {
            resultContentShow(scoreRecorder(userAnswers, correctAnswers));
        }, 500);
    }
}
var convertSeconds = (s) => {
    var min = Math.floor(s / 60);
    var sec = s % 60;
    return min + ":" + sec;
}