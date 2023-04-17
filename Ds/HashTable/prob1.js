class HashTabale {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  //hash
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    console.log(total % this.size)
    return total % this.size;
  }
  //set
  set(key, value) {
    const index = this.hash(key);
    if(this.table[index]){
      let data = null
      this.table[index].forEach((element) => {
        if(element[0] == key){
          element[1] = value;
          data = element;
        }
      });
      if(!data){
        this.table[index].push([key,value])
      }
    }else{
      this.table[index] = [[key,value]];
    }

  }
  //get
  get(key) {
    let index = this.hash(key);
    if (this.table[index])
      console.log(this.table[index]);
  }
  //remove
  remove(key) {
    let index = this.hash(key);
    console.log(this.table[index])
    this.table[index] = undefined;
  }
  //displaying all elements
  print() {
    console.log(this.table)
  }
}

let newTable = new HashTabale(3);
// newTable.set('plaace', 'wayand')
newTable.set('name', 'Amal');
newTable.set('age', 25);
newTable.set('mane', 'akhil');
newTable.set('place','david');
newTable.print();
// console.log(table)
// newTable.get('name');
// newTable.get('place');
// newTable.remove('age');
// newTable.print();
// console.log(newTable);

