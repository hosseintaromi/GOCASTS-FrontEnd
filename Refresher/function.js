// Regular Function (Function Declaration)
function regularFunction() {
  console.log("regularFunction:", this);
}

// Arrow Function
const arrowFunction = () => {
  console.log("arrowFunction:", this);
};

// // 1. Direct invocation in the global scope
// console.log("--- Global Scope ---");
// regularFunction(); // this in the global scope
// arrowFunction(); // this in the global scope

// // 2. As a method of an object
// const obj = {
//   name: "Test Object",
//   regularMethod: regularFunction,
//   arrowMethod: arrowFunction,
//   innerMethod: function () {
//     console.log("innerMethod (outer this):", this);
//     const innerArrow = () => {
//       console.log("innerArrowFunction (inner this):", this);
//     };
//     innerArrow();
//   },
// };

// console.log("--- Object Method ---");
// obj.regularMethod(); // this inside the object
// obj.arrowMethod(); // this refers to the outer scope (in this case, global)
// obj.innerMethod(); // this inside the object and `this` inside the arrow function refers to the outer function's `this`

// // 3. Using call and apply
// console.log("--- Call and Apply ---");
// regularFunction.call(obj); // this refers to obj
// regularFunction.apply(obj); // this refers to obj
// arrowFunction.call(obj); // this inside the arrow function still refers to the outer scope (not obj)
// arrowFunction.apply(obj); // this inside the arrow function still refers to the outer scope (not obj)

// // 4. Using bind
// const boundRegular = regularFunction.bind(obj);
// const boundArrow = arrowFunction.bind(obj);

// console.log("--- Bind ---");
// boundRegular(); // this refers to obj
// boundArrow(); // this inside the arrow function still refers to the outer scope (not obj)

// // Example for call use case to call one function with 2 parameters
// const person1 = {
//   firstName: "Alice",
//   lastName: "Johnson",
// };

// const person2 = {
//   firstName: "Bob",
//   lastName: "Smith",
// };

// function fullName() {
//   console.log(this.firstName + " " + this.lastName);
// }

// // Using call to use the method in different contexts
// fullName.call(person1); // Alice Johnson
// fullName.call(person2); // Bob Smith
