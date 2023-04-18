class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.items.shift();
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
  }

  print(){
    console.log('*****____*****');
    for(let i=0;i<this.items.length;i++){
      console.log(this.items[i]);
    }
  }

  size() {
    return this.items.length;
  }
}

let newQue = new Queue();
newQue.enqueue(1)
newQue.enqueue(2)
newQue.enqueue(3)
newQue.enqueue(4)
newQue.enqueue(5)
console.log(newQue.peek())
newQue.print();
