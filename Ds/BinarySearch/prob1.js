/*searching a value using the binary
search method */

let newVals = [10,20,30,40,50,60,70,80,90];

function findIndexOf(value,target){
  let left = 0;
  let right = value.length -1;

  while(left < right){
    let mid = Math.floor((left + right)/2);
    if(value[mid] == target){
      return mid;
    }else if( target > value[mid]){
      left = mid ;
    }else if( value[mid] > target){
      right = mid;
    }
  }
  return -1;
}

let pos = findIndexOf(newVals,70);
console.log('the posion is ',pos);
