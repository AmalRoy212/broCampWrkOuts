// doing insertion sort

let value = [-5, 10, 5, -10, 25];
//with for loop
function insertionSort(values) {
  for (let i = 1; i < values.length; i++) {
    let insertElement = values[i];
    for (j = i - 1; j >= 0 && values[j] > insertElement; j--) {
      values[j + 1] = value[j];
      value[j] = insertElement
    }
  }
}

insertionSort(value);
console.log(value);

//with while loop
let newValues = [-1,3,-2,2,0,1];
function insertionSortOFwhile(nValues){
  let i=1
  while(i < nValues.length){
    let elementToInsert = nValues[i];
    let j = i -1;
    while(j>=0 && nValues[j]>elementToInsert){
      nValues[j+1] = nValues[j];
      j--;
    }
    nValues[j+1] = elementToInsert;
    i++

  }
}

insertionSortOFwhile(newValues);
console.log(newValues);
