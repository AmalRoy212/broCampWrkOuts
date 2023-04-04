class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class list{
  constructor(){
    this.head = null ;
    this.tail = null;
  }

  addNodes(data){
    let newNode = new Node(data);

    if(this.head == null){
      this.head = newNode;
    }else{
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  printNodes(){
    let current = this.head;

    while(current != null ){
      console.log(current.data);
      current = current.next;
    }
  }
}

let newList = new list;

newList.addNodes(10);
newList.addNodes(20);
newList.addNodes(30);

newList.printNodes();