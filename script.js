const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector("#result");
console.log(input);
console.log(button);
console.log(result);

button.addEventListener("click", () => {
  console.log(input.value);
  if (input.value.length === 0) {
    alert("Please input a value");
  } else {
    palindrome();
    let emptyInput = "";
    input.value = emptyInput;
  }
});

function palindrome() {
  let inputValue = input.value
    .trim()
    .toLowerCase()
    //1. **`.replace()`**: ეს არის JavaScript-ის მეთოდი,
    // რომელიც გამოიყენება სტრიქონში მითითებული მნიშვნელობის ან ნიმუშის მოსაძებნად
    //და სხვა მნიშვნელობით ან ნიმუშით ჩანაცვლებისთვის.
    .replace(/[^a-zA-Z0-9]/g, "");
  let reverseInput = inputValue.split("").reverse().join("");
  if (inputValue === reverseInput) {
    result.innerHTML = `${input.value} is a palindrome`;
    result.style.color = "orange";
    result.style.marginTop = "1rem";
  } else {
    result.innerHTML = `${input.value} is not a palindrome`;
    result.style.color = "red";
    result.style.marginTop = "1rem";
  }
}
