var counter = 0;
var userAnswers = [];
var correctAnswers = [2, 2, 2, 2, 2]
var dataShow = (cb, answer) => {
    if (counter) {
        if (answer) {
            userPerformanceRecorder(answer);
        }
    }
    if (counter != questions.length) {
        document.querySelector(`#question_text`).innerHTML = counter + 1 + ". " + questions[counter];
        document.querySelector(`#counter_show`).innerHTML = `Question ${counter+1} of ${questions.length}`
        cb();
        counter++;

    } else {
        clearInterval(timerUpdate);
        resultContentShow(scoreRecorder(userAnswers, correctAnswers));
    }
}
var scoreRecorder = (answers, cor_answers) => {
    var scores = 0;
    answers.forEach((item, index) => {
        if (item == cor_answers[index]) {
            scores++;
        }
    });
    return scores;
}
var resultContentShow = (marks) => {
    document.querySelector(`#main_heading`).innerHTML = `Result`;
    document.querySelector(`#main_content`).className += " text-center";
    document.querySelector(`#main_content`).innerHTML = `<i class="fa fa-spinner scores fa-spin fa-4x" aria-hidden="true"></i>`;
    setTimeout(() => {
        document.querySelector(`#main_content`).innerHTML = `<h3 class="scores">Your scores: ${marks}</h3><p class="lead">Time Spent: ${timer-1} seconds</p>`
    }, 1500);
}
var optionShow = () => {
    for (let i = 1; i <= 4; i++) {
        document.querySelector(`#o${i}`).innerHTML = options[counter]['option' + i];
    }
}
var userPerformanceRecorder = answer => {
    console.log(answer);
    userAnswers.push(answer);
}