// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd


function odd_even(number){
    if(number % 2 === 0){
        console.log(number, "number is even");
    }
    else{
        console.log(number, 'number is odd');
    }
}
odd_even(40);