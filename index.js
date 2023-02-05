let r = 40; // rotation
let matrix = [[0,1, 2, 3],[ 4,5, 6, 7],[8,9, 10, 11],[ 12,13, 14, 15],["$","&","@","+"]];
let R =matrix.length; 
let C= matrix[0].length; 


let matrixSingle =[];
for(let k=0;k<R;k++){ 
    for(let j=0;j<C;j++){
        matrixSingle.push(matrix[k][j])
    }
}
/*
R = 10; //matrix.length; 
C= 8;//matrix[0].length; 
//console.log("Matrix: "+matrixSingle);
matrixSingle=[9718805,60013003,5103628,85388216,21884498,38021292,73470430,31785927,69999937,71783860,10329789,96382322,71055337,30247265,96087879,93754371
    ,79943507,75398396,38446081,34699742,1408833,51189,17741775,53195748
    ,79354991,26629304,86523163,67042516,54688734,54630910,6967117,90198864
    ,84146680,27762534,6331115,5932542,29446517,15654690,92837327,91644840
    ,58623600,69622764,2218936,58592832,49558405,17112485,38615864,32720798
    ,49469904,5270000,32589026,56425665,23544383,90502426,63729346,35319547
    ,20888810,97945481,85669747,88915819,96642353,42430633,47265349,89653362
    ,55349226,10844931,25289229,90786953,22590518,54702481,71197978,50410021
    ,9392211,31297360,27353496,56239301,7071172,61983443,86544343,43779176];

    
    93754371 53195748 90198864 91644840 32720798 35319547 89653362 50410021
31785927 25289229 10844931 97945481 5270000 69622764 27762534 43779176
73470430 90786953 42430633 96642353 88915819 85669747 26629304 86544343
38021292 22590518 90502426 67042516 54688734 32589026 75398396 61983443
21884498 54702481 17112485 5932542 29446517 2218936 71783860 7071172
85388216 71197978 15654690 58592832 49558405 6331115 10329789 56239301
5103628 47265349 54630910 56425665 23544383 86523163 96382322 27353496
60013003 63729346 51189 1408833 34699742 38446081 71055337 31297360
9718805 38615864 92837327 6967117 17741775 96087879 30247265 9392211
69999937 79943507 79354991 84146680 58623600 49469904 20888810 55349226
    */

let maxr = (R-1)*2+(C-1)*2;
//console.log(maxr);
let qRulos=Math.min(R,C)/2;
//console.log(qRulos);
let row=R;
let col=C;
let val =0;
let tra=[];
let tra1=[];
//lengthRulo = (row-1)*2 + (col-1)*2 ;
//console.log(lengthRulo);

for(let j=0;j<qRulos;j++){
let rul=[];
rul.push(matrixSingle[val]);
tra.push(val);
for(let i=0;i<col-1;i++){
    rul.push(matrixSingle[val+=1]);
    tra.push(val);
}
for(let i=0;i<row-1;i++){
    rul.push(matrixSingle[val+=C]);
    tra.push(val);
}
for(let i=0;i<col-1;i++){
    rul.push(matrixSingle[val-=1]);
    tra.push(val);
}
for(let i=0;i<row-2;i++){
    rul.push(matrixSingle[val-=C]);
    tra.push(val);
}
tra1.push(rul);
val+=1;
row-=2;
col-=2;
}
//console.log(tra1[0]+" - "+tra1[1]);




let results=[];
row=R;
col=C;
for(let i=0;i<qRulos;i++){
    
    maxr=(row-1)*2+(col-1)*2;
    let rNew = r%maxr;
    row-=2;
    col-=2;
    for(let j=0;j<rNew;j++){
      tra1[i].push(tra1[i].shift());

    }
    results=results.concat(tra1[i]);

}

//console.log(tra1[0]+" - "+tra1[1]);

//console.log(results);


//function de print


for(let k=0;k<R;k++){
    let line="";
    for(let j=0;j<C;j++){
        if(j!=0)
            line=line+" ";
       
        line=line+results[tra.indexOf(j+k*C)]; 
    }
   console.log(line);
}
