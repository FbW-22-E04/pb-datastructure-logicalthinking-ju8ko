// Lowest to Highest
const lowestToHighest = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
lowestToHighest.sort(function (a, b) {
  return a - b;
});
console.log(lowestToHighest);

//Alphabetical Order
const alphabetOrder = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
alphabetOrder.sort();
console.log(alphabetOrder);

//Bonus
const byLength = function (arr) {
  const sort = arr.sort((a, b) => a.length - b.length);
  return sort;
};
console.log(byLength(["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"]));
