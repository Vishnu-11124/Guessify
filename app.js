let form = document.querySelector(".form");
let remChances = document.querySelector(".lastResult");
let value = document.querySelector(".lowOrHi");
let previousValue = document.querySelector(".guesses");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let chances = 10;
remChances.innerHTML = chances;
let preGuess = [];
let flag = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let guessedValue = parseInt(document.querySelector("#guessField").value);

  let calculate = () => {
    // let lo = Math.round((startValue + endValue) / 2);
    if (guessedValue === randomNumber) {
      value.innerText = `🎉 Correct! The value is ${guessedValue}`;
      chances -= 1;
      remChances.innerHTML = chances;
      preGuess.push(guessedValue);
      previousValue.innerHTML = preGuess;
      flag = true;
      playToken(chances,flag);

    } else if (guessedValue > randomNumber) {
      value.innerText = `📉 Too High! Try Lower`;
      chances -= 1;
      remChances.innerHTML = chances;
      preGuess.push(guessedValue);
      previousValue.innerHTML = preGuess;
      playToken(chances);
    } else {
      value.innerText = `📈 Too Low! Try Higher`;
      chances -= 1;
      remChances.innerHTML = chances;
      preGuess.push(guessedValue);
      previousValue.innerHTML = preGuess;
      playToken(chances);
    }
    console.log(preGuess);

    // Clear input field after submission
    document.querySelector("#guessField").value = "";
  };

  let playToken = (chances,flag) => {
    if (chances === 0) {
      document.getElementById("subt").setAttribute("disabled", "true");
      document.getElementById("newGameBtn").classList.remove("hidden");
      value.innerText = `💀 Game Over! The number was ${randomNumber}`;
    }else if(flag === true){
      document.getElementById("subt").setAttribute("disabled", "true");
      document.getElementById("newGameBtn").classList.remove("hidden");
    }
  };

  if (guessedValue < 1) {
    alert("Please enter a valid guess..");
  } else if (guessedValue > 100) {
    alert("Please enter a valid guess..");
  } else if (isNaN(guessedValue)) {
    alert("Please enter a valid guess..");
  } else {
    calculate();
  }
});

// New Game function
function startNewGame() {
  // Reset all variables
  randomNumber = Math.floor(Math.random() * 100) + 1;
  chances = 10;
  preGuess = [];
  flag = false;

  // Reset display
  remChances.innerHTML = chances;
  previousValue.innerHTML = "";
  value.innerText = "";
  document.querySelector("#guessField").value = "";

  // Enable submit button and hide new game button
  document.getElementById("subt").removeAttribute("disabled");
  document.getElementById("newGameBtn").classList.add("hidden");
}
