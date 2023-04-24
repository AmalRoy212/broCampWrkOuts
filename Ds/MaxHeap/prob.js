class MaxHeap{
  constructor(values){
    this.values = values;
    this.buildHeap(values);
  }
  buildHeap(vals){
    for(let i=this.findParent(vals.length-1);i>=0;i--){
      this.shifDown(i);
    }
  }
  shifDown(currentIndex){
    let endIdx = this.values.length-1;
    let leftIdx = this.findLeftChild(currentIndex);
    while(leftIdx <= endIdx){
      let rightIdx = this.findRightChild(currentIndex);
      let idxToShift;
      if(rightIdx <= endIdx && this.values[rightIdx] < this.values[leftIdx]){
        idxToShift = leftIdx;
      }else{
        idxToShift = rightIdx;
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
  shifUp(currentIndex){
    let parentIdx = this.findParent(currentIndex);
    while(currentIndex > 0 && this.values[parentIdx] < this.values[currentIndex]){
      let temp = this.values[currentIndex];
      this.values[currentIndex] = this.values[parentIdx];
      this.values[parentIdx] = temp;
      currentIndex = parentIdx;
      parentIdx = this.findParent(currentIndex);
    }
  }
  peek(){
    return this.values[0];
  }
  remove(){
    this.values[0] = this.values[this.values.length-1];
    this.values.pop();
    this.shifDown(0);
  }
  insert(data){
    let newIdx = this.values.push(data);
    this.shifUp(newIdx - 1);
  }
  findParent(i){
    return Math.floor((i-1)/2);
  }
  findLeftChild(i){
    return (i*2)+1;
  }
  findRightChild(i){
    return (i*2)+2
  }
  print(){
    for(let i=0;i<this.values.length;i++){
      console.log(this.values[i]);
    }
  }

}
let arr = [2,5,8,7,3,9,4];
let heap = new MaxHeap(arr);
heap.insert(1);
heap.print();
console.log('\n')
heap.remove();
heap.print();
console.log('\n',heap.peek());