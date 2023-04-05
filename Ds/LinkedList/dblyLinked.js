class Node{
  constructor(data){
    this.prev = null ;
    this.data = data ;
    this.next = null ;
  }
}

class DoublyList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  addNodes(data){
    let newNode = new Node(data);

    if(this.head == null){
      this.head = newNode
    }else{
      newNode.prev = this.tail;
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
  }
}

let newDbly = new DoublyList();

newDbly.addNodes(10);
newDbly.addNodes(30);
newDbly.addNodes(20);

newDbly.print();
console.log(newDbly);