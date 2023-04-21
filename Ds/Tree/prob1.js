//binary tree basic operations

// const { text } = require("express");

// class Node {
//   constructor(data){
//     this.data = data;
//     this.right = null;
//     this.left = null;
//   }
// }

// class BinaryTree{

//   constructor(){
//     this.root = null;
//   }

//   insert(data){
//     let newNode = new Node(data);
//     if(!this.root){
//       this.root = newNode;
//     }else{
//       if(newNode.data < this.root.data){
//         let current = this.root.left;
//         while(current.data <= data){
//           current = current.left;
//         }
//         current.left = newNode;
//       }else if(newNode.data < this.root.data){
//         let current = this.root.right;
//         while(current.data <= data){
//           current = current.right;
//         }
//         current.right = newNode;
//       }
//     }
//   }

//   contian(data){
//     let current = this.root;
//     while(current){
//       if(data < current.data){
//         current = current.left;
//       }else if(data > current.data){
//         current = current.right;
//       }else{
//         return true;
//       }
//     }
//     return false;
//   }
// }

// let tree = new BinaryTree();
// tree.insert(10);
// tree.insert(8);
// tree.insert(20);
// console.log(tree);

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (true) {
      if (data < current.data) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
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

  search(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return current;
      }
      current = data < current.data ? current.left : current.right;
    }
    return null;
  }
}

let newTree = new BinaryTree();
newTree.insert(10)
newTree.insert(2)
newTree.insert(20)
newTree.insert(9);
console.log(newTree.contian(2));