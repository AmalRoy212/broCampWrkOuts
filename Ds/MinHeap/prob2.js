class MinHeap{
  constructor(){
    this.values = [];
  }
  insert(data){
    this.values.push(data);
    this.buildHeap(this.values);
  }
  buildHeap(value){
    for(let i=this.findParent(this.values.length-1);i>=0;i--){
      this.shiftDown(i);
    }
  }

  shiftDown(currentIdx){
    let endIdx = this.values.length-1;
    let leftIdx = this.findLeftChild(currentIdx);
    while(leftIdx <= endIdx){
      let rightIdx = this.findRightChild(currentIdx);
      let idxToShift ;
      if(rightIdx <= endIdx && this.values[rightIdx] < this.values[leftIdx]){
        idxToShift = rightIdx;
      }else{
        idxToShift = leftIdx;
      }
      if(this.values[currentIdx] > this.values[idxToShift]){
        let temp = this.values[currentIdx];
        this.values[currentIdx] = this.values[idxToShift];
        this.values[idxToShift] = temp;
        currentIdx = idxToShift;
        leftIdx = this.findLeftChild(currentIdx);
      }else{
        return;
      }
    }
  }


  peek(){
    return this.values[0];
  }

  remove(){
    this.values[0] = this.values[this.values.length-1];
    this.values.pop()
    this.shiftDown(0);
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

let heap = new MinHeap();
heap.insert(6);
heap.insert(2);
heap.insert(8);
heap.insert(1);
heap.insert(15);
heap.print();
console.log('**************')
heap.remove();
heap.print();
// console.log(heap);
