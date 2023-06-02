
//finding the sum of score nested array of objects


let arr=[
  {name:"amal",mark:[{subject:"maths",score:25}]},
  {name:"revathi",mark:[{subject:"maths",score:15}]}
];

const value = arr.map((item) => item.mark);
let result = value.reduce((acc,curr)=>acc += curr[0].score,0);
console.log(result);

result = arr.reduce((acc,curr)=>{
   return acc += curr.mark[0].score;
},0)

console.log(result);
