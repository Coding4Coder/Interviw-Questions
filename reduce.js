//reduce() method

const students = [
  {
    studentName: "Koyal",
    age: 30,
    marks: 50
  },
  {
    studentName: "Sonika",
    age: 21,
    marks: 77,
  },
  {
    studentName: "Deepak",
    age: 25,
    marks: 55,
  }
]
const totalMarks = students.reduce((iniVal, curVal) => {
  return iniVal + curVal.marks;
}, 0);
console.log(totalMarks);

// reduce method to comvert multidimention array to single dimention array
const anyNumbers = [ [12, 5], [1, 2], [4, 5], [4, 9] ];
const singleArr = anyNumbers.reduce((initVal, currVal) => {
  console.log(`initval is ${initVal} and current val is ${currVal}`);
  return initVal.concat(currVal);
}, [])
console.log(singleArr);
