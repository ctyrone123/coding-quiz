var saveTime = document.querySelector("saveTime");
var initials = document.getElementById("initials");
var finalTime = document.getElementById("finalTime");
var mostRecentTime = localStorage.getItem("mostRecentTime");
document.getElementById("countdown").innerText = mostRecentTime;
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var maxHighScores = 5;

initials.addEventListener("keyup", () => {
    saveTime = !initials.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    var score = {
        score: mostRecentTime,
        name: initials.value
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("scores.html")
};
    
