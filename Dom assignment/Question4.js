let marks = [80,75,90,65,55]
let highestMark = 0;
let highestMarkIndex  = 0;

for(let i =0; i < marks.length; i++){

    highestMark = marks[i] > highestMark ? marks[i]:highestMark;
    highestMarkIndex = marks[i]===highestMark ? i : highestMarkIndex;

}

console.log(`The highest marks scored by a student
in the class is ${highestMark} by the student ${highestMarkIndex+1 }`);