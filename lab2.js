

const arr = [1, 2, 3, 4];
arr.map((el)=>{console.log(el*el)});

const res = arr.map( el =>  el*el )
    .filter( el => !(el%2) );
console.log(res);

