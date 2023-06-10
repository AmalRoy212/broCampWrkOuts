{
  //deep copy in array 
  const arr = [1, 2, 3];
  const coArr = arr.slice();

  console.log(arr);
  console.log(coArr);

  console.log('******************-Modifiying-**********************\n');
  coArr[0] = 99;

  console.log(arr);
  console.log(coArr);
}
{
  //deep copy  in obj
  console.log('****************************************\n');
  const originalObject = { a: 1, b: 2, c: { d: 3 } };
  const copiedObj = Object.assign({}, originalObject);

  console.log(originalObject);
  console.log(copiedObj);

  console.log('******************-Modifiying-**********************\n');
  copiedObj.a = 'amal';
  copiedObj.c.d = 'value'

  console.log(originalObject);
  console.log(copiedObj);
}

{
  //can make the nested obj or arr deep using the json
  console.log('***************-Creatting-*************************\n');
  const originalObject = { a: 1, b: 2, c: { d: 3 } };
  const copiedObj = JSON.parse(JSON.stringify(originalObject));

  console.log(originalObject);
  console.log(copiedObj);

  console.log('******************-Modifiying-**********************\n');
  copiedObj.a = 'amal';
  copiedObj.c.d = 'value'

  console.log(originalObject);
  console.log(copiedObj);
}