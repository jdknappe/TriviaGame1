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
        clearInterval (oneSecondId)
        clearInterval (timeUpId)
        timerRunning = false
    }
})