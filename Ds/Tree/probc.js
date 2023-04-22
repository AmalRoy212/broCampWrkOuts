// new binary tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      while (true) {
        let current = this.root
        if (data < current.data) {
          if (!current.left) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else if (data > current.data) {
          if (!current.right) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }
  }
  inOrder() {
    this.inOrderHelper(this.root);
  }
  inOrderHelper(currNode) {
    if (currNode) {
      this.inOrderHelper(currNode.left);
      console.log(currNode.data);
      this.inOrderHelper(currNode.right);
    }
  }
  remove(data) {
    this.removeHelper(data, this.root, null);
  }
  removeHelper(data, currentNode, parentNode) {
    while (currentNode) {
      if (data < currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.right
      } else {
        if (currentNode.right && currentNode.left) {
          currentNode.data = this.getMinValue(currentNode.right);
          this.removeHelper(currentNode.data, currentNode.right, currentNode);
        } else {
          if (!parentNode) {
            if (currentNode.left) {
              this.root = currentNode.left;
            } else {
              this.root = currentNode.right;
            }
          } else {
            if (parentNode.left == currentNode) {
              if (currentNode.left) {
                parentNode.left = currentNode.left;
              } else {
                parentNode.left = currentNode.right;
              }
            }else if(parentNode.right == currentNode){
              if(currentNode.left){
                parentNode.right = currentNode.left;
              }else{
                parentNode.right = currentNode.right;
              }
            }
          }
        }
        break;
      }
    }
  }
  getMinValue(startNode) {
    if (!startNode.left) {
      return startNode.data
    }
    return this.getMinValue(startNode.left);
  }
}

let tree = new BinaryTree();
tree.insert(10);
tree.insert(8);
tree.insert(11);
tree.inOrder();
console.log('__________');
tree.remove(11);
tree.inOrder()