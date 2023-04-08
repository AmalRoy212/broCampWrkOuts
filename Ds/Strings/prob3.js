//finding the charcodes


let theName = 'Amal';

function newName(name, ofChar) {
  let amal ='';
  for (let i = 0; i < name.length; i++) {
    let charCode = name.charCodeAt(i);
    let newCharCode;
    if (charCode >= 65 && charCode <= 90) {
      newCharCode = charCode + ofChar;
    } else if (charCode >= 97 && charCode <= 122) {
      newCharCode = charCode + ofChar;
    }
    amal += String.fromCharCode(newCharCode);
  }
  return amal;
}

let newNameOf = newName(theName, 2);
console.log(newNameOf);