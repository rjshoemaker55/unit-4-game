var totalScore;
var randomNumber;
var yellowStarValue;
var blueStarValue;
var blackStarValue;
var redStarValue;
var totalScore;
var wins = 0;
var losses = 0;

function gameStart() {
  yellowStarValue = Math.floor((Math.random() * 12) +1)
  blueStarValue = Math.floor((Math.random() * 12) +1)
  blackStarValue = Math.floor((Math.random() * 12) +1)
  redStarValue = Math.floor((Math.random() * 12) +1)
  totalScore = 0
  randomNumber = Math.floor((Math.random() * (110)) + 19)
  console.log("The random number is: " + randomNumber)
  $("#random-number").text(randomNumber)
  $("#total-score").text(totalScore)
  $("#wins-counter").text(wins)
  $("#losses-counter").text(losses)
  starClicker()
  return
}

function starClicker() {
  $("#yellow-star").on("click", function() {
    totalScore += yellowStarValue
    $("#total-score").text(totalScore)
    if (totalScore === randomNumber) {
      console.log("win")
      wins++;
      gameStart();
    }
    if (totalScore > randomNumber) {
      console.log("lose")
      losses++;
      gameStart();
    }
  })
  $("#blue-star").on("click", function() {
    totalScore += blueStarValue
    $("#total-score").text(totalScore)
    if (totalScore === randomNumber) {
      console.log("win")
      wins++;
      gameStart();
    }
    if (totalScore > randomNumber) {
      console.log("lose")
      losses++;
      gameStart();
    }
  })
  $("#black-star").on("click", function() {
    totalScore += blackStarValue
    $("#total-score").text(totalScore)
    if (totalScore === randomNumber) {
      console.log("win")
      wins++;
      gameStart();
    }
    if (totalScore > randomNumber) {
      console.log("lose")
      losses++;
      gameStart();
    }
  })
  $("#red-star").on("click", function() {
    totalScore += redStarValue
    $("#total-score").text(totalScore)
    if (totalScore === randomNumber) {
      console.log("win")
      wins++;
      gameStart();
    }
    if (totalScore > randomNumber) {
      console.log("lose")
      losses++;
      gameStart();
    }
  })
}

function newGame() {

}



gameStart();
