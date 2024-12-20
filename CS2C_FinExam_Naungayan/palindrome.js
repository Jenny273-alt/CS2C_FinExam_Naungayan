let word1 = "racecar";
let word2 = "recorder";

console.log("Original string 1:", word1);
console.log("Reversed string 1:", word1.split("").reverse().join(""));
console.log("Original string 2:", word2);
console.log("Reversed string 2:", word2.split("").reverse().join(""));

console.log("Is string 1 a palindrome?", word1 === word1.split("").reverse().join(""));
console.log("Is string 2 a palindrome?", word2 === word2.split("").reverse().join(""));