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

var train2 = ["hdh", "dd", "s", "sss"];
console.log(train2[2]);
//arrays and accessing elements
train2.push("jack");
train2.pop("s");
//built in method for arrays push and pop

var storemanager = {};
//initialize object
var storemanager = {
    name : "john",
    age : 19,
    salary : 1199,   
};
//can also be done like this
storemanager.name = "john";
storemanager.age = 19;
storemanager.salary = 1199;
//Dot notation = adding properties
storemanager["name"] = "sam";
//bracket notation = same thing but different syntax
//dot and bracket are interchangeable
console.log(storemanager);
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
//bracket can evaluate expressions unlike dot