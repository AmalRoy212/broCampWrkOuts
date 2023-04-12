//insertion sort in decendin order

let val = [10,-2,0,5,20,30,56,-10];

for(let i=0;i<val.length;i++){
  let valToInsert = val[i];
  for(let j=i-1;j>=0;j--){
    if(val[j] < valToInsert){
      val[j+1] = val[j];
      val[j] = valToInsert;
    }
  }
}
console.log(val)