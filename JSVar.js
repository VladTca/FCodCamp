let myName;
let myVar;
myVar = 5;
a = myVar;
let myFirstName, myLastName;
myFirstName = 'Vlad';
myLastName = 'Tca';
const myStr = "Первая линия\n\t\\Вторая линия\nТретья линия";
console.log(myStr);
console.log(myFirstName.length);
const LastLetter = myFirstName[myFirstName.length - 1];
console.log(LastLetter);
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];
const myData = myArray[0][1];
console.log(myData);
myArray.push(100,200);
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.unshift('dog');
console.log(myArray);
// короче чтрочки и массивы