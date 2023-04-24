function heapify(arr, length, parentIdx) {
  let largest = parentIdx;
  let leftIdx = (parentIdx * 2) + 1;
  let rightIdx = leftIdx + 1;

  if (leftIdx < length && arr[leftIdx] > arr[largest]) {
    largest = leftIdx;
  }
  if (rightIdx < length && arr[rightIdx] > arr[largest]) {
    largest = rightIdx;
  }
  if (largest !== parentIdx) {
    let temp = arr[largest];
    arr[largest] = arr[parentIdx];
    arr[parentIdx] = temp;
    heapify(arr, length, largest);
  }
  return arr;
}

function heapSort(values) {
  let lastParentNode = Math.floor((values.length / 2) - 1);
  let lastChild = values.length-1;
  while(lastParentNode >= 0){
    heapify(values,values.length,lastParentNode);
    lastParentNode --;
  }
  while(lastChild >= 0){
    let temp = values[lastChild];
    values[lastChild] = values[0];
    values[0] = temp;
    heapify(arr,lastChild,0);
    lastChild --;
  }
  return values;
}

let arr = ['Z','B','A','T','M'];
let fVals = heapSort(arr)
console.log(fVals);