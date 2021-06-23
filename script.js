class Question {
    constructor(text, answers, correctAnswer, testTakersAnswer) {
        this.text = text;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
}

const questions = [
    new Question('Which is not a JavaScript Data Type?', ['Number', 'String', 'Attribute', 'Boolean', 'Object'], 'Attribute'),
    new Question('Which symbol is used for single line comments in Javascript?', ['//', '/*', '#', 'REM'], '//'),
    new Question('Which of these is NOT a looping structure?', ['For', 'While', 'At', 'Do-While'], 'At'),
    new Question('Which is NOT a type of Pop up box available in JavaScript?', ['Alert', 'Confirm', 'Command', 'Prompt'], 'Command'),
]

/** State Constants */
let score = 0;
let currentIndex = 0;
let count = 60;
let timer = null;
let results = {};
let scoreIncrement = 10;
let timeDeduction = 10;
let userName = '';

function startQuiz(){
    startTimer();
    switchQuestion();
}

function checkAnswer(event){
    console.log(event);
    const testTakerAnswer = event.target.outerText;
    const currentQuestion = questions[currentIndex];
    
    const isCorrect = testTakerAnswer == currentQuestion.correctAnswer;
    if(!isCorrect){
        count = count - timeDeduction;
    }
    else
    {
        score = score + scoreIncrement;
    }
    
    // Increment the current question index
    currentIndex++;
    switchQuestion();
}

function switchQuestion() {
    $(document).ready( function () {
        $('#quiz').empty();
        const q = questions[currentIndex]; 
        if(q == undefined)
            getUserName();
        else{
            let quizAddition = '<h2>' + q.text + '</h2>';
            
            for( var i in q.answers) {
                const currentAnswer = q.answers[i];
                const el = '<button class="beginQuiz">'+ currentAnswer +'</button> <br/>'
                quizAddition = quizAddition + el; 
            }
            
            $('#quiz').append(quizAddition);
            $('.beginQuiz').each(function () {
                $(this).click(checkAnswer);
            })
        }
    })
}


function getUserName(){
    $(document).ready(function(){
        resetTimer();
        $('#quiz').empty();
        const userNameInputBox = 'Please enter your name: <input type="text" id="userNameInputBox"/> <button id="submitUserName">Submit</button>';
        
        $('#quiz').append(userNameInputBox);
        $('#submitUserName').click(function(){
            userName = $('#userNameInputBox').val();
            endQuiz();
        })
    })
}

function endQuiz(){
    $(document).ready(function(){
        $('#quiz').empty();
        const endScreen = 'Thanks for playing ' + userName + '!<br/>Your score was ' + score;
        
        $('#quiz').append(endScreen);
    })
}

function startTimer(){
    timer = setInterval(function() {
        $("#countdown").html(count--);
        if(count <- 0) {
            clearInterval(timer);
            getUserName();
        }
    }, 1000);
}

function resetTimer(){
    clearInterval(timer);   
}

$(document).ready(
    function() {
      $('.beginQuiz').click(startQuiz);  
    }
) 