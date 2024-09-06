// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function evenOdd(number){
    if(number % 2 === 1){
        return number * 2;
    }
    return number / 2;
}

const result = evenOdd(24);
console.log(result);