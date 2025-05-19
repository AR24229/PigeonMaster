const codeDisplay = document.getElementById("code-display");
const screenCode = document.getElementById("screen-code");
const screenLoading = document.getElementById("screen-loading");
const screenResult = document.getElementById("screen-result");

const numberButtons = document.querySelectorAll(".num");
const submitButton = document.querySelector(".submit");
const clearButton = document.querySelector(".clear");

let enteredCode = "";

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (enteredCode.length < 6) {
      const digit = button.textContent;
      enteredCode += digit;
      const span = document.createElement("span");
      span.classList.add("digit");
      span.textContent = digit;
      codeDisplay.appendChild(span);
    }
  });
});

clearButton.addEventListener("click", () => {
  enteredCode = "";
  codeDisplay.innerHTML = "";
});

submitButton.addEventListener("click", () => {
  if (enteredCode.length > 0) {
    screenCode.classList.add("hidden");
    screenLoading.classList.remove("hidden");

    setTimeout(() => {
      screenLoading.classList.add("hidden");
      screenResult.classList.remove("hidden");
    }, 2500);
  }
});
