let st = 'malayalam';
let count = 1;
let counts = [];
for(let i=0;i<st.length;i++){
  
  for(let j=i+1;j<st.length;j++){
    if(st[i]==st[j]){
      count++;
    }
  }
  counts[i]= st[i]+" "+count;
  count = 1;
}
console.log(counts)