document.addEventListener("DOMContentLoaded", function (){
    const questions = document.querySelector(".questions");
    const question = document.querySelectorAll(".question");
    const prev = document.querySelector(".previous-arrow");
    const next = document.querySelector(".next-arrow");

    const questionsWidth = question[0].clientWidth;
    let currentIndex = 0;
    let questionNumber = question.length - 1;

    function goToQuestion(index) {

        if (index <0) {
            index = questionNumber;
        } else if (index > questionNumber) {
            index = 0;
        }

        question.style.left = index * (-questionsWidth) + "px";
        currentIndex = index;
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