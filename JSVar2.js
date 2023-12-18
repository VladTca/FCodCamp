/*
// objekti
// i pres vscode
const myObj = {
    prop1: "val1",
    prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

// vlazim v obekt cherez tochku ili skobki
const myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
*/
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name = 'Coder';
myDog['name'] = 'Happy Coder';
myDog.bark = 'woof'
console.log(myDog);
delete myDog.bark;
console.log(myDog);

// a zaodno eshe vivod chrez funkciu
// Налаштування
function phoneticLookup(val) {
    let result = "";

    // Змініть код лише під цим рядком
    /* switch(val) {
       case "alpha":
         result = "Adams";
         break;
       case "bravo":
         result = "Boston";
         break;
       case "charlie":
         result = "Chicago";
         break;
       case "delta":
         result = "Denver";
         break;
       case "echo":
         result = "Easy";
         break;
       case "foxtrot":
         result = "Frank";
     } */
    const lookup = {
        'alpha' : 'Adams',
        'bravo' : "Boston",
        'charlie' : 'Chicago',
        'delta' : "Denver",
        'echo'  : "Easy",
        'foxtrot' : "Frank"
    }
    result = lookup[val];
    // Змініть код лише над цим рядком
    return result;
}

phoneticLookup("charlie");

  function checkObj(obj, checkProp) {
        // Змініть код лише під цим рядком
        switch (obj.hasOwnProperty(checkProp))
        {
            case true: {return obj[checkProp]}
            case false: {return 'Not Found'}
        }}
    // Змініть код лише над цим рядком

    v = checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");
console.log(v)
// smes arrai i objects
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list[1];

