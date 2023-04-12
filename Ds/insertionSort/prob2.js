//Write a program to implement Insertion Sort for a linked list 

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  //adding nodes
  append(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode
    }
    this.tail = newNode;
  }
  //displaying the elements
  print() {
    let current = this.head;
    console.log("____________***______________")
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  // sorting the elemnets in accending order with insertion sort
  sortMe() {
    let current = this.head;
    // while(current){
    //   let jnCurr = current.next;
    //   while(jnCurr){
    //     if(current.data > jnCurr.data){
    //       let temp = jnCurr.data;
    //       jnCurr.data = current.data;
    //       current.data = temp;
    //     }
    //     jnCurr = jnCurr.next;
    //   }
    //   current = current.next;
    // }

    while(current){
      let val = current.next?.data;
      let innerCurr = current.next;
      while(innerCurr){
        if(innerCurr.data > val && val < innerCurr.next?.data){
          innerCurr.next.data = innerCurr.data;
          innerCurr.data = val 
        }
        innerCurr = innerCurr.next;
      }
      current = current.next;
    }

    // while(current){
    //   let val = current.next?.data;
    //   let innerCurrent = this.head;
    //   while(innerCurrent && innerCurrent.data !== current.next?.data){
    //     console.log(innerCurrent.data,'second loop');
    //     if(innerCurrent.data > val){
    //       console.log(innerCurrent.data,'____',val)
    //       innerCurrent.next.data = innerCurrent.data;
    //     }
    //     innerCurrent = innerCurrent.next;
    //   }
    //   innerCurrent.data = val;
    //   current = current.next;
    // }
  }
}

let newList = new SingleList();
newList.append(40);
newList.append(20);
newList.append(70);
newList.append(30);
newList.append(10);
newList.append(80);
newList.append(50);
newList.append(60);
// newList.print();
newList.sortMe();
newList.print();
console.log('\n',newList.head.data, '___', newList.tail.data);