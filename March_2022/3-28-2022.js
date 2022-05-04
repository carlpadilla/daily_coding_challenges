// 8kyu -- If you can't sleep, just count sheep!!


const countSheep = function(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
      result += i.toString() + ' sheep...';
    }
    return result;
  }


  const sheepNum = countSheep(3)

  console.log(sheepNum)