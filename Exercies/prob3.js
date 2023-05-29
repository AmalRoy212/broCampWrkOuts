let ar = [1,2,0,3];

for(let i=0;i<ar.length-1;i++){
  if(ar[i] === 0){
    let temp = ar[i+1];
    ar[i+1] = 0;
    for(let j=i+2;j<ar.length;j++){
      let temp1 = ar[j];
      ar[j] = temp;
      temp = temp1;
    } 
    i=i+2;
  }
}

console.log(ar);