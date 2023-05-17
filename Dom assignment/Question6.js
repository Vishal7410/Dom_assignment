/*
6. Vowel Counter

We want to count the number of vowels in a person's name. Given a name as input, the program should iterate
through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be
counted.

*/



// using the regular expression;

let name1 = prompt("") // put a input of your name 

let name2 = /[aeiou]/gi // compare  a e i o u in global index

let name3 = name1.match(name2).length; // if it is mathe then count by using math() function

console.log(name3)

// OR 

let name = prompt("");

let vowelsCount = 0;

const vowels = ["a","e","i","o","u"];

for (let index = 0; index < name.length; index++) {
    const name2 = name.charAt(index);
    if (vowels.includes(name2))
    {
        vowelsCount++
    }
}
console.log(`vowels in your name....is  ${vowelsCount}`);





