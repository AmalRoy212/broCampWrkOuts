let letters = ['dog','lamp','ball','noise','off','axe','call'];

function quickSort(val){
  if(val.length < 2){
    return val;
  }
  let piviot = val[val.length-1];
  let left = [];
  let right = [];
  for(let i=0;i<val.length-1;i++){
    if(val[i] < piviot){
      left.push(val[i]);
    }else{
      right.push(val[i]);
    }
  }
  return[...quickSort(left), piviot,...quickSort(right)];
}
console.log(quickSort(letters));