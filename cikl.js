// start cikli
/*
/ Налаштування
const myArray = [];

// Змініть код лише під цим рядком
let i = 5;
while (i>=0) {
    myArray.push(i);
    i-=1 // or i--
}

// cikl for
// Налаштування
const myArray = [];

// Змініть код лише під цим рядком
for (let i = 1; i <= 5; i++) {
    myArray.push(i);
}
*/
// strange
const myArray = [];

// Змініть код лише під цим рядком
for (let i = 1; i < 10; i += 2) {
    myArray.push(i);
    console.log(i);
}

//podmassivi
const arr = [
    [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}
