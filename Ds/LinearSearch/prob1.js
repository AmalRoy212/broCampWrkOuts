/*Write a function that takes in an array of integers and a target integer,
 and returns the index of the first occurrence of the target integer in the array.
 If the target integer is not in the array, the function should return -1 */

function findElement(values,target){
  for(let i=0;i<values.length;i++){
    if(values[i] == target){
      return i;
    }
  }
  return -1;
}
let newVals = [10,30,20,60,40,80,90];
let result = findElement(newVals,60);
console.log(result);