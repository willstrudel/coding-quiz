class Question {
    constructor(t, a) {
        this.text = t
        this.answers = a
    }
}

const questions = [
    new Question('Which is not a JavaScript Data Type?', ['Number', 'String', 'Null', 'Boolean', 'Object']),
    new Question('Which symbol is used for single line comments in Javascript?', ['//', '/*', '#', 'REM']),
    new Question('Which of these is NOT a looping structure?', ['For', 'While', 'Sure', 'Do-While']),
    new Question('Which is NOT a type of Pop up box available in JavaScript?', ['Alert', 'Confirm', 'Bop', 'Prompt']),
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



$(document).ready(
    function() {
      $('.beginQuiz').click(switchQuestion);  
    }
) 