//implmetation of heap
class MinHeap {
  constructor(values) {
    this.values = values;
    this.buildHeap(values);
  }

  //building an array to heap
  buildHeap(values) {
    /* now the i will be the last parent index
    this.parent(values.length - 1) means to find the last elemnt's parent
    the parent function will calculate the (i-1)/2 will be the position of the
    last elements parent */
    for (let i = this.parent(values.length - 1); i >= 0; i--){
      this.shiftDown(i);
    }
  }

  /* here we will check the both (if) child weather the smallest one 
  will be swpaed with the parent  */
  shiftDown(currentIndex) {
    let endIdx = this.values.length - 1;
    /*finding the left child of the current index, here current index will
    send from the for loop*/
    let leftIdx = this.leftChild(currentIndex);
    while(leftIdx <= endIdx){
      let rightIdx = this.rightChild(currentIndex);
      let idxToShift ;
      if(rightIdx <= endIdx && this.values[rightIdx] < this.values[leftIdx]){
        idxToShift = rightIdx;
      }else{
        idxToShift = leftIdx;
      }
      if(this.values[currentIndex] > this.values[idxToShift]){
        let temp = this.values[currentIndex]
        this.values[currentIndex] = this.values[idxToShift];
        this.values[idxToShift] = temp;
        currentIndex = idxToShift;
        leftIdx = this.leftChild(currentIndex);
      }else{
        return;
      }
    }

  }

  /*for shifting up the child value to the parent if the child value 
  is less than parent*/
  shiftUp(currentIndex) {
    let parentIdx = this.parent(currentIndex);
    while(currentIndex > 0 && this.values[parentIdx] > this.values[currentIndex]){
      let temp = this.values[parentIdx];
      this.values[parentIdx] = this.values[currentIndex];
      this.values[currentIndex] = temp;
      currentIndex = parentIdx;
      parentIdx = this.parent(currentIndex);
    }
  }

  //to return the minimum value cos its min heap
  peek() {
    return this.values[0]
  }

  //to remove from the top
  remove() {
    [this.values[0],this.values[this.values.length-1]] = [this.values[this.values.length-1],this.values[0]];
    this.values.pop();
    this.shifDown(0);
  }

  //inserting values
  insert(data) {
    let currIdx = this.values.push(data);
    this.shiftUp(currIdx);
  }

  // to find the last parent 
  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  //finding the left child
  leftChild(i) {
    return (i * 2) + 1;
  }

  //finding the right child
  rightChild(i) {
    return (i * 2) + 2;
  }

  print() {
    for (let i = 0; i < this.values.length; i++) {
      console.log(this.values[i]);
    }
  }
}

let val = [6,2,8];
let heap = new MinHeap(val);
heap.print();
console.log('**********');
// heap.insert(1);
// heap.insert(5);
// heap.insert(15);
heap.remove();
heap.print();
console.log(heap);