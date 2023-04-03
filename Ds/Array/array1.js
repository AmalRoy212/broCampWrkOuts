function plusMinus(arr) {
  // Write your code here
  let posCount = 0;
let negCount = 0;
let zeroCount = 0;
for(let i=0;i<arr.length;i++){
  if(arr[i]>0)
    posCount++;
  else if(arr[i]<0)
    negCount++;
  else
    zeroCount++;
}
const positiveRatio = posCount / arr.length;
const negativeRatio = negCount / arr.length;
const zeroRatio = zeroCount / arr.length;

console.log(positiveRatio.toFixed(6));
console.log(negativeRatio.toFixed(6));
console.log(zeroRatio.toFixed(6));
}

const arr = [1,2,0,-2,10,0,0,-3];
plusMinus(arr);