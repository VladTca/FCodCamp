/* function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5));*/


/*function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}
console.log(countdown(5))


function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal"
    : (a > b) ? "a is greater"
    : "b is greater";
}
*/

function rangeOfNumbers(startNum, endNum) {

 if ((endNum-startNum)<0) {
        return [];}
    else{ const countArray = rangeOfNumbers(startNum,endNum-1);
    countArray.push(endNum);
    return countArray;}




    //return (startNum === endNum) ? countArray : endNum
}
console.log(rangeOfNumbers(5,5))