// const a = Math.random()*(100-1)+1
// console.log(`Random value between 1 and 10 is ${a}`);

const randomNumber = (()=>{
    const min =  1;
    const max = 100;
    return Math.floor(Math.random()*(max - min)+min);

})()
console.log(randomNumber);

