const fs = require('fs');

fs.readFile('day_2/data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(typeof(data));
  let dataArr = data.split('\n');

  for (let index = 0; index < dataArr.length; index++) {
    dataArr[index] = dataArr[index].split(" ");
    dataArr[index][1] = parseInt(dataArr[index][1]);
  }
  // console.log(dataArr);
  runData(dataArr)
})

const runData = (data) => {
  let forward = 0;
  let depth = 0;
  for (let index = 0; index < data.length; index++) {
    if (index === data.length - 1){
      continue;
    }
    const element = data[index];
    if (element[0] === "forward"){
      forward += element[1];
    } else if (element[0] == "up"){
      depth -= element[1]
    } else {
      depth += element[1]
    }
    console.log(forward)
    console.log(depth)
  }
  console.log(forward*depth)
}
