const arrayStringsAreEqual = function(word1, word2) {
  const w1Length = word1.length;
  console.log(word1.length,word2.length);
  const w2Length = word2.length;
  let newSt1;
  let newSt2;
  for(let i=0;i < w1Length || w2Length ;i++){
    // console.log(i);
      if(i <= w1Length){ newSt1 += word1[i];}

      if(i < w2Length){ newSt2 += word2[i];}
  }

  if(newSt1 == newSt2) return true

  return false;
};

console.log(arrayStringsAreEqual(['a','bc'],['ab','c']));