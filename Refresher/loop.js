const array = [1, 2, 3, 4, 5];

array.forEach((element) => {
  console.log("forEach", element);
});

for (let i = 0; i < array.length; i++) {
  console.log("for loop", array[i]);
}

for (let number of array) {
  console.log("for of", number); // 1, 2, 3, 4, 5
}

const str = "Hello";
for (let char of str) {
  console.log("for of", char); // H, e, l, l, o
}
