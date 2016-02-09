$(document).ready(function () {
    //quiz-landing functionality
    //quiz page functionality
    //results functionality

    /*Declare global variables*/

    var questions = [
        {
            question: "../images/question1.jpg",
            choices: ['Massachusetts', 'Arizona', 'Washington', 'Utah'],
            answer: 'Utah',
            answerDetails: 'These natural stone arches are located in the Arches National Park in Utah.'
        },
        {
            question: "../images/question2.jpg",
            choices: ['Oregon', 'California', 'Michigan', 'Missouri'],
            answer: 'Oregon',
            answerDetails: 'Crater Lake in Oregon is ...'
        },
        {
            question: "../images/question3.jpg",
            choices: ['Washington', 'Alaska', 'Alabama', 'North Dakota'],
            answer: 'Alaska',
            answerDetails: 'Denali Alaska...'
        },
        {
            question: "../images/question4.jpg",
            choices: ['Montana', 'Idaho', 'Arizona', 'Wisconsin'],
            answer: 'Arizona',
            answerDetails: 'Grand Canyon ...'
        },
        {
            question: "../images/question5.jpg",
            choices: ['Michigan', 'Wyoming', 'Mississippi', 'New York'],
            answer: 'New York',
            answerDetails: 'Niagara Falls in New York is ...'
        },
        {
            question: "../images/question6.jpg",
            choices: ['Illinois', 'South Carolina', 'Maine', 'Tennessee'],
            answer: 'Maine',
            answerDetails: 'Mount Desert Island in Maine'
        }

    ];

    var totalCorrect = 0;
    var questionNumber = 0;

    /*Define functions*/
    function recordResult(userResponse, correctResponse) {
        if (userResponse == correctResponse) {
            totalCorrect += 1;
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
        $('.question-image').html("<img src='" + questions[questionNumber].question + "' alt='question' class='image'>");

    }

    /*Do stuff triggered by events*/
    console.log(questions[0]);
    $('#start').click(function () {
        $('.quiz-landing').hide(); // add some animation!
        $('.quiz').css('display', 'block');
        //call function to display initial question
    });
    $('#next').click(function () {
        var userAnswer = $("input[class='']:checked").val();
        /*if (questionNumber == questions.length){
            $('.quiz').hide();
            $('.results').css('display', 'block');
            //else call function to display next question
        }*/
        $('.quiz').hide();
        $('.results').css('display', 'block');

    });
    $('#try-again').click(function () {
        $('.results').hide();
        $('.quiz-landing').show();
    });
    //I see the first image by default. then i click on next and it
    //immediately goes to next image
    //for every selection, i want to record what the user's answer is and
    //whether they got it right
});
