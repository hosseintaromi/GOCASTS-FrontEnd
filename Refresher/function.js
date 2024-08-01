// تابع معمولی (Function Declaration)
function regularFunction() {
  console.log("regularFunction:", this);
}

// تابع فلشی (Arrow Function)
const arrowFunction = () => {
  console.log("arrowFunction:", this);
};

// // 1. فراخوانی مستقیم در سطح گلوبال
// console.log("--- Global Scope ---");
// regularFunction(); // this در سطح گلوبال
// arrowFunction(); // this در سطح گلوبال

// // // 2. به عنوان متد یک شیء
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
// obj.regularMethod(); // this درون شیء
// obj.arrowMethod(); // this درون محدوده بیرونی (در اینجا گلوبال)
// obj.innerMethod(); // this درون شیء و `this` درون تابع فلشی به `this` تابع بیرونی اشاره می‌کند

// // 3. با استفاده از call و apply
// console.log("--- Call and Apply ---");
// regularFunction.call(obj); // this به obj اشاره می‌کند
// regularFunction.apply(obj); // this به obj اشاره می‌کند
// arrowFunction.call(obj); // this در تابع فلشی همچنان به محدوده بیرونی اشاره می‌کند (نه به obj)
// arrowFunction.apply(obj); // this در تابع فلشی همچنان به محدوده بیرونی اشاره می‌کند (نه به obj)

// // 4. با استفاده از bind
// const boundRegular = regularFunction.bind(obj);
// const boundArrow = arrowFunction.bind(obj);

// console.log("--- Bind ---");
// boundRegular(); // this به obj اشاره می‌کند
// boundArrow(); // this در تابع فلشی همچنان به محدوده بیرونی اشاره می‌کند (نه به obj)

// example for call use case for example call one function with 2 parameters
// const person1 = {
//     firstName: 'Alice',
//     lastName: 'Johnson'
// };

// const person2 = {
//     firstName: 'Bob',
//     lastName: 'Smith'
// };

// function fullName() {
//     console.log(this.firstName + ' ' + this.lastName);
// }

// // استفاده از call برای استفاده از متد در کانتکست مختلف
// fullName.call(person1); // Alice Johnson
// fullName.call(person2); // Bob Smith
