let arr = [10,2,3,20,70,50];

function quickSort(vals){
  if(vals.length < 2){
    return vals;
  }
  let piviot = vals[vals.length - 1];
  let left = [];
  let right = [];
  for(let i=0;i<vals.length - 1;i++){
    if(vals[i] < piviot){
      right.push(vals[i]);
    }else{
      left.push(vals[i]);
    }
  }
  return [...quickSort(left), piviot,...quickSort(right)];
}

console.log(quickSort(arr));