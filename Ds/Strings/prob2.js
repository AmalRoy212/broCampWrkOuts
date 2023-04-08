// finding a string is a rotation of strign or not
let stOne = 'hello';
let stTwo = 'lohel';

function isRotationOf(stOne, stTwo) {
  let theSt = stOne;
  let fTwo = stOne[0] + stOne[1];
  theSt = theSt.slice(2) + fTwo;
  let eTwo = stOne[stOne.length - 2] + stOne[stOne.length - 1];
  stOne = eTwo + stOne.slice(0, -2);
  if (stOne === stTwo || theSt === stTwo) {
    return true;
  }
  return false;
}

let is = isRotationOf(stOne,stTwo);
console.log(is);