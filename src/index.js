
exports.min = function min (array) {
  if (array !== undefined && array !== null && array.length > 0){
    array.sort ((a,b) => a - b);
    let minValue = array[0];
    return minValue;
  }else{
    return 0;
  }
};

exports.max = function max (array) {
  if (array !== undefined && array !== null && array.length > 0){
    array.sort ((a,b) => b - a);
    let maxValue = array[0];
    return maxValue;
  }else{
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array !== undefined && array !== null && array.length > 0){
  let sum = array.reduce ((a, b) => a+b, 0);
  return sum/array.length;
  }else{
    return 0;
  }
};
