// binary search by recursion

function searchIndex(values,target,start,end){
  if(start > end)
    return - 1;
  let mid = Math.floor((start + end)/2);
  if(values[mid]===target){
    return mid+1;
  }else if(values[mid] < target){
    start = mid + 1;
    searchIndex(values,target,start,end);
  }else{
    end = mid - 1;
    searchIndex(values,target,start,end);
  }
}

let newVal = [10,20,30,40,55];
let find = searchIndex(newVal,30,0,newVal.length-1);
console.log(find);