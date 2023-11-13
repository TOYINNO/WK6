//1

let assigned = new  Array(2,3,7,23,9,4,675,8,0,-1,8,45,-69,30,55)
console.log(assigned)
let backReverse = assigned.reverse()
console.log(backReverse)

//2
let max = assigned[0]
let min = assigned[0];
for (let i = 0; i < assigned.length; i++) {
// If the element is greater
// than the max value, replace max
if (assigned[i] > max) { max = assigned[i]; }

// If the element is lesser
// than the min value, replace min
if (assigned[i] < min) { min = assigned[i]; }
}
console.log("Max element is: " + max);
console.log("Min element is:"+min);

//3
const evens = assigned.filter(item => item % 2 === 0); //filter for even
console.log(evens);

const odd = assigned.filter(item => item % 2 !== 0);
console.log(odd);

//4
const sumPositives = (assigned = []) => {
const isPositive = num => typeof num === 'number' && num > 0;
const res = assigned.reduce((acc, val) => {
  if(isPositive(val)){
     acc += val;
  };
  return acc;
}, 0);
return res;
};
console.log(sumPositives(assigned));

//5