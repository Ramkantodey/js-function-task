// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers){
    let sum = 0
    for(const number of numbers){
        sum += number;
    }
    const average = sum / numbers.length;
    return average;
}
const numbers = [1, 2, 3, 4, 5];
console.log(make_avg(numbers));