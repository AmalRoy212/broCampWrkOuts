//max heap
class MaxHeap{
  constructor(values){
    this.values = values;
    this.buildHeap(values);
  }
  buildHeap(values){
    for(let i=this.findParent(values.length-1);i>=0;i--){
      this.shiftDown(i);
    }
  }
  shiftDown(currentIndex){
    let endIdx = this.values.length-1;
    let leftIdx = this.findLeftChild(currentIndex);
    while(leftIdx <= endIdx){
      let rightIdx = this.findRightChild(currentIndex);
      let idxToShift ;
      if(rightIdx <= endIdx && this.values[leftIdx] < this.values[rightIdx]){
        idxToShift = rightIdx;
      }else{
        idxToShift = leftIdx;
      }
      if(this.values[currentIndex] < this.values[idxToShift]){
        let temp = this.values[currentIndex];
        this.values[currentIndex] = this.values[idxToShift];
        this.values[idxToShift] = temp;
        currentIndex = idxToShift;
        leftIdx = this.findLeftChild(currentIndex);
      }
    }
  }
  findParent(i){
    return Math.floor((i-1)/2);
  }
  findLeftChild(i){
    return (i*2)+1;
  }
  findRightChild(i){
    return (i*2)+2;
  }
  print(){
    for(let i=0;i<this.values.length;i++){
      console.log(this.values[i]);
    }
  }
}
let val = [6,2,8]
let heap = new MaxHeap(val);
heap.print();