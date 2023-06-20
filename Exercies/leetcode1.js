let s = "abbacd";
let s1=null;
for(i=0;i<s.length;i++){
  code = s.charCodeAt(i)
  console.log(code);
  if(s.charCodeAt(i+1) !== code){
    val+=s[i];
  }

}

console.log(val);