console.log("Hello World");
//first js program

console.log("%cHello World", "color: blue; font-size: 40px");
// %c for styling with CSS

console.log("Hello" + "there, " + "World");
console.log("Hello" , "there, " , "World");
//difference between + and ,
//Hellothere, World
//Hello there,  World

var age = 10;
var height = 190;
if (age > 7 && height > 170) {
    console.log(age + "old and tall" + height+ "\n");
}
//arithmetic operators +,-,*,/,**, ++, --
//assignment operator =, +=, -=, *=, /=, %=, **=
//comparios operator >,<, <=, >=, ==, !=, ===, !==, ?
//% modulas/remainder
//logical operators &&, ||, !

function addition(parametr1, parametr2) {
    var c = parametr1 + parametr2;
    console.log(c);
}
//defining function
addition(4, 7);
//calling function

var train2 = [r1, r2, r3, r4];
console.log(train2[2]);
//arrays and accessing elements