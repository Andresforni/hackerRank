let s = [[5,3,4], 
         [1,5,8],
         [6,4,2]];
//let s = [[8, 3, 4], [1, 5, 9], [6, 7, 2]];
let m = 3;
result=[];


console.log(isMagic(s));
console.log(result);


function isMagic(s){

  let resultTemp = [];
  for(let i=0; i<m; i++){
    let sumValue=0;
    let sumValue1=0;
    for(let j=0; j<m; j++){
      sumValue+=s[i][j];
      sumValue1+=s[j][i];
    }
    result.push(sumValue);
    resultTemp.push(sumValue1);
  }
  result=result.concat(resultTemp);
  return true;
}





