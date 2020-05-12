/*
  HANGMAN LITE

  1. Create a variable (`word`) which contains any lengthy word.
  2. Create a second variable (`letter`) which indicates the letter
     that the player "guessed" (optional: use an input textbox and
     click event listener to obtain an actual player guess).
  3. Write a WHILE statement which loops over the `word` string and
     counts the number of times the "guessed" letter appears.
  4. If the letter is found in the string, display "The letter X
     exists N times in this word!" on the page (replacing "X" with
     the letter guessed and "N" with the letter count).
  5. If the letter isn't found in the string, display "Nope, that
     letter doesn't exist in my word!" on the page.
*/

// YOUR CODE HERE
let word = "supercalifragilisticexpialidocious";
let letter = 'b';
let guess = document.querySelector('#guess');

let count = 0
let index = 0

while (index < word.length) {
   console.log(word[index])
   if (letter === word[index]) {
      count += 1
   }
   index += 1
}
if (count === 1) {
   guess.innerHTML = "the letter " + letter + "exists " + count + "time in this word"
}
else {
   guess.innerHTML = "the letter " + letter + " exists " + count + " times in this word";
}
console.log(count)
