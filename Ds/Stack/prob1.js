
class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(data){
    let newNode = new Node(data);

    if(this.top !== null){
      newNode.next = this.top;
    }
    this.top = newNode;
  }

  pop(){
    this.top = this.top.next;
  }

  print(){
    let current = this.top;
    while(current){
      console.log(current.data);
      current = current.next;
    }
  }

  printTheMax(){
    let current = this.top;
    let temp = current.data;
    while(current){
       if(current.data > temp){
          temp = current.data;
       }
       current = current.next;
    }
    return temp;
  }
}

let newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.pop();
let min = newStack.printTheMax();
newStack.print();
console.log("the min of stack is "+min);
// console.log(newStack.top.data);
