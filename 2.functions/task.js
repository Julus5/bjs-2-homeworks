function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = sum / arr.length;
  avg = Number(avg.toFixed(2));
  return { min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length > 0){
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  else {
    return 0;
  } 
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  if (arr.length > 0) {
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      else if (arr[i] < min) {
        min = arr[i];
      }
    }
    let dif = max - min;
    return dif;
  }
  else {
    return 0;
  } 
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length > 0) {
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      }
      else {
        sumOddElement += arr[i];
      }
    }
    let difEvenOdd = sumEvenElement - sumOddElement;
    return difEvenOdd;
    }
  else {
    return 0;
  } 
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length > 0) {
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
        countEvenElement ++;
      }
    }
    let avgEvenElement = sumEvenElement / countEvenElement;
    return avgEvenElement;
    }
  else {
    return 0;
  } 
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for(let i = 0; i < arrOfArr.length; i++) {
    const resultFunc = func(...arrOfArr[i]);
    if (resultFunc > maxWorkerResult) {
      maxWorkerResult = resultFunc;
    }
  }
  return maxWorkerResult;
}
