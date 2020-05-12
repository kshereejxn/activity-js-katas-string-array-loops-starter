/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing
     the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the
     available mountains in the array.
  3. Display the tallest height value on the page.
*/
let answer = document.querySelector('#answer');
let height = [20310, 14505, 14440, 14417, 13809];

let mountains = 0
let index = 0

while (index < height.length) {
   if (height[index] > mountains) {
      mountains = height[index]
   }
   index += 1
}
answer.innerHTML = "The tallest mountain is " + mountains + " ft high."