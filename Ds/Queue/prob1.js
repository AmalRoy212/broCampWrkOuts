class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(data){
    let newNode = new Node(data);

    if(this.front  === null){
      this.front = newNode;
    }else{
      this.rear.next = newNode;
    }
    this.rear = newNode;
  }

  deQueue(){
    this.front = this.front.next;
  }

  print(){
    let current = this.front;
    while(current){
      console.log(current.data);
      current = current.next;
    }
  }
}

let newQueue = new Queue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.deQueue();
newQueue.print();
console.log('\n',newQueue.front.data,'___',newQueue.rear.data);