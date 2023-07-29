

function Quiz (question) {
    this.score = 0;
    this.questions = question;
    this.questionsIndex = 0;
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
    this.questionIndex++;

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}


