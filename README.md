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

=======
ES2015 ==> ECMAScript 6 , ES 6
ESNext ==> ES 7

Most of the current browsers support ES5
https://caniuse.com/

Code in ES6 or ES7 ==> Transcomiler [Tracuer / Babel] ==> ES5

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

4) Arrow operator

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






