//binary tree basic operations

const { text } = require("express");

class Node {
  constructor(data){
    this.data = data;
    this.right = null;
    this.left = null;
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
    }else{
      if(newNode.data < this.root.data){
        let current = this.root.left;
        while(current.data <= data){
          current = current.left;
        }
        current.left = newNode;
      }else if(newNode.data < this.root.data){
        let current = this.root.right;
        while(current.data <= data){
          current = current.right;
        }
        current.right = newNode;
      }
    }
  }
}

let tree = new BinaryTree();
tree.insert(10);
tree.insert(8);
tree.insert(20);
console.log(tree);