// let myArray = ["go", "to", "store"];

// myArray.splice(1, 2);

// console.log(myArray);
// console.log(myArray.length);

let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

alert(arr.concat(arrayLike));
