// min heap 
class MinHeap{
  constructor(values){
    this.values = values;
    this.builHeap(values);
  }
  builHeap(values){
    for(let i=this.findParent(values.length);i>=0;i--){
      this.shiftDown(i);
    }
  }
  shiftDown(currentIndex){
    let endIdx = this.values.length - 1;
    let leftIdx = this.findLeftChild(currentIndex);
    while(leftIdx <= endIdx){
      let rightIdx = this.findRightChild(currentIndex);
      let idxToShift ;
      if(rightIdx <= endIdx && this.values[rightIdx] < this.values[leftIdx]){
        idxToShift = rightIdx;
      }else{
        idxToShift = leftIdx;
      }
      if(this.values[currentIndex] > this.values[idxToShift]){
        let temp = this.values[currentIndex];
        this.values[currentIndex] = this.values[idxToShift];
        this.values[idxToShift] = temp;
        currentIndex = idxToShift;
        leftIdx = this.findLeftChild(currentIndex);
      }else{
        return
      }
    }
  }
  shifUp(currentIndex){
    let parentIdx = this.findParent(currentIndex);
    while(currentIndex > 0 && this.values[parentIdx] > this.values[currentIndex]){
      let temp = this.values[parentIdx];
      this.values[parentIdx] = this.values[currentIndex];
      this.values[currentIndex] = temp;
      currentIndex = parentIdx;
      parentIdx = this.findParent(currentIndex);
    }
  }
  peek(){
    return this.values[0];
  }
  insert(data){
    let newIdx = this.values.push(data);
    this.shifUp(newIdx-1)
  }
  remove(){
    this.values[0] = this.values[this.values.length-1];
    this.values.pop();
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

let val = [6,2,8];
let heap = new MinHeap(val);
heap.print();
heap.insert(1);
console.log('**********');
// heap.remove();
heap.print();
