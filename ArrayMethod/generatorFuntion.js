function* add(){
  yield 1;
  yield 2;
  yield 3;
}

const gen = add();

let val = gen.next();
console.log(val);
val = gen.next();
console.log(val);
val = gen.next();
console.log(val);
val = gen.next();
console.log(val);

