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

  remove(word) {
    const stack = [];
    let currentNode = this.root;

    // Traverse the Trie to find the node representing the word to remove.
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        return;
      }
      stack.push([currentNode, char]);
      currentNode = currentNode.children[char];
    }

    // Mark the node as not a word.
    currentNode.EndOfWord = false;

    // Traverse up the Trie and delete any nodes that have no children and are not words.
    while (stack.length > 0) {
      const [parentNode, char] = stack.pop();
      const node = parentNode.children[char];
      if (Object.keys(node.children).length === 0 && !node.EndOfWord) {
        delete parentNode.children[char];
      } else {
        break;
      }
    }
  }
}

let newTrie = new Trie();
newTrie.insert('amal');
newTrie.insert('akhil');
newTrie.remove('amal')
console.log(newTrie.search('amal'));