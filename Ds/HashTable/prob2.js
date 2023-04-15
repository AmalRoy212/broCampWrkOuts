class HashTabale{
  constructor(size){
    this.table = new Array(size);
    this.size = size
  }
  //hash
  hash(key){
    let total = 0;
    for(let i=0;i<key.length;i++){
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  //set
  set(key,value){
    let index = this.hash(key);
    if(this.table[index]){
      let data = null;
      this.table[index].forEach((element) => {
        if(element[0] == key){
          element[1] = value;
          data = this.table[index]
        }
      });
      if(!data){
        this.table[index].push([key,value]);
      }
    }else{
      this.table[index] = [[key , value]];
    }
  }
  //get
  get(key){
    let index = this.hash(key);
    let data = null;
    this.table[index].forEach(element =>{
      if(element[0] == key){
        console.log(element);
        data = element;
        
      }
    });
    // if(!data){
    //   console.log('No Such Datas to get');
    // }
  }
  //removing
  remove(key){
    let index = this.hash(key);
    if(this.table[index]){
      if(this.table[index].length > 0){
        this.table[index].forEach((element ,i)=>{
          if(element[0] == key){
            this.table[index].splice(i,1)
          }else console.log('No Suc Datas..!');

        })
      }else{
        this.table[index] = undefined;
      }
    }else console.log('No Suc Datas..!');
  }
  //printing all elements
  print(){
    for(let i=0;i<this.table.length;i++){
      console.log(this.table[i]);
    }
  }

}

let newTable = new HashTabale(3);
newTable.set('name','amal');
newTable.set('mane','akhil');
newTable.set('age',25);
newTable.set('plaace','wayanad')
newTable.remove('plaace');
newTable.get('plaace');
newTable.print();
