class Question {
    constructor(t, a) {
        this.text = t
        this.answers = a
    }
}

const questions = [
    new Question('Which is not a JavaScript Data Type?', ['Number', 'String', 'Attribute', 'Boolean', 'Object']),
    new Question('Which symbol is used for single line comments in Javascript?', ['//', '/*', '#', 'REM']),
    new Question('Which of these is NOT a looping structure?', ['For', 'While', 'At', 'Do-While']),
    new Question('Which is NOT a type of Pop up box available in JavaScript?', ['Alert', 'Confirm', 'Command', 'Prompt']),
]


let currentIndex = 0;

function switchQuestion() {
    $(document).ready( function () {
        $('#quiz').empty();
        const q = questions[currentIndex]; 
        let quizAddition = '<h2>' + q.text + '</h2>';
        for( var i in q.answers) {
            const currentAnswer = q.answers[i];
            const el = '<button class="beginQuiz">'+ currentAnswer +'</button> <br/>'
            quizAddition = quizAddition + el; 
        }
        $('#quiz').append(quizAddition);
        $('.beginQuiz').each(function () {
            $(this).click(switchQuestion);
        })
        
        currentIndex++ 
    })
}


let count = 60, timer = setInterval(function() {
    $("#countdown").html(count--);
    if(count <- 0) clearInterval(timer);
}, 1000);


$(document).ready(
    function() {
      $('.beginQuiz').click(switchQuestion);  
    }
) 