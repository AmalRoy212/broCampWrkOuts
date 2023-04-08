// sorting single linkedList
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
    this.tail = newNode;
  }
  print(){
    let current = this.head;
    while(current !== null){
      console.log(current.data);
      current = current.next;
    }
  }
  sortMyList(oreder){
    let current = this.head;
    let temp = null;
    if(oreder === 1){
      while(current !== null){
        let nextOfCurr = current.next;
        while(nextOfCurr !== null){
          if(current.data > nextOfCurr.data){
            temp = current.data;
            current.data= nextOfCurr.data;
            nextOfCurr.data = temp
          }
          nextOfCurr = nextOfCurr.next;
        }
        current = current.next;
      }
    }else{
      while(current !== null){
        let nextOfCurr = current.next;
        while(nextOfCurr !== null){
          if(current.data < nextOfCurr.data){
            temp = current.data;
            current.data = nextOfCurr.data;
            nextOfCurr.data = temp
          }
          nextOfCurr = nextOfCurr.next;
        }
        current = current.next;
      }
    }
  }
}
let newSList = new SingleList();
newSList.append(100);
newSList.append(50);
newSList.append(80);
newSList.append(70);
newSList.append(10);
newSList.print();
console.log('Sorting The List Ace*____________*');
newSList.sortMyList(1);
newSList.print();
console.log('Sorting List Des*________________*');
newSList.sortMyList(1);
newSList.print();
console.log(newSList.head.data,'_____',newSList.tail.data);
