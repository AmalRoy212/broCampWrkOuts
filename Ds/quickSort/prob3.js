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

    if(this.head === null){
      this.head = newNode;
    }else{
      this.tail.next = newNode;
    }
    this.tail = newNode
  }

  print(){
    let current = this.head;
    while(current){
      console.log(current.data);
      current = current.next;
    }
  }

  sortList(){
    let current = this.head;
    let piviot = this.head.data;
    let left = [];
    let right = [];
    while(current){
      if(current.data < piviot){
        
      }
    }
  }
}