//convert an array to linked list
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
  //adding new values to list
  append(values){
    if(!values && !Array.isArray(values)){
      return;
    }else{
      for(let i=0;i<values.length;i++){
        let newNode = new Node(values[i]);
         if(this.head == null){
          this.head = newNode;
         }else{
          this.tail.next = newNode;
         }
         this.tail = newNode;
      }
    }
  }

  //displaying the nodes
  print(){
    let current = this.head;

    while(current != null){
      console.log(current.data);
      current = current.next;
    }
  }

}
/*creating new object for the list and adding 
and printing the converted arrray*/
let theValues = [10,20,30,40,60,50];
let newList = new SingleList();

newList.append(theValues);
newList.print();
console.log(newList);