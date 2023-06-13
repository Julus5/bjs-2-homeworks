"use strict"
function solveEquation(a, b, c) {
  let x;
  let y;
  let arr = [];
  let d = Math.pow(b, 2) - (4 * a * c);
  if (d === 0) {
    x = -b / (2 * a);
    arr.push(x);
  }
  else if (d > 0) {
    x =(-b + Math.sqrt(d)) / (2 * a);
    y =(-b - Math.sqrt(d)) / (2 * a);
    arr.push(x, y);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = ((percent / 100) * (1 / 12));
  let S = amount - contribution;
  let payment = S * (P + (P / (((1 + P)**countMonths) - 1)));
  let total = payment * countMonths;
  return Number(total.toFixed(2));

}