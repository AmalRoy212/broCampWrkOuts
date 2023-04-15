class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  print(){
    console.log('****________****');
    for(let i=0;i<this.items.length;i++){
      console.log(this.items[i]);
    }
  }
}

let newStack = new Stack();
newStack.push(1)
newStack.push(2)
newStack.push(3)
newStack.push(4)
newStack.push(5)
newStack.print()
newStack.pop()
newStack.print();

