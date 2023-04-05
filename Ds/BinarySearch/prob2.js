/*findig the smallest missing element in a array*/
let newVals = [0,1,2,4,5,6];

function fidningTheMissingSmallest(values){
  let left = 0;
  let right = values.length - 1;

  while(left < right){
    let mid = Math.floor((left+right)/2);
    if(values[mid] == mid + values[0])
      left = mid + 1;
    else
      right = mid - 1;
  }

  if (left == values.length)
    return None
  else
    return left + values[0];
}
console.log(fidningTheMissingSmallest(newVals));