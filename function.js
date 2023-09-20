//function invocation
/*function sum(){
    console.log("This is sum function");
}
sum();*/

/*function myName(){
    console.log("My name is Vinayak");
}
myName()*/




//giving values to function
/*function sum(a,b){ //a,b are parameters
    console.log(a+b);
}

sum(20,30);*/ //these values of a,b are arguments

/*function sum(a,b){
    console.log(a/b);
}
sum(50,10);*/

/*let a = 10;
let b = 20;
let arr1 = [10,20,30];
let arr2 = [60,70,80];
function sum(value1,value2,disp){
    console.log("This is sum function");
    let x = value1 + value2;
    disp(x);
}
function display(total){
    console.log('Total is ${total}');
}
sum(x,y,display);*/ //calback function

//arrow function (no 'this' keyword)
/*let sum = (a,b)=>{return a + b};
let res = sum(20,30);
console.log(res);*/



//JS number types
/*let num1 = 10;
let num2 = 20;
console.log(typeof num1);
console.log(typeof num2);*/

//to convert number to string
/*let num = 100;
let res = num.toString();
console.log(typeof num);
console.log(typeof res);*/

//to reound a number
/*let num = 9.32654;
let res = num.toFixed(0);
console.log(res);*/

/*let num = 9.32654;
let res = num.toFixed(0);
let n = Number(res)
console.log(typeof n);*/

/*let num = 9;
let res = num.toFixed(0);
let n = parseInt(res)
console.log(typeof n);*/

/*let num = 9;
let res = num.toFixed(0);
let n = parseFloat(res)
console.log(typeof n);*/

//to check number or not
/*let res = Number("Entri");
console.log(res);*/

/*let res = "hello";
let isNum = isNaN(res);
console.log(isNum);*/


//rounds number
/*let res = Math.round(6.3);
console.log(res);*/

/*let res = Math.ceil(6.3);
console.log(res);*/

/*let res = Math.ceil(6.5);
console.log(res);*/

/*let res = Math.trunc(6.3);
console.log(res);*/

/*let res = Math.sign(-5);
console.log(res);*/

/*let res = Math.pow(6,3);
console.log(res);*/

/*let res = Math.sqrt(50);
console.log(res);*/

/*let res = Math.min(100,54,22,65,99,66,84,75);
console.log(res);*/

/*let res = Math.max(100,54,22,65,99,66,84,75);
console.log(res);*/

/*let res = Math.random();
console.log(res);*/

/*let res =Math.floor(Math.random()*100);
console.log(res);*/

let now = new Date();
console.log(now.getMonth());