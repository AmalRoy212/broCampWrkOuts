//new trie 
class TrieNodes{
  constructor(){
    this.children = {};
    this.isEndOfWord = false;
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
    currentNode.isEndOfWord = true;
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

  suffixInsert(suffix){
    for(let i=0;i<suffix.length;i++){
      this.insert(suffix);
      suffix = suffix.slice(i);
    }
  }
}

let newTrie = new Trie();
newTrie.insert('amal');
console.log(newTrie.search('amal'));