/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(ar) {
  var pre
      
  for(let i=0;i<ar.length - 1;i++){
      if(ar[i][0] == ar[i+1][0]){
          var match = ar[i][0];
          var length = ar[i].length > ar[i+1].length?ar[i].length:ar[i+1].length
          for(let j=1;j< length ;j++){
              if(ar[i][j] == ar[i+1][j]){
              match += ar[i][j]
  
              }else{
                  break;
              }
          }
      }
      pre = match
      if(ar.length == 1 && ar[0].length == 0) pre = ar[0]
  }
  
  
  return pre = pre ? pre : ""
  };