/*Given an array of integers and a target sum, write a function to
determine if any two numbersin the array add up to the target sum.
If so, return true. If not, return false */

let newVals = [10,30,20,40,80,90];

function findTwoOfTarget(values,target){
  for(let i=0;i<values.length;i++){
    let search = values[i] - target;
    let twoVals = [];
    search = Math.abs(search);
    for(let j=0;j<values.length;j++){
      if(values[j] == search){
        twoVals[0] = values[i];
        twoVals[1] = values[j];
        return twoVals;
      }
    }
  }
  return -1;
}
let vals = findTwoOfTarget(newVals,70);
console.log(vals);