
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = 'You scored: '+mostRecentScore;

