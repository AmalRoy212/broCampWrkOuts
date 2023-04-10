//sorting a unorder array with bubble sort with 2 loops

let values = [0,-5,-10,20,10,5];

function bubbleSort(value){
  let temp;
  let swap;
  for(let i=0;i<value.length-1;i++){
    if(swap || i === 0){
      swap = false;
      for(let j=0;j<value.length-1;j++){
        if(value[j] > value[j+1]){
          temp = value[j];
          value[j] = value[j+1];
          value[j+1] = temp;
          swap = true;
        }
      }
    }
    if(!swap)
      return;
  }
}

bubbleSort(values);
console.log(values);