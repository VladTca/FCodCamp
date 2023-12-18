/*
//функции
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();
// функции с параметрами
function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
}
functionWithArgs(1, 2);
// игра с аргументом функции
function timesFive(num) {
    return num * 5;
}

const answer = timesFive(5);
console.log(answer);
// Setup
let sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line
function addFive() {
    sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();
console.log(sum);
//cuko opjat masivi
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    item = arr.shift();
    console.log(item);
    return item;
    // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
// boolean
function test(myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
}

console.log(test(true));
test(false);
// sravnenie
function equalityTest(myVal) {
    if (myVal == 10) {
        return "Equal";
    }
    return "Not Equal";
}
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);
console.log(testGreaterThan(18));
// big constuction if - else
function testSize(num) {
    // Змініть код лише під цим рядком
    if (num <5) {
        return 'Tiny'
    } else if (num < 10) {
        return 'Small'
    } else if (num < 15) {
        return 'Medium'
    } else if (num < 20) {return Large}
else {
    return 'Huge'
}
// Змініть код лише над цим рядком
}

console.log(testSize(0));
// func s arraem
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Змініть код лише під цим рядком
    if (strokes == 1) { return names[0];}
    else if (strokes >1 && strokes <= par-2) {return names [1];}
    else if (strokes == par-1) {return names [2];}
    else if (strokes == par) {return names [3];}
    else if (strokes == par+1) {return names [4];}
    else if (strokes == par+2) {return names [5];}
    else {return names[6]}

    // Змініть код лише над цим рядком
}
console.log(golfScore(6,3));

// switch case

function caseInSwitch(val) {
    let answer = "";
    // Змініть код лише під цим рядком
    switch (val) {
        case 1 : answer = 'alpha';
            break
        case 2 : answer = 'beta';
            break
        case 3 : answer = 'gamma';
            break
        case 4 : answer = 'delta';
            break
        default : answer = 'kuku';
        break
    }


    // Змініть код лише над цим рядком
    return answer;
}
console.log(caseInSwitch(5));
*/
// blackjack
let count = 0;

function cc(card) {
    // Змініть код лише під цим рядком
    let Bet = " Bet";
    let Hold = " Hold"
    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count +=1
            if (count >0) {return count + Bet;}
            else {return count + Hold;}
            break
        case 7:
        case 8:
        case 9:
            if (count >0) {return (count +Bet)}
            else {return (count + Hold)}

        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -=1
            if (count >0) {return count + Bet;}
            else {return count + Hold;}
            break
    }

}
cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc('A'));