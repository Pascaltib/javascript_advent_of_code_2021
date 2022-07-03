const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data)=>{
  if (err){
    console.error(err);
    return;
  }
  // console.log(typeof(data));
  let dataArr = data.split('\n');
  for (let index = 0; index < dataArr.length; index++) {
    dataArr[index] = parseInt(dataArr[index]);;
  }
  runData(dataArr)
})

function runData(data) {
  let increasedCount = 0
  for (let index = 0; index < data.length; index++) {
    if (data[index-1] && (data[index-1]< data[index])){
      increasedCount++;
    }
  }
  console.log(increasedCount);
}

arr = [199,200,208,210,200,207,240,269,260,263]
// runData(arr)
