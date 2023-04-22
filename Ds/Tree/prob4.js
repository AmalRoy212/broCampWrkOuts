//binary search tree
class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{
  constructor(){
    this.root = null;
  }

  insert(data){
    let newNode = new Node(data);

    if(!this.root){
      this.root = newNode;
      return;
    }else{
      let current = this.root;
      while(true){
        if(data < current.data){
          if(!current.left){
            current.left = newNode;
            break;
          }
          current = current.left;
        }else{
          if(!current.right){
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }
  }

  remove(data){
    let current = this.root;
    let parentNode = null;

    while(true){
      if(data < current.data){
        parentNode = current;
        current = current.left;
      }else if(data > current.data){
        parentNode = current;
        current = current.right;
      }else{
        if(current.right){
          let move = current.right;
          let prev = null;
          while(move.left){
            prev = move;
            move = move.left;
          }
          current.data = move.data;
          prev.left = null;
          break;
        }else if(!current.right){
          let move = current.right;
          let prev = current;
          while(move){
            prev = move;
            move = move.right;
          }
          break;
        }
      }
    }
    
  }

  inOrder(){
    this.inOrderHelper(this.root);
  }

  inOrderHelper(currNode){
    if(currNode){
      this.inOrderHelper(currNode.left);
      console.log(currNode.data);
      this.inOrderHelper(currNode.right);
    }
  }
}

let tree = new BinaryTree();
tree.insert(10);
tree.insert(8);
tree.insert(11);
tree.inOrder();
tree.remove(8);
