// binary tree 
class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Binary{
  constructor(){
    this.root = null;
  }
  insert(data){
    let newNode = new Node(data);
    if(!this.root){
      this.root = newNode;
      return;
    }else{
      let current = this.root
      while(true){
        if(data < current.left){
          if(!current.left){
            current.left = newNode;
            break;
          }
          current = current.left;
        }else if(data > current.data){
          if(!current.right){
            current.right = newNode;
            break;
          }
          current = current.right;
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
let tree = new Binary();
tree.insert(10);
tree.insert(8);
tree.insert(11);
// tree.inOreder();
// tree.preOrder();
// tree.postOrder();