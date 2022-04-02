
//1.Ways to print in JavaScript
// console.log("Hello World");
// alert("JS Alert");
//document.write("this is document write");

//2.JavaScript Console APIs
//console.log("Hello World",4+6,"multiple argument can be passed");
//console.warn("this is warning");
//console.error("error occurs");

//3.JavaScript Variables
//What r variables?-containers to store data values
/*
multi 
line 
Comment
*/
var number = 34;
var number2 = 56;
//console.log(number+number2);

//4.Data Types in JavaScript
//String
var str1 = "This is a string";
var str2 = 'This is also a string';

//Number
var num1 = 45;
var num2 = 56.76;

//Object
var marks = { ravi: 34, rahul: 78, sham: 56 };
//console.log(marks);

//Booleans
var a = true;
var b = false;
//console.log(a,b);

//var und=undefined;
var un;
//console.log(un);

var n = null;
//console.log(n);

/*There r two types of data types
in JavaScript:
1.Primitive Data Type/Primitives-undefined,number,null,string,booleans,symbol
2.Reference Data Type:Arrays and objects
*/

//array
//var arr=[1,2,3,4];
var arr = [1, 2, 3, "mandeep", "kaur"];
//console.log(arr);

//Operators in JavaScript
//Arithmetic Operators
var a = 34;
var b = 56;
/*
console.log("The value of a+b is:",a+b);
console.log("The value of a-b is:",a-b);
console.log("The value of a*b is:",a*b);
console.log("The value of a/b is:",a/b);
*/

//Assignment Operators
var c = a;
//c+=12; / c=c+12;
//c*=2;
//c-=76;
c /= 2;
//console.log("value of c is:",c)

//Comparison Operators
var m = 45;
var n = 67;
/*console.log(m==n);
console.log(m<=n);
console.log(m>=n);
console.log(m>n);
console.log(m<n);*/

//Logical Operators
//Logical And
//console.log(true&&true);
//console.log(true&&false);
//console.log(false&&true);
//console.log(false&&false);

//Logical OR
//console.log(true||true);
//console.log(true||false);
//console.log(false||true);
//console.log(false||false);

//Logical NOT
//console.log(!false);
//console.log(!true);

//4Functions in JavaScript
//DRY-Don't Repeat  Yourself
function avg(a, b) {
    r = (a + b) / 2;
    return r;
}
//c1=console.log(avg(4,6));
//c2=console.log(avg(14,26));
//console.log(c1,c2);

//5Conditionals in JavaScript
//var age=6;
//if statement
//if (age>18){
//  console.log("You can vote");
//}

//if-else statement
/*if (age>18){
    console.log("You can vote");
}
else{
    console.log("You can not vote.");
}*/

//if-else ladder
/*
var age=16;
if (age>50){
    console.log("You are a senior now");
}
else if(age>32){
    console.log("You are not a kid");
}
else if(age>18){
    console.log("You are young now");
}
else{
    console.log("You are a kid");
}
console.log("End of ladder");
*/

//7.Loops in JavaScript
//For Loop
//var arr = [1, 2, 3, 4, 5, 6, 7]
//console.log(arr);
//for (var i = 0; i < arr.length; i++) {
//  if(i==2){
// break;
//   continue;
//}
//console.log(arr[i]);
//}
//arr.forEach(function (element) {
//  console.log(element);
//})

//const ac = 0;
//ac++;
//ac += 1;

//while loop
//let j = 0;
//while (j<arr.length){
//   console.log(arr[j]);
//  j++;
//}

//do-while loop
/*
do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);
*/

//8.Methods of array
//let myArr=['Fan','Camera',34,null,true];
//console.log("length of array:",myArr.length);
//myArr.pop()
//myArr.push("Mandeep K@ur");
//myArr.shift();
//console.log(myArr.unshift("JavaScript"));
//console.log(myArr);
//console.log(myArr.toString());

//9.String Methods in JavaScript
let mystr = "JavaScript  Methods String Methods";
//console.log(mystr.length);
//console.log(mystr.indexOf('Meth'));
//console.log(mystr.lastIndexOf('Meth'));

//console.log(mystr.slice(4,12));
string = mystr.replace("JavaScript", "Java");
//console.log(string,mystr);

//10.JavaScript Date and time
/*
let myDate=new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());
console.log(myDate.getMonth());
console.log(myDate);*/

//11.DOM Manipulation
let ele = document.getElementById('cick');
//console.log(ele);

let elemClass = document.getElementsByClassName('container');
//console.log(elemClass);
//elemClass[0].style.background="green";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
//console.log(ele.innerHTML);
//console.log(ele.innerText);
//console.log(elemClass[0].innerHTML);
//console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div');
//console.log(tn);
createdElement = document.createElement('mani');
createdElement.innerText = "paragraph is added through javascript";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "this is created bold";
tn[0].replaceChild(createdElement2, createdElement);
//removeChild(element)-->removes child

//selecting using query
sel = document.querySelector('.container');
//console.log(sel);
sel = document.querySelectorAll('.container');
//console.log(sel);
/*
function clicked() {
    console.log("The button was clicked");
}
window.onload = function () {
    console.log("The document was loaded");
}
//Events in JavaScript
firstContainer.addEventListener('click', function () {
    document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked</b>"
    console.log("Clicked on Container");
})

firstContainer.addEventListener('mouseover', function () {
    console.log("Mouse on Container");
})
firstContainer.addEventListener('mouseout', function () {
    console.log("Mouse out of Container");
})
let preHTML=document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML=preHTML;
    console.log("mouse up when Clicked on Container");
})
firstContainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked</b>"
    console.log("mouse down when Clicked on Container");
})*/

//Arrow Functions
//function summ(a,b){
//   return a+b;
//}
//summ=(a,b)=>{
//    return a+b;
//}
logKaro=()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b>Set Interval Fired</b>";
    console.log("I am ur log");
}
//setTimeout and setInterval
//clr=setTimeout(logKaro,2000);
//clr=setInterval(logKaro,2000);
//use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

//Local Storage of JS
//localStorage.setItem('name','Mandeep')
//localStorage.getItem('name')
//localStorage
//localStorage.removeItem('name')
//localStorage.clear();

//JSON
//obj={name:'Mandeep',length:1,a:{this:'tha"t'}}//JS Object
//jso=JSON.stringify(obj);//string
//console.log(typeof jso);
//console.log(jso);
//parsed=JSON.parse('{"name":"Mandeep","length":1,"a":{"this":"that"}}');
//console.log(parsed);

//JavaScript Versions
//ECMA(Eureope Computer Manufacture Association)is a standard which helps to maintain JS

//Template Literals/Backticks
a=34;
console.log(`this is my ${a}`);