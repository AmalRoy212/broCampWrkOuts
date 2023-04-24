// trie 
class TrieNodes{
  constructor(){
    this.children = {};
    this.endOfWord = false;
  }
}
class Trie{
  constructor(){
    this.root = new TrieNodes();
  }
  insert(word){
    let currentNode = this.root;
    for(let i=0;i<word.length;i++){
      let char = word[i];
      if(!currentNode.children[char]){
        currentNode.children[char] = new TrieNodes();
      }
      currentNode = currentNode.children[char];
    }
    currentNode.endOfWord = true;
  }
  search(word){
    let currentNode = this.root;
    for(let i=0;i<word.length;i++){
      let char = word[i];
      if(!currentNode.children[char]){
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return true;
  }
  remove(word){
    let currentNode = this.root;
    let stack = [];
    for(let i=0;i<word.length;i++){
      let char = word[i];
      if(!currentNode.children[char]){
        return;
      }
      stack.push([currentNode,char]);
      currentNode = currentNode.children[char];
    }
    currentNode.endOfWord = false;

    while(stack.length > 0){
      const [parentNode , char] = stack.pop();
      const node = parentNode.children[char];
      if(Object.keys(node.children).length === 0 && !node.endOfWord){
        delete parentNode.children[char];
      }else{
        break;
      }
    }
  }
}
let trie = new Trie();
trie.insert('akhil');
trie.insert('amal');
console.log(trie.search('amal'));
trie.remove('amal');
console.log(trie.search('amal'));
console.log(trie.search('akhil'),trie);
