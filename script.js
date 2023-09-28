/* 1'zadachka*/

const arr1 = [
  1,
  "Hello",
  true,
  -0.2,
  "45"
];

const arr2 = [
  98,
  "09",
  false,
  "dinia",
  undefined
];

const arr3 = [
  -9,
  null,
  "JavaScript",
  String,
  "'"
];

const arr4 = [
  Number,
  NaN,
  "4",
  Object,
  "q"
];

const arr5 = [
  Array,
  "dinia1964",
  "script",
  1112,
  9008
]

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);




/* 3'zadachka */

function filterNumber(numbers) {
  const afterarr = numbers.filter(function(number){
    return number >= 0
  });
  return afterarr;
}


const arr = [-1, 4,-2, 1,-9,3];
const Arr = filterNumber(arr);
console.log(Arr);




/* 4'zadachka */

function addodin(strings) {
  const newarray = [];
  for (let i = 0; i < strings.length; i++) {
    newarray.push(strings[i] += "!")
    
  }
  return newarray
}

const nicearr = ["Hello", "JavaScript", "dinia"];
const array = addodin(nicearr);
console.log(array);