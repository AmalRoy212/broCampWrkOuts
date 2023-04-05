/*Write a function that takes in an array of integers and returns 
the index of the smallest element in the array */

let newVals = [3,10,30,8,20,1,60,2,40,80,90];

function findTheSmallest(value){
  let holder = value[0];
  let pos;
  for(let i=1;i<value.length;i++){
    if(holder > value[i]){
      holder = value[i];
      pos = i;
    }
  }
  return pos;
}

let posOfSmall = findTheSmallest(newVals);
console.log(posOfSmall);