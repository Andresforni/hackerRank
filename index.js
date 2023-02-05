let s = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];
s = [
  [8, 3, 4],
  [1, 5, 9],
  [6, 7, 2],
];
let m = 3;
result = [];

console.log(isMagic(s));
console.log(result);

function isMagic(s) {
  result1 = [];
  let magic = true;
  for (let i = 0; i < m; i++) {
    let sumValue = 0;
    let sumValue1 = 0;
    for (let j = 0; j < m; j++) {
      sumValue += s[i][j];
      sumValue1 += s[j][i];
    }
    result.push(sumValue);
    if (sumValue1 != 15) magic = false;
    result1.push(sumValue1);
    if (sumValue1 != 15) magic = false;
  }
  result = result.concat(result1);
  let sum = s[0][0] + s[1][1] + s[2][2];
  result.push(sum);
  if (sum != 15) magic = false;
  sum = s[0][2] + s[1][1] + s[2][0];
  result.push(sum);
  if (sum != 15) magic = false;

  return magic;
}
