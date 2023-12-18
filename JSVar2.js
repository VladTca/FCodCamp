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
 // or!!!!! function checkObj(obj, checkProp) {
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp];
//   } else {
//     return "Not Found";
//   }
// }
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

//OCHEN STRANNAYA KONSTRUKCIJA DOSTUPA VNUTR OBEKTA S MASIVOM

/*Вам необходимо обновить этот объект альбома на основе параметров value и prop:

Ваша функция всегда должна возвращать весь объект records.
Если value — пустая строка, удалите данное свойство prop из альбома.
Если prop не является tracks и value не является пустой строкой, присвойте value к prop этого альбома.
Если prop равно tracks и значение не является пустой строкой, добавьте value в конец массив tracks альбома.
Вам необходимо сначала создать этот массив, если у альбома нет свойства tracks.
Наконец, проблема хочет, чтобы вы вернули объект records.

 */
// Налаштування
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Змініть код лише під цим рядком
function updateRecords(records, id, prop, value) {
    if (value === "") {
        delete records[id][prop];
    } else if (prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && value !== "") {
        if (records[id].hasOwnProperty("tracks") === false) {
            records[id][prop] = [];
        }
        records[id][prop].push(value);
    }
    return records;
}
    /*MOGNA TAK CHUT UPROSTIT
    function updateRecords(records, id, prop, value) {
        if (value === '') {
            delete records[id][prop];
        } else if (prop === "tracks") {
            records[id][prop] = records[id][prop] || []; // shortcircuit evaluation
            records[id][prop].push(value);
        } else {
            records[id][prop] = value;
        }
        return records;
    }*/
//  nU I MOGNO VIVESTI OTDELNUU KONSTANTU TIPA UPROSTIT STRUKTURU. HZ PROSHE ONO ILI NE
/*
function updateRecords(records, id, prop, value) {
    // Access target album in record collection
    const album = records[id];
    // Update the album
    if (value === "") {
        delete album[prop];
    } else if (prop !== "tracks") {
        album[prop] = value;
    } else {
        album["tracks"] = album["tracks"] || [];
        album["tracks"].push(value);
    }
    // Return the full collection
    return records;
}
*/
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

