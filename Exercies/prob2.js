let vals = [3000,1000,2000];

for(let i=0;i<vals.length;i++){
  for(let j=i;j<vals.length;j++){
    if(vals[i] < vals[j]){
      let temp = vals[i];
      vals[i] = vals[j];
      vals[j] = temp;
    }
  }
}
let sum =0;
let count =0;
for(let i=1;i<vals.length-1;i++){
  sum = sum+vals[i]
  count ++;
}

let avg = sum/count

console.log(avg);