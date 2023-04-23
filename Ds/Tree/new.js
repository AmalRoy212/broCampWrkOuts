//binary tree
class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Binaray{
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
    this.removeHelper(data,this.root,null)
  }
  removeHelper(data,currentNode,paretnNode){
    while(currentNode){
      if(data < currentNode.data){
        paretnNode = currentNode;
        currentNode = currentNode.left;
      }else if(data > currentNode.data){
        paretnNode = currentNode;
        currentNode = currentNode.right
      }else{
        if(currentNode.right && currentNode.left){
          currentNode.data = this.getMinValue(currentNode.right);
          this.removeHelper(currentNode.data,currentNode.right,currentNode);
        }else{
          if(!paretnNode){
            if(currentNode.left){
              this.root = currentNode.left;
            }else{
              this.root = currentNode.right;
            }
          }else{
            if(paretnNode.left == currentNode){
              if(currentNode.left){
                paretnNode.left = currentNode;
              }else{
                paretnNode.left = currentNode.right;
              }
            }else if(paretnNode.right == currentNode){
              if(currentNode.left){
                paretnNode.right = currentNode.left;
              }else{
                paretnNode.right = currentNode.right;
              }
            }
          }
        }
        break;
      }
    }
  }
  getMinValue(startNode){
    if(!startNode.left){
      return  startNode.data;
    }
    return this.getMinValue(startNode.left);
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
  preOrder(){
    this.preOrderHelper(this.root);
  }
  preOrderHelper(currNode){
    if(currNode){
      console.log(currNode.data);
      this.preOrderHelper(currNode.left);
      this.preOrderHelper(currNode.right);
    }
  }
  postOrder(){
    this.postOrderHelper(this.root);
  }
  postOrderHelper(currNode){
    if(currNode){
      this.postOrderHelper(currNode.left);
      this.postOrderHelper(currNode.right);
      console.log(currNode.data);
    }
  }
}

let tree = new Binaray();
tree.insert(10);
tree.insert(8);
tree.insert(11);
tree.inOrder();
console.log('******');
tree.preOrder();
console.log('******');
tree.postOrder();
tree.remove(11);
console.log('******');
tree.inOrder();
