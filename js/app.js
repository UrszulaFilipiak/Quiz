document.addEventListener("DOMContentLoaded", function (){
    const questions = document.querySelector(".questions");
    const questionsStage = document.querySelector(".questions-stage");
    const question = document.querySelectorAll(".question");
    const prev = document.querySelector(".previous-arrow");
    const next = document.querySelector(".next-arrow");

    const questionWidth = questions.clientWidth;
    let currentIndex = 0;
    let numberOfQuestions;

    if (question.length % 2 == 0) {
        numberOfQuestions = (question.length / 2) - 1;
    } else {
        numberOfQuestions = Math.ceil(question.length / 2);
    }

    function goToQuestion(actualNumber) {
        if (actualNumber <= numberOfQuestions && actualNumber >= 0) {
            questions.style.left = actualNumber * (-questionWidth) + "px";
            currentIndex = actualNumber;
        } else if (actualNumber == numberOfQuestions + 1) {
        }
    }

    function questionToNext() {
        goToQuestion(currentIndex + 1);
    }

    function questionToPrev() {
        goToQuestion(currentIndex - 1);
    }
    prev.addEventListener("click", questionToPrev);
    next.addEventListener("click", questionToNext);

});