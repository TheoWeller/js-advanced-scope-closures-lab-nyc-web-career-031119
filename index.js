function produceDrivingRange(blockRange) {
  return function(arg1, arg2) {
    arg1 = arg1.replace(/\D/g,'')
    arg1 = Number(arg1)
    arg2 = arg2.replace(/\D/g,'')
    arg2 = Number(arg2)

    let range = arg2 - arg1;
    let inRange = blockRange - range;
    let outOfRange = range - blockRange

    if (range <= blockRange) {
      return console.log('within range by ${inRange}');
    } else {
      return console.log('${outOfRange} blocks out of range')
    };
  }
}

// const tenBlockRange = produceDrivingRange(10)
// const fiveBlockRange = produceDriving(5)
