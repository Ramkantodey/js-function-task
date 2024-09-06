// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


function count_zero(binaryString){
    let count = 0;
    let count2 = 0;
    for(const num of binaryString){
        if(num === '0'){
            count++;
        }
        else{
            count2++;

        }
     
    }
    return {count, count2};
}
const binaryString = '11010001110';
const result = count_zero(binaryString);
console.log(result.count);
console.log(result.count2);