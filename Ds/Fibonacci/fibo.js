//making fibonacci sequence with recursion

// function febo(number,index,fibPos){
//   fibPos = index - 1 + fibPos;
//   if(index < number){
//     index++;
//     febo(number,index,fibPos);
//   }
//   console.log(fibPos);
//   return fibPos;
// }
// let val = febo(8,1,0);
// console.log(val);

let fib = [0,1];
for(let i=2;i<10;i++){
  fib[i] = fib[i-1] + fib[i-2]; 
}
console.log(fib);

