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

//შევქმნათ ფუნქცია სადაც გავარკვევთ სიტყვა პალინდრომია თუ არა
// მაგალითად დავწერ ასეთ ლოგიკას : თუ ინფუთ ველიუში ჩაწერილი სიტყვის
// ავერსი უდრის რევერსს მაშინ ეს სიტყვა პალინდრომია

function palindrome() {
  let inputValue = input.value.trim();
  let reverseInput = inputValue.split("").reverse().join("");
  if (inputValue === reverseInput) {
    result.innerHTML = `${input.value} is a palindrome`;
    result.style.color = "red";
    result.style.marginTop = "1rem";
  } else {
    result.innerHTML = `${input.value} is not a palindrome`;
    result.style.color = "red";
    result.style.marginTop = "1rem";
  }
}
