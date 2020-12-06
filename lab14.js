

function foo(){
    console.log(i);
}

let arr = [];
for(let i=0; i<5; i++){
    arr.push( foo );
}


arr[0]();       //  0
arr[4]();       //  4
