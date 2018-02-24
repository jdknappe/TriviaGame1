

$(document).ready(function () {
    var timerRunning = false
    var timeUpId
    var oneSecondId
    var answerArray = []
    var userScore = 0

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
			$("#display").text("45")
           oneSecondId = setInterval(oneSecondInterval, 1000)
           timeUpId = setInterval(timeUp, 1000 * 45)
           timerRunning = true
        }
    }

    function timeUp() {
        var numberCorrect = 0
        clearInterval (oneSecondId)
        clearInterval (timeUpId)
        timerRunning = false
        // Loop through each question
        for (var i = 0; i < 10; i++) {
            // Loop through each answer given
            for (var j = 0; j < 4; j++) {
				//console.log("Correct Answer: " + $(".question").eq(i).siblings(".answerCorrect").text() )
                // Checks to see if radio box is checked
                if ( $(".question").eq(i).siblings(".answers").children("li").eq(j).children("input").is(":checked")) {
					//console.log("In Checked: i = " + i + " j = " + j)
                    // If checked, is it the correct answer?
                    if ($(".question").eq(i).siblings(".answerCorrect").text() == j) {
                        numberCorrect++
                    }
                }
            }
        }
        console.log("number correct: " + numberCorrect)
        $("#answersDisplay").html("Congratulations! You got " + numberCorrect + "/10 correct!")
    }

    // Need to run for loop that logs correct answers.
})
