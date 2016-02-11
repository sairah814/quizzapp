$(document).ready(function () {
    /*Declare global variables*/

    var questions = [
        {
            question: "images/question1.jpg",
            choices: ['Massachusetts', 'Arizona', 'Washington', 'Utah'],
            answer: 3,
            answerDetails: 'These natural stone arches are located in the Arches National Park in Utah.'
        },
        {
            question: "images/question2.jpg",
            choices: ['Oregon', 'California', 'Michigan', 'Missouri'],
            answer: 0,
            answerDetails: 'Crater Lake in Oregon is ...'
        },
        {
            question: "images/question3.jpg",
            choices: ['Washington', 'Alaska', 'Alabama', 'North Dakota'],
            answer: 1,
            answerDetails: 'Denali Alaska...'
        },
        {
            question: "images/question4.jpg",
            choices: ['Montana', 'Idaho', 'Arizona', 'Wisconsin'],
            answer: 2,
            answerDetails: 'Grand Canyon ...'
        },
        {
            question: "images/question5.jpg",
            choices: ['Michigan', 'Wyoming', 'Mississippi', 'New York'],
            answer: 3,
            answerDetails: 'Niagara Falls in New York is ...'
        },
        {
            question: "images/question6.jpg",
            choices: ['Illinois', 'South Carolina', 'Maine', 'Tennessee'],
            answer: 2,
            answerDetails: 'Mount Desert Island in Maine'
        }

    ];

    var totalCorrect = 0;
    var questionNumber = 0;

    /*Define functions*/
    function recordResult(userResponse, correctResponse) {
        if (userResponse == correctResponse) {
            totalCorrect += 1;
            $('.user-score').text(totalCorrect);
            $() //append the results with "you got this one"
        } else {
            //append the results with "you didn't"
        }
    }

    function relativeFeedback(numCorrect) {
        if (numCorrect == 10) {
            $('relative-feedback').text('FANTASTIC!');
        } else if (numCorrect >= 7) {
            $('relative-feedback').text('Great job!');
        } else if (numCorrect >= 5) {
            $('relative-feedback').text('Pretty good!');
        } else {
            $('relative-feedback').text('Nice Try!');
        }
    }

    function displayQuestion() {
        $('#current-question').text(questionNumber + 1);
        $('.question-image').html("<img src='" + questions[questionNumber].question + "' alt='question' class='image'>");
        var choiceTotal = questions[questionNumber].choices.length;
        $('.answer-choices').empty();
        for (i = 0; i < choiceTotal; i++) {
            $('.answer-choices').append("<li><label class='radio-choice'> <input class='ans-choice' type='radio' name='choice' value=" + i + " />" + "<i></i><span class='choice'> " + questions[questionNumber].choices[i] + "</span></label></li>");
        }
    }

    /*Do stuff triggered by events*/
    console.log(questions[0].choices[0]);
    $('#start').click(function () {
        $('.quiz-landing').hide(); // add some animation!
        $('.quiz').css('display', 'block');
        displayQuestion();
    });
    $('#next').click(function () {
        var userAnswer = $("input[class='ans-choice']:checked").val();
        if (questionNumber + 1 == questions.length) {
            console.log("the user's final answer was " + userAnswer);
            recordResult(userAnswer, questions[questionNumber].answer);
            console.log(totalCorrect);
            $('.quiz').hide();
            $('.results').css('display', 'block');
        } else { // call function to display next question
            console.log("the user's answer was " + userAnswer);
            recordResult(userAnswer, questions[questionNumber].answer);
            questionNumber += 1;
            console.log(totalCorrect);
            displayQuestion();
            if (questionNumber + 1 == questions.length) {
                $('#next').text("Finish");
            }
        }
    });

    $('#try-again').click(function () {
        $('.results').hide();
        $('.quiz-landing').show();
        totalCorrect = 0;
        questionNumber = 0;
    });
    //I see the first image by default. then i click on next and it
    //immediately goes to next image
    //for every selection, i want to record what the user's answer is and
    //whether they got it right
});
