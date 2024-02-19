addEventListener('DOMContentLoaded', function () {
let scoreOne = 20;
let highScoreOne = 0;
let randomValue = Math.floor(Math.random() * 21);
let number = document.querySelector('.guess');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let checkButton = document.querySelector('.check');
let againButton = this.document.querySelector('.again');
let displayNumber = this.document.querySelector('.number');
displayNumber.textContent = "?"
function messageNew(messagePrint) {
  message.textContent = messagePrint;
}
checkButton.addEventListener('click', function() {
    if(randomValue === number) {
        messageNew("🎉 Correct Number")
        document.body.style.backgroundColor = '#60b347';
        displayNumber.textContent = randomValue;
        if(scoreOne > highScoreOne) {
        highScoreOne = scoreOne;
        highScore.textContent = highScoreOne;
        }
    } else if(randomValue > number) {
      messageNew(("Too Low"))
      displayNumber.textContent = randomValue;
      highScore.textContent = highScoreOne;
    } else if(randomValue < number) {
        messageNew(("Too High"))
        displayNumber.textContent = randomValue;
        highScore.textContent = highScoreOne;
    } else()
})
});



