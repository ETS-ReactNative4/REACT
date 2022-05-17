# REACT

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: 
banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/REACT

----------------------------------------------------------

Softwares Required:
1) Visual Studio Code. [https://code.visualstudio.com/download]
2) Chrome Web Browser
3) NodeJS Latest LTS Version: 16.x.x [https://nodejs.org/en/download/]

-----------------------------------------------------

JS, ES2015, NodeJS and Webpack
React Basics, components, unit testing , e2e testing
Advance features of React: router, context, SPA, styled-components, React Hooks, HOC, ...
State Management using REdux, Thunk, Saga, SSR using NextJS [ time permits]

======================

JavaScript
==> Loosely typed, dynamically typed scripting language

var data = "James"; // String
data.toUpperCase();
data = 100; // Number
data++;
data = true; // Boolean
if(data) {}

JS ==> JS engine for execution [V8, SpiderMonkey, Chakra, Continum, Nashorn, Ionmonkey, ...]

myfile.js

var g = 100;

function doTask() {
	var a = 10;
	if(g > a) {
		var b = 15;
		c = 20;
		console.log(g, a, b, c);
	}
		console.log(g, a, b, c);
}

doTask();
console.log(g, a, b, c);

Creation Context ==> Global Creation and Function creation Context

Execution Context ==> Global Exection Context, Function Execution Context

=============

function add(x, y) {
	return x + y;
}

console.log(add(4,5)); // 9

----------------------

function add(x, y) {
	return 
		x + y;
}

console.log(add(4,5)); // ==> undefined

AST; semi-colon insertion ==> return; 
								x + y ; // unreachable code

===============

JS ==> event driven 

myfile.js
console.log("Hi!!");

setInterval(function timed() {
	console.log("timed!!!")
}, 1000);



$("#btn").click(function clicked() {
	console.log("click!!!");
})

console.log("Bye!!!");



======

class IntervalThread extends Thread {
	IntervalThread(macroQueue, timed) {
		..
	}
	run() {
		while(true) {
			Thread.sleep(1000);
			this.macroQueue(timed);
		}
	}
}

=====================
Event loop PsuedoCode:
while(true) {
	if(stackIsEmpty) {
		while(fn = microQueue.take()) {
			fn();
		}
		while(mfn = macroTaskQueue.take()) {
			mfn();
		}
		pause();
	}
}

=========

HOF ==> High Order Function
* function accepting function as argument
* function returning a function
==> treat function as first class member, just like primitive or object

helps in apply OCP of SOLID design principle
Open and Close principle ==> code is closed for a change; but open for extension

var data = [5,2,51,11];

for(let i = 0; i < data.length; i++) {
	console.log(data[i]);
}

for(let i = 0; i < data.length; i++) {
	 alert(data[i]);
}

Commonly used HOF which accepts functions as arguments ==> forEach, filter, reduce, map

--

When a function returns a function; returned function has an access to all the members of outer function ==> closure

var g = 100;

function add(x, y) {
	return x + y;
}

function adder(base) {
	return function(value) {
		return base + value;
	}
}


let fiveAdder = adder(5); // closure base = 5
let tenAdder = adder(10); // closure base = 10
fiveAdder(2); // 7
fiveAdder(12); // 17
tenAdder(3); // 13

=========

  // cpu intense ==> recursive uses stacks
        function fibanocci(no) {
            return (no == 0 || no == 1)? no : (fibanocci(no -1) + fibanocci(no -2));
        }

        console.time("1");
            console.log(fibanocci(34));
        console.timeEnd("1");
        console.time("2");
            console.log(fibanocci(34));
        console.timeEnd("2");


getEmployee(3); ==> hits server ==> API call ==> DB ==> data to JSON ==> send JSON to client

getEmployee(3); ==> get from cache

getEmployee(2); ==> hits server ==> API call ==> DB ==> data to JSON ==> send JSON to client

In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again

React.memo(); 

=======
ES2015 ==> ECMAScript 6 , ES 6
ESNext ==> ES 7

Most of the current browsers support ES5
https://caniuse.com/

Code in ES6 or ES7 ==> Transcompiler [Tracuer / Babel] ==> ES5

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines.

ES 6 features:

1) scope variable and const

var g = 100;
const PI = 3.14159;
function doTask() {
	var a = 10;
	if(g > a) {
		let b = 15; //block level scope
		c = 20;
		console.log(g, a, b, c);
	}
		console.log(g, a, b, c); // b is not visible
}

doTask();
console.log(g,   c);  


code gets converted to use IIFE

if(g > a) {
	 (
	 	let b = 15; //block level scope
		c = 20;
		console.log(g, a, b, c);
	 )();
}

================

2) Destructuring

var product = {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"};

var {name, price} = product; // name and price are local var

console.log(name, price);

// old way
console.log(product.name, product.price);


var colors = ["red", "green", "blue", "orange", "pink"];

var [r,g, ...others] = colors;

console.log(r); // "red"
console.log(g); // "green"
console.log(others); // ["blue", "orange", "pink"];

// old way

console.log(colors[0]);
console.log(colors[1]);

3) Spread opertors [ o to n args]

function doTask(...data) {

}

doTask();
doTask(1, 2);
doTask(3,6,11);

---------------------

4) Arrow operator and default argument

function add(x = 10,y = 10) {
	return x + y;
}
 
let add = (x,y) => {
	return x + y;
}

or

let add = (x,y) => x + y;


add();
add(4,5);
add(5);


5) clone

var product = {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"};

var ref = product;

ref.price  = 9999; // reference

product.price also changes

var cpy = {...product}; // clone

cpy.price = 12345; 

--

var data = [4,6,2,1];

var elemCpy = [...data]; // clone

-----

6) Promise API

Async opertions which will have any of the follwoing states

a) state:pending; data :
b) state:fulfilled; data : {...}
c) state:rejected; data: error

function doTask() {
	// sync code
}
if function is sync

let res = doTask(); // blocking call
console.log("Bye!!!"); // gets executed only after doTask(); completes

----

function doTask() {
	// promise api ==> side effects like API call
}
if function is promise api ==> async

doTask().then(
	(data) => console.log(data),
	(err) => console.log(err);
);
console.log("Bye!!!"); // gets executed before Promise resolves or rejects

========

Promise.all() ==> aggregator app like MMT, HolidayIQ, 

Promise.any() ==> CDN serving data

================

 7) async and await
 syntatical sugar for Promise Api

Promise API callback hell:
 connectToDatabase()
 	.then(con => {
 		getUsers(con).
 		then(users => {
 			getRoles(user).
 			then(role => {
 				createUI()
 			}) 
 		})
 });


---
Using fetch Promise API:
fetch("http://jsonplaceholder.typicode.com/users")
	.then(response => response.json())
	.then(data => console.log(data));

convert to async await
 async function doTask() {
            let response = await fetch("http://jsonplaceholder.typicode.com/users");
            let data = await response.json();
            console.log(data);
        }

doTask();

------------------

8) Generator
	==> are functions with multiple return values

function* saga() {
	TASK1
	TASK2
	yield "result 1";
	TASK3
	TASK4
	TASK5
	yield "result 2";
	TASK6
	yield "result 3";
}

function* sagaExample() {
	console.log("task1");
	console.log("task2");
	yield 100;
	console.log("task3");
	yield "good day!!!";
	console.log("task4");
	yield true;
}

let iter = sagaExample();
iter.next(); // 100
iter.next(); //good day!!!
iter.next(); //true

======

9) ES 6 module system, classes [ pending]

=========================================================================






