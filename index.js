let s = [ // 7
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];
// s = [
//   [4, 8, 2],
//   [4, 5, 7], 
//   [6, 1, 6]]; //no
// x



// si no estan todos los numero se divide por dos
//si estan todos no se divide por dos


// s = [
//   [8, 3, 4],
//   [1, 5, 9],
//   [6, 7, 2],
// ];
let m = 3;
result = [];

console.log(isMagic(s));
console.log(result);
console.log(sume(s));

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


function sume(s){
  let sum =0;
  result.forEach(item=>{
    sum+=Math.abs(15-item);
  });
return sum;
}
