const _ = require('lodash');
{
  //shallow copy

  const obj = { name: 'Amal', age: 25 };
  const obj2 = obj;

  console.log(obj);
  console.log(obj2);

  obj2.age = 20;

  console.log(obj);
  console.log(obj2);
}
console.log('\n*********************************\n');
// deep copy 

// approach 1 

const ob = {
  name: 'Amal',
  age: 25,
  skills: { primary: "fullstack", secondary: 'ds' },
  lookAge: () => { console.log(age) },
  dateOfJoin: new Date()
}

// const ob2 = { ... ob };
// const ob2 = JSON.parse(JSON.stringify(ob));
const ob2 = _.cloneDeep(ob);

console.log(ob);
console.log(ob2);

ob2.age = 20;
ob2.name = 'akhil';
ob2.skills.primary = 'frontend'

console.log(ob);
console.log(ob2);