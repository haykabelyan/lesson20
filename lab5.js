

//Rest Parameter
// tveri hajordakanutyuny darcnum e array

foo();
foo(1,2);
foo(1,2,3,4);
function foo(...numbers){
    console.log(numbers);
}

///////////////////////////////////////////////////

function foo2(a, b, ...numbers){}
// ERROR function foo3(a, ...numbers, b){}
// ERROR function foo3(...numbers, ...numbers){}





