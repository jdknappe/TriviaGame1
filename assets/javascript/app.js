$(document).ready(function () {
    var timerRunning = false
    var timeUpId
    var oneSecondId

    $("#start-button").click(startTimer)
    $("#results").click(timeUp)
    
    function oneSecondInterval () {
        var seconds
        seconds = parseInt($("#display").html())
        seconds--
        $("#display").html(seconds)
    }

    function startTimer() {
        if (!timerRunning) {
           timeUpId = setInterval(timeUp, 1000 * 45)
           oneSecondId = setInterval(oneSecondInterval, 1000)
            timerRunning = true 
        }
    } 

    function timeUp() {
        var question
        var numberCorrect = 0
        clearInterval (oneSecondId)
        clearInterval (timeUpId)
        timerRunning = false
        for (var i = 0; i < 10; i++) {
           question = $("#question" + i)
            for (var j = 0; j < 4; j++) {
                console.log($("#question" + i + ".answer:eq(" + j + ")"))
                if ( $("#question" + i + ".answer:eq(" + j + ")").checked) {
                    console.log($("#question" + i + ".answerCorrect")) 
                    if ($("#question" + i + ".answerCorrect") == j) {
                        numberCorrect++
                    }
                }
            }
        }
        console.log("number correct: " + numberCorrect)
    }

    // Need to run for loop that logs correct answers.
})