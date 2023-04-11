// bubbe sort with the recursive function

function bubble(values){
  for(let i=0;i<values.length;i++){
    let swap ;
    if(values[i] > values[i+1]){
      let temp = values[i];
      values[i] = values[i+1];
      values[i+1] = temp;
      swap = true
    }else
      swap = false;
    if(swap)
      bubble(values);
  }
}

let vals = [10, -20, -5, 5, 2, 70];
bubble(vals);
console.log(vals);