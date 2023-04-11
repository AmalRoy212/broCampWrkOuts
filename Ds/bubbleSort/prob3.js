let names = ["nowfan","thashreef","amal","akhil","basil","irfan"];
let swap;

do{
  swap = false;
  for(let i=0;i<names.length;i++){
    if(names[i] > names[i+1]){
      let temp = names[i];
      names[i] = names[i+1];
      names[i+1] = temp;
      swap = true;
    }
  }

}while(swap)

console.log(names);