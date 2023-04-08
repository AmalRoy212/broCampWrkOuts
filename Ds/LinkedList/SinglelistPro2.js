//adding nodes both side of an given specific value in the list
class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class SingleList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  append(data){
    let newNode = new Node(data);
    if(this.head == null){
      this.head = newNode;
    }else{
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }
  print(){
    let current = this.head;
    while(current != null){
      console.log(current.data);
      current = current.next;
    }
    console.log('*________________*');
  }
  reversingList(){
    let current = this.head;
    let prevNode = null;
    let nextNode = null;

    while(current !== null){
      nextNode = current.next;
      current.next = prevNode;
      prevNode = current;
      current = nextNode;
    }
    this.head = prevNode;
  }
  appendDoubleSides(data,dataL,dataR){
    let current = this.head;
    let prev = null;
    let nodeLeft = new Node(dataL);
    let nodeRight = new Node(dataR);
    if(current !== null && data === this.head.data){
      nodeLeft.next = this.head;
      nodeRight.next = this.head.next
      this.head.next = nodeRight;
      this.head = nodeLeft;
      return;
    }
    while(current !== null){
      if(data === current.data && current.next !== null){
        nodeLeft.next = current;
        prev.next = nodeLeft;
        nodeRight.next = current.next;
        current.next = nodeRight;
      }
      if(data !== current.data && current.next !== null){
        prev = current;
      }
      current = current.next;
    }
    if(data === this.tail.data){
      nodeLeft.next = this.tail;
      prev.next = nodeLeft;
      this.tail.next = nodeRight;
      this.tail = nodeRight;
    }
  }
}

let newSLits = new SingleList();
newSLits.append(10);
newSLits.append(40);
newSLits.append(30);
newSLits.append(20);
newSLits.print();
newSLits.appendDoubleSides(40,200,300);
newSLits.print();
// newSLits.reversingList();
// newSLits.print();
// console.log(newSLits.head.data,newSLits.tail.data);