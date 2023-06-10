let count = 0
const intId = setInterval(()=>{
    ++count;
    console.log('hi',count);
    if(count >= 5){
        clearInterval(intId);
        console.log("Interval is finished")
    }
},2000);