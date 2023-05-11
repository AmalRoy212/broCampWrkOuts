let me= '  hi  amamlll amal ';
let count = 0;
let prev = 0;
for(let i=0;i<me.length;i++){
  if(me[i] == ' ' && i!=0 && i!=me.length-1){
      count ++;
  }
  
}
console.log(count);