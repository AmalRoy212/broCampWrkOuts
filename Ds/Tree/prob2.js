class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  Interst(data){
    let newNode = new Node(data);
    let current = this.root;

    if(!this.root){
      this.root = newNode;
      return
    }else{
      while(true){
        if(this.root.data < newNode.data){
          if(!current.left){
            current.left = newNode;
            break;
          }else{
            current = current.left;
          }
        }else{
          if(!current.right){
            current.right = newNode;
            break;
          }else{
            current = current.right;
          }
        }
      }
    }
  }
  contian(data){
    let current = this.root;
    while(current){
      if(data < current.data){
        current = current.left;
      }else if(data > current.data){
        current = current.right;
      }else{
        return true;
      }
    }
    return false;
  }
}

let tree = new BinarySearchTree();
tree.Interst(10);
tree.Interst(8);
tree.Interst(20);
console.log(tree.contian(8));
