let names = ['thashreef','nowfan','abhi','amal','basil']

for(let i=1;i<names.length;i++){
  let valueToInsert = names[i];
  for(let j=i-1;j>=0;j--){
    if(names[j] > valueToInsert){
      names[j+1] = names[j];
      names[j] = valueToInsert;
    }
  }
}
console.log(names);