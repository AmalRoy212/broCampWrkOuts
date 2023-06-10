class Node{
  constructor(data){
    this.data = data;
    this.next = null;
    this.position = 0

  }
}

class List{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  append(data){
    const newNode = new Node(data);

    if(this.head === null){
      newNode.position ++
      this.head = newNode;
    }else{
      // this.length++
      newNode.position = this.tail.position + 1
      this.tail.next = newNode
    }
    this.tail = newNode
  }

  print(){
    let current = this.head;
    while(current){
      console.log(current.data,'Loacation',current.position);
      current = current.next;
    }
  }

  findMultiesOf(num){
    let current = this.head;
    let count = 1;
    let ans = 0;
    while(current){
      if(current.position === (count * num)){
        count ++
        ans += current.data;
      }
      current = current.next;
    }
    console.log(`The sum of the values in ${num} is ${ans}`);
    return ans;
  }

  findTheSumOfPowerOf(num){
    let current = this.head;
    let count = 0;
    let sum = 0;
    while(current){
      if(current.position === (count * num)){
        count = num * count;
        sum+=current.data;
      }
      current = current.next
    }
    console.log(sum);
  }
}

const newList = new List();

newList.append(10);
newList.append(20);
newList.append(30);
newList.append(40);
newList.append(50);
newList.append(60);
newList.append(70);
newList.append(80);
newList.append(90);
newList.append(66);
newList.append(12);
newList.print();
newList.findMultiesOf(5);
newList.findTheSumOfPowerOf(2);