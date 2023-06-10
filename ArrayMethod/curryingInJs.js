function addNums(num1){
  return function(num2){
    return sum =num1 + num2
  }
}

const result = addNums(5)(5);
console.log(result);