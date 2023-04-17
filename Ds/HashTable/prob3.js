class LinkedListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(size = 100) {
    this.size = size;
    this.buckets = new Array(size).fill(null);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedListNode(key, value);
    } else {
      let current = this.buckets[index];
      while (current) {
        if (current.key === key) {
          current.value = value;
          return;
        }
        if (!current.next) {
          current.next = new LinkedListNode(key, value);
          return;
        }
        current = current.next;
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    let current = this.buckets[index];
    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }

  delete(key) {
    const index = this.hash(key);
    let current = this.buckets[index];
    let previous = null;
    while (current) {
      if (current.key === key) {
        if (!previous) {
          this.buckets[index] = current.next;
        } else {
          previous.next = current.next;
        }
        return current.value;
      }
      previous = current;
      current = current.next;
    }
    return null;
  }
}

let newTable = new HashTable();
newTable.set('name','david');
newTable.set('age',24);
newTable.set('place','New York');
console.log(newTable.get('place'));


