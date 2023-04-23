let val = [1, 5, 2, 15, 10, 25];

function heapify(val, i) {
  let parent = Math.floor((i - 1) / 2);
  let leftIdx = (parent * 2) + 1;
  let rightIdx = (parent * 2) + 2;
  let endIdx = val.length - 1;
  let idxTOShif = 1;
  while (idxTOShif > 0) {
    if (rightIdx <= endIdx) {
      if (val[rightIdx] < val[leftIdx]) {
        idxTOShif = leftIdx;
      } else {
        idxTOShif = rightIdx;
      }
      if (val[parent] < val[idxTOShif]) {
        let temp = val[parent];
        val[parent] = val[idxTOShif];
        val[idxTOShif] = temp;
        // console.log('parent is smaller', val[parent], val[idxTOShif])
        // idxTOShif = parent;
        // parent = Math.floor((idxTOShif - 1) / 2);
        // leftIdx = (parent * 2) + 1;
        // rightIdx = (parent * 2) + 2;
      }
    } else {
      if (val[parent] < val[leftIdx]) {
        let temp = val[parent];
        val[parent] = val[leftIdx];
        val[leftIdx] = temp
        // idxTOShif = parent;
        // parent = Math.floor((idxTOShif - 1) / 2);
        // leftIdx = (parent * 2) + 1;
        // rightIdx = (parent * 2) + 2;
      }
    }
    idxTOShif = parent;
    parent = Math.floor((idxTOShif - 1) / 2);
    leftIdx = (parent * 2) + 1;
    rightIdx = (parent * 2) + 2;
  }
}

heapify(val,val.length-1);




function heapSort(array){
  for(let i=1;i<array.length;i++){
    
  }
}
// heapSort(val);
console.log(val)
//stoped while the left side of the root is not heapifying 