//binary tree

const e = require("express");

class Node {
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
        if(newNode.data  < current.data){
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

  contains(data){
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

  remove(data){
    let current = this.root;
    if(data == this.root.data){
      current = current.right;
      let prev = null;
      while(current){
        prev = current
        current = current.left;
      }
      this.root.data = prev.data;
      prev = null;
      return;
    }
    let parentNode = null;
    while(true){
      if(data < current.data){
        parentNode = current
        current = current.left;
      }else if(data > current.data){
        parentNode = current;
        current = current.right;
      }else if(data == current.data){
        let move = current.right;
        let prev = null;
        if(!current.right && !current.left){
          parentNode.right = null;
          return
        }else if(!move.left){
          current.data = move.data;
          current.right = null;
          return;
        }else{
          while(move.left){
            prev = move
            move = move.left;
          }
        }
        current.data = move.data;
        prev.left = null;
        break;
      }
    }
  }

  inOrder(){
    this.inOrderHelper(this.root);
  }
  inOrderHelper(currentNode){
    if(currentNode){
    this.inOrderHelper(currentNode.left);
    console.log(currentNode.data);
    this.inOrderHelper(currentNode.right);}
  }
}

let tree = new BinaryTree();
tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(15);
tree.insert(22);
tree.insert(3);
tree.insert(4);
tree.insert(8);
tree.insert(2);
tree.insert(1);
tree.insert(7);
tree.insert(9);

tree.remove(1);

tree.inOrder()

// console.log(tree.contains(8),tree);
