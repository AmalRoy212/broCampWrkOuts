//sorting a unorder array with bubble sort with 2 loops
//for loop exapmle
let values = [0, -5, -10, 20, 10, 5];
let temp;
let swap;
function bubbleSort(value) {
  for (let i = 0; i < value.length - 1; i++) {
    if (swap || i === 0) {
      swap = false;
      for (let j = 0; j < value.length - 1; j++) {
        if (value[j] > value[j + 1]) {
          temp = value[j];
          value[j] = value[j + 1];
          value[j + 1] = temp;
          swap = true;
        }
      }
    }
    if (!swap)
      return;
  }
}
bubbleSort(values);
console.log(values);
console.log('***_________________***')
//with while loop
let newVals = [10, -20, -5, 5, 2, 70];
do {
  swap = false;
  for (i = 0; i < newVals.length; i++) {
    if (newVals[i] > newVals[i + 1]) {
      temp = newVals[i];
      newVals[i] = newVals[i + 1];
      newVals[i + 1] = temp;
      swap = true;
    }
  }
} while (swap)

console.log(newVals);