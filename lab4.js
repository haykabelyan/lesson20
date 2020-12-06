
// Default Parameters

function foo1(x=0, y=0){
    console.log(x, y);
}
foo1();         //  0, 0
foo1(2);      //  2, 0
foo1(2, 4); //  2, 4