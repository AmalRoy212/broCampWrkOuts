/*searching a value using the binary
search method */

let newVals = [10,20,30,40,50,60,70,80,90];

function findIndexOf(value,target){
  let left = 0;
  let right = value.length -1;

  while(left < right){
    let mid = Math.floor((left + right)/2);
    console.log('initial middddddd',mid);

    if(value[mid] == target){
      return mid;
    }else if( value[mid] < target){
      left = mid + 1;
      console.log('left',mid);
    }else if( value[mid] > target){
      right = mid - 1;
      console.log('monuseaaaa',mid);
    }
  }
  return -1;
}

findIndexOf(newVals,30);