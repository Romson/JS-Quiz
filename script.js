// declare variables
var Question, question1, question2, question3, questionsArray, random, userAnswer;

// function constructor
Question = function(question, correct, answers){
    this.question   = question;
    this.correct    = correct;
    this.answers    = answers;
}
// question prototype
Question.prototype.displayQuestion = function(){
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++){
        console.log(i + ": " + this.answers[i]);
    }
}
// check answer prototype
Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
        console.log("Correct answer!");
    } else {
        console.log("Wrong answer!");
    }
}
// 1st - 3rd question object
question1 = new Question("Who is Donald Trump?", 0, ["President of USA", "Fat Cat", "Annoying salesman"]);
question2 = new Question("What is the name of the best Coffee shop?", 1, ["Coffee Cabron", "Starbucks", "Mister White's Coffee"]);
question3 = new Question("What's the best country in the world?", 2, ["Germany", "France", "United States"]);
// questions array
questionsArray = [question1, question2, question3];
// random question 
random = Math.floor(Math.random() * questionsArray.length);
// display random question
questionsArray[random].displayQuestion();
// get user input and convert string to int
userAnswer = parseInt(prompt("Select the correct answer (type a number)"));
// check if user input equals this.correct
questionsArray[random].checkAnswer(userAnswer);