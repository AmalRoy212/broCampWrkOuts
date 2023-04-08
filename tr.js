function recursive(index,values){
  let temp;
  for(let i=0;i<values.length;i++){
    if(values[index] < values[i]){
      temp = values[index];
      values[index] = values[i];
      values[i] = temp;
    }
    if(index < values.length - 1 ){
      index ++;
      recursive(index,values);
    }
  }
  return values;
}
let newVals = [30,10,50,20,70];
let vals = recursive(0,newVals);
console.log(vals);