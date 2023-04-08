/*basics of recursive function */

function sortMyArray(values,index){
  let temp ;
  for(let i=index+1;i<values.length;i++){
    if(values[index] > values[i]){
        temp = values[index];
        values[index] = values[i];
        values[i] = temp;
      }
  }
  if(index < values.length - 1){
    index++;
    sortMyArray(values,index);
  }
  return values;
}
let newVal = [25,10,9,32,90,75];
let vals = sortMyArray(newVal,0);
console.log(vals);
