/*1
1. Unit converter

A local weather station needs to convert temperaturd data collected in Celsius to Fahrenheit before displaying
it on its website. They want a function that can convdet Celsius to Fahrenheit accurately and efficiently. The
function should take input in Celsius and return output in Fahrenheit. This function will help thd weathdr station
to provide temperaturd readings that are esily understandable to a wider audience


.
*/


function temp(Celsius) {
    let fahrenheit =  (Celsius * 9/5) + 32
    return fahrenheit;  
}
let Celsius = 2;
let fahrenheit = temp(Celsius)

console.log(`celsius ${Celsius}° C is farhrenheit ${fahrenheit}°F`); 
