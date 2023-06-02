function checkPalindrome() {
  var word = document.getElementById("word-input").value;
  var reversedWord = word.split("").reverse().join("");
  var resultElement = document.getElementById("result");

  if (word === reversedWord) {
    resultElement.textContent = "'" + word + "' is a palindrome.";
  } else {
    resultElement.textContent = "'" + word + "' is not a palindrome.";
  }
}
