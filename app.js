
document.addEventListener("DOMContentLoaded", () => { 
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attemptsLeft = 3;


    const guessInput = document.getElementById("guessInput");
    const guessButton = document.getElementById("guessButton");
    const resetButton = document.getElementById("resetButton");
    const message = document.getElementById("message");
    const attempts = document.getElementById("attempts");

    const validateInput = (input) => {
        return Number.isInteger(input) && input >= 1 && input <= 100;
    };

        const resetGame = () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attemptsLeft = 3;
        guessInput.value = "";
        guessInput.disabled = false;
        guessButton.disabled = false;
        resetButton.style.display = "none";
        message.textContent = "";
        attempts.textContent = "";
      };


        guessButton.addEventListener("click", () => {
            let userGuess = parseFloat(guessInput.value);
        
            if (!validateInput(userGuess)) {
              message.textContent =
                "Please enter a valid whole number between 1 and 100.";
              return;
            }


            attemptsLeft--;

            if (userGuess === randomNumber) {
              message.textContent = "Congratulations! You guessed the correct number!";
              attempts.textContent = "";
              guessButton.disabled = true;
              guessInput.disabled = true;
              resetButton.style.display = "block";
            } else if (userGuess < randomNumber) {
              message.textContent = "Too low!";
            } else {
              message.textContent = "Too high!";
            }
        
            if (attemptsLeft > 0) {
              attempts.textContent = `You have ${attemptsLeft} ${
                attemptsLeft === 1 ? "attempt" : "attempts"
              } left.`;
            } else {
              message.textContent = `Game over! The correct number was ${randomNumber}.`;
              attempts.textContent = "";
              guessButton.disabled = true;
              guessInput.disabled = true;
              resetButton.style.display = "block";
            }
        
            guessInput.value = "";
          });
        

       
          resetButton.addEventListener("click", resetGame);
});