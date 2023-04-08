//recursive function finding sum of all elements in the arra

function findTheSum(values,index){
  values[0] += values[index];
  if(index < values.length-1){
    index++;
    findTheSum(values,index);
  }
  return values[0];
}

let newVal = [10,20,30,15,15];
let sumOf = findTheSum(newVal,1);
console.log(sumOf);