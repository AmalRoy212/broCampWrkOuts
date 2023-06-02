/*
  * i will be 10 cos i will continuesly increase when the loop runs  
*/
for(var i=0;i<10;i++){}
console.log(i);


//2

// a=10;
// let a;
// console.log(a);
//it will throw an refference error

//3
let obj = {
  name:'amal',
}


let obj1 = {... obj}
obj.name="revathy"

console.log(obj);
console.log(obj1);

//4

let obj2 = {
   obj3 : {
    name : 'vava suresh'
  }
}

obj2.obj3.name = 'amal'

// let obj3 = {}


