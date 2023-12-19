

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

/*

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

*/
 /* obratnoe izvrashenie s while
 const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
  */
// rekursia , KAK ONA RABOTAET HZ

/* PEREVORACIVAETSA STANDARTNI CIKL(
function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
  i delaetsya tak -------------

    function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
   HZ KAK ONO RABOAET(
   Рекурсивна версія multiply розбивається таким чином. У базовому випадку, де n <= 0, повертається 1.
    Функція викликає сама себе, якщо значення n більше, але n - 1. Цей виклик функції обчислюється так само,
     викликаючи multiply знову, доки n <= 0. На даному етапі всі функції можуть повертатися, а вихідна функція
      multiply повертає відповідь.

Примітка: рекурсивні функції повинні мати базовий випадок, коли вони повертаються без повторного виклику
 функції (у цьому прикладі, коли n <= 0), інакше вони ніколи не завершаться.

 */


// Налаштування
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Змініть код лише під цим рядком
    for( let i= 0; i < contacts.length; i++){
        if (name === contacts[i].firstName) {
            if (contacts[i].hasOwnProperty(prop) === true) {
                return contacts[i][prop]}
            else {
                return 'No such property';}}
    }
    return 'No such contact'
    // Змініть код лише над цим рядком
}
lookUpProfile("Akira", "likes");
// TCNM TAKOE IZVRASHENIE!!!!!
/* for( let i= 0; i < contacts.length; i++){
        if (name === contacts[i].firstName) {
        return contacts[i][prop] || 'No such property';
        }}
   return 'No such contact' ////!!!!!!!!!!!!!!!!!


 */