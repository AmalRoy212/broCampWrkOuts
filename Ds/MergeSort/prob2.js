function mergeSort(vals){
  if(vals.length < 2){
    return vals
  }
  const mid = Math.floor(vals.length / 2);
  const leftArr = vals.slice(0,mid);
  const rightArr = vals.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left,right){
  const sortedArray = [];
  while(left.length && right.length){
    if(left[0] <= right[0]){
      sortedArray.push(left.shift());
    }else{
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

const ar = [8,2,10,30,25,90,80];
const vals = mergeSort(ar);
console.log(vals);