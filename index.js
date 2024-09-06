console.log("--------------------------- Task 1 ---------------------------");

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";

for (let i = 0; i < friends.length; i += 1) {
  string += `${friends[i]}, `;
}
console.log(string);

//-----OR

// string = friends.join(", ");
// console.log(string);

console.log("--------------------------- Task 2 ---------------------------");

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
console.log(cards);

console.log("--------------------------- Task 3 ---------------------------");

const cardToRemove = cards.splice(cards.indexOf("Карточка-3"), 1);
console.log(cards);

console.log("--------------------------- Task 4 ---------------------------");

const cardToInsert = cards.splice(cards.length, 0, "Карточка-6");
console.log(cards);

//-----OR

// const cardToInsert = cards.push("Карточка-6");
// console.log(cards);

console.log("--------------------------- Task 5 ---------------------------");

const cardToUpdate = cards.splice(2, 1, "Карточка-4 змінено");
console.log(cards);

//-----OR

// cards[2] = "Карточка-4 змінено";
// console.log(cards);
