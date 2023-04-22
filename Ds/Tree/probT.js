// binary search tree 
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryS {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);

    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      let current = this.root;
      while (true) {
        if (data < current.data) {
          if (!current.left) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else if (current.data < data) {
          if (!current.right) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }
  }

  remove(data){
    this.removeHelper(data, this.root, null)
  }

  removeHelper(data, current, parentNode) {

    while (current) {
      if (data < current.data){
        parentNode = current
        current = current.left
      }else if (data > current.data){
        parentNode = current
        current = current.right
      }else{
       
        if (current.left != null && current.right !=null){
          current.data = this.getMinValue(current.right)
          this.removeHelper(current.data, current.right, current)
        }else{

          //checking head 
          if (parentNode == null){
            if (current.left == null){
              this.root = current.right
            }else{
              this.root = current.left
            }
          }else{
            if (parentNode.left == current){
              if (current.left == null){
                parentNode.left = current.right
              }else{
                parentNode.left = current.left
              }
            }else{
              if (current.left == null){
                parentNode.right = current.right
              }else{
                parentNode.right = current.left
              }
            }
          }
        }
        break
      }
    }
  }

  getMinValue(startNode) {
    if (!startNode.left) {
      return startNode.data;
    }
    return this.getMinValue(startNode.left);
  }

  inOreder() {
    this.inOrederHelper(this.root);
  }

  inOrederHelper(currNode) {
    if (currNode) {
      this.inOrederHelper(currNode.left);
      console.log(currNode.data);
      this.inOrederHelper(currNode.right);
    }
  }
}

let tree = new BinaryS();
tree.insert(10);
tree.insert(8);
tree.insert(4);
tree.insert(9);
tree.insert(15);
tree.insert(11);
tree.insert(16);
tree.inOreder();
console.log('________')
tree.remove(10);
// console.log(tree);
tree.inOreder();
// console.log(tree);


