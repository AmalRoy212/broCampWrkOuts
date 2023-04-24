// new trie
class TrieNodes {
  constructor() {
    this.children = {};
    this.EndOfWord = '*';
  }
}

class Trie {
  constructor() {
    this.root = new TrieNodes();
  }

  insert(data) {
    let currentNode = this.root;
    for (let i = 0; i < data.length; i++) {
      var char = data[i]
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNodes();
      }
      currentNode = currentNode.children[char];
    }
    currentNode.children[char] = this.EndOfWord;
  }
  search(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return true;
    
  }
}

let trie = new Trie();
trie.insert('amal');
console.log(trie.search('am'));
