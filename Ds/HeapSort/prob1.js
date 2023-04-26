// heap sort 
function heapify(values,length){
  function buildHeap(){
    for(let i=findParent(length);i>=0;i--){
      shiftDown(i);
    }
  }
  function shiftDown(currentIndex){
    let endIdx = length;
    let leftIdx = findLeftChild(currentIndex);
    while(leftIdx <= endIdx){
      let rightIdx = findRightChild(currentIndex);
      let idxToShif ;
      if(rightIdx <= endIdx && values[rightIdx] < values[leftIdx]){
        idxToShif = leftIdx;
      }else{
        idxToShif = rightIdx;
      }
      if(values[currentIndex] > values[idxToShif]){
        let temp = values[currentIndex];
        values[currentIndex] = values[idxToShif];
        values[idxToShif] = temp;
        currentIndex = idxToShif;
        leftIdx = findLeftChild(currentIndex);
      }else{
        break;
      }
    }
  }
  function findRightChild(i){
    return (i*2)+2
  }
  function findLeftChild(i){
    return (i*2)+1;
  }
  function findParent(i){
    return (i-1)/2
  }
  buildHeap();
}
// something is wrong with this code want to fix

function heapSort(values){
  // heapify(values,values.length-1);
  for(let i=values.length-1;i>=0;i--){
    let temp = values[0];
    values[0] = values[i];
    values[i] = temp;
    heapify(values,i-1);
  }
}

let arr = [4,9,7,2,1,5,6,3,8];
heapSort(arr);
console.log(arr);