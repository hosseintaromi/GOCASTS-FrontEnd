// var => (function-scoped) / Hoisting:yes /Re-declaration:yes
function exampleVar() {
  console.log(a); // undefined (due to hoisting)
  var a = 10;
  console.log(a); // 10
  var a = 30;
  console.log(a); // 30
}
exampleVar();

function exampleLet() {
  // console.log(b); // ReferenceError (due to Temporal Dead Zone)
  let b = 20;
  console.log(b); // 20
}
exampleLet();

function exampleConst() {
  const c = 30;
  console.log(c); // 30

  // c = 40; // TypeError: Assignment to constant variable

  const obj = { name: "John" };
  obj.name = "Jane"; // This is allowed
  console.log(obj.name); // Jane
}
exampleConst();
