

let x = 5;

function foo(){
    let x = 7;
    foo2();
}

function foo2(){
    console.log(x); // 5
}


foo();