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

NodeJS
* platform with V8 JavaScript engine and libuv c/c++ apis for threads and async helpers, event loop

Why use NodeJS?
1) build traditional web application development like [ servlet/jsp, php, ] ==> serve pages to client
2) build RESTful web services ==> serve JSON/ XML data to client [ Spring Boot, MVC .NET, Jersey]
3) * Streaming API ==> OTT; netflix; prime; hotstar
4) Realtime application ==> chatbot, dashboard updates, notifications, ....
5) client side application development
	
NodeJS for clientside web application development

1) I might use Typescript, DART, CoffeeScript, LiveScript or ES6/7 to write my code
product.ts
let product:Product = {}
let name:string = "Tim";

they have to be converted to "js" using transcompiler

2) project contains many files [ 40~50 files]

<script src="a.js"></script>
<script src="b.js"></script>
<script src="c.js"></script>
<script src="d.js"></script>
<script src="e.js"></script>
..

each <script> tag results in Network call 
order matters [ e depends on d; d depends on c ;..]

all files bundle ==> bundle.js
<script src="bundle.js"></script>

3) minify, uglify my code
minfiy ==> remove whitespaces in code
uglify ==> variables, functions  ==> shorten the name

function mongooseDatabaseConnection() {

}

4) Need to run Unit testing of code
5) Static code analysis ==> Linting

===================================

one example of Nodejs project

Package managers:
* NPM
* YARN
* PNPM

1) tool to download dependecies for your project

npm install jquery
yarn add jquery
pnpm install jquery

2) to run scripts

npm start
npm test
npm run build

3) to publish

npm publish

Similar to Maven/gradle/PIP

---

nodeexample>npm init --y

this creates package.json [similar to pom.xml for java maven]

nodeexample>npm i lodash

nodeexample>npm i mocha chai request --D


"dependencies": {
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "chai": "^4.3.6",
    "mocha": "^10.0.0",
    "request": "^2.88.2"
  }

"node_modules" folder where dependencies and transitive-dependency are downloaded

--
Team member:

nodeexample>npm install

=========

 "scripts": {
    "test": "mocha --reporter spec"
  },

  $npm test

=============

Module System
1) IIFE ==> pure vanilla Js module system

var ShopModule = (
	var data = 100;
	function doTask() {

	}
	function private() {

	}
	return {
		data:data,
		doTask:doTask
	}
)();


var CustomerModule = (
	var data = 999;
	function doTask() {

	}
	 
	return {
		data:data,
		doTask:doTask
	}
)();

CustomerModule.doTask();
ShopModule.doTask();
CustomerModule.data; // 999
ShopModule.data; // 100

2) CommonJS module system ==> default used by NodeJS platform
module.exports.add = (x, y) => x + y;

const compute = require('./compute');

3) ESM ==> ES6/7 module system
4) UMD
5) System
6) AMD


nodeexample>node app/server.js


>npm config list

========================================

JavaScript Unit testing Frameworks:
1) Mocha
2) JEST ==> RTL built on JEST
3) Jasmine ==> ATL built on Jasmine



https://www.chaijs.com/
Assertion library

AAA ==> Assemble, Action, Assert

$ npm test

===========================================


Webpack

JavaScript build tools
* automate tasks like transcompile, minfiy, tests, bundle, ....

 Grunt, Gulp, Webpack
 
 Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. 

webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, ...

Angular
ng new myapp [ internally it uses webpack]

react
npx create-react-app myapp [ uses webpack]

tsdx create myapp [ webpack]

===========

Webpack example

1) create package.json

webpackexample> npm init --y

2) install dependencies

webpackexample> npm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D

3) create src/index.js

console.log("Hello Webpack!!!");

4) package.json

 "scripts": {
    "dev": "webpack --mode development",
    "prod": "webpack --mode production",
}

npm run dev
or
npm run prod


==> creates "dist/main.js"

5) using html-webpack-plugin
HTML Webpack Plugin
Plugin that simplifies creation of HTML files to serve your bundles

index.html
<script src="vendor.main.js"></script>
<script src="cart.9t6dfgdfg2.js"></script>
<script src="main.js"></script>


webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
};

index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Happy Learning!!!</h1>
</body>
</html>

--

$ npm run prod

check the generated "dist/index.html";
should contain <script src="main.js"></script>

==================

Babel:

npm i @babel/core babel-loader @babel/preset-env -D

@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).

babel.config.json
{
    "presets": [
        "@babel/preset-env"
    ]
}

Now I can use ES6/ES7 features which will be transpiled to ES5 by Babel

===========

npm run dev

asset main.js 6.84 KiB [compared for emit] (name: main)
asset index.html 278 bytes [compared for emit]
runtime modules 670 bytes 3 modules
cacheable modules 2.1 KiB
  ./src/index.js 222 bytes [built] [code generated]    
  ./src/Person.js 1.51 KiB [built] [code generated]    
  ./src/compute.js 387 bytes [built] [code generated]  
webpack 5.72.1 compiled successfully in 2021 ms        

--

npm run prod
 
asset main.js 1.08 KiB [emitted] [minimized] (name: main)
asset index.html 247 bytes [emitted]
orphan modules 1.88 KiB [orphan] 2 modules
./src/index.js + 2 modules 2.1 KiB [built] [code generated]
webpack 5.72.1 compiled successfully in 2547 ms

====================================

Day 2

JS, JS engine, Event loop, callback queue, WebAPI / Libuv

HOF ==> Function accepts function as argument; function return a function [ closure ]
 
ES2015 / ES6
* Arrow, scope variables, destructuring, spread operator, clone,
Promise, async and await, generators, ES6 module system, classes

NodeJS 
CommonJS module system [ module.exports and require()]
package.json, npm
dependencies and devDependencies

Webpack ==> JS build tool
* webpack.config.js
	"src" will be source folder and "dist" will be output folder by default.
	"main.js" is the default bundle file
* HtmlWebpackPlugin
* babel ==> @babel/core @babel/loader [ ES6 or higher to ES5 version]
@babel/preset-env ==> polyfills for browsers which can;t understand the transpiled code


---

<link rel="stylesheet" href="styles.css">

npm i css-loader style-loader -D

css-loader:

index.js

@import './styles.css'


style-loader:
<style>
	.body {
		background: lavender;
	}
</style>

================

DevServer
webpack-dev-server can be used to quickly develop an application.

webpack.config.js

devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  }


  If above config is not done ==> it uses 8080 as default port
 "start" : "webpack serve --mode production",

 npm start

 http://localhost:8080/

 ======================================

 Optimization

 index.html

 <script src="bundle.js"></script>

 a single bundle for the entire application is not appropriate

 lead to FCP issues

 https://webpack.js.org/configuration/optimization/#root

 =================================================================

 React

 https://codepen.io/

 playground for react


Rendering ==> data to presentation

SSR ==> Server Side Rendering [server sends rendered HTML page to client]
* Pros ==> faster, client can be thin clients
* Cons ==> Can;t have different types of clients [ mobile, web, standalone, tv]

* Servlet, JSP, JSF, Themyleaf 
* ASP, ASP.NET
* PHP
* CGI
* NodeJS with ExpressJS and templates like [ EJS, PUG, JADE, Handlebars, Mustache]

CSR ==> Client Side Rendering [ server sends the representation of data [ JSON / CSV / XML]] ==> RESTful / GraphQL
* client applications are going to render the representation servered for server
 [TV, Mobile, Web, Standalone ]

Webapplication for CSR:
* Library like jQuery and templates like Handlebars, Mustache, underscore, or plain AJAX and DOM handle
	document.createElement("div")
	document.appendChild()

Issues with above way to rendering for SPA [ only one html page for entire application, but many views]:

1) Data binding [ one way or two-way]
	done using interpolation code
	{{name}}
	<%= name %>
	#name

	<input type="text" value="" />

2) Modularize the code [ customermodule, productmodule, payment module, ordermodule, ...]

3) Router
	3.1) different urls ==> different views [ SEO ]
	http://server.com

		should render landing page

	http://server.com/mobiles/
		should render mobiles
	http://server.com/mobiles/iPhone13
		should render iPhone
	http://server.com/mobiles/OnePlus
	http://server.com/tvs

	3.2) Bookmark
	3.3) Navigate between views [ back and Prev]
	3.4) Protect routes
		http://server.com/cart
	3.5) lazy load modules based on route selection

---

* BackboneJS --> library using MVC pattern [ Model and Controller support] for Views ==> [UnderScore, jquery, Mustache]
* AngularJS --> Framework 
* React --> View library [State management --> Model --> 3rd party]
* Angular --> zone.js --> Framework

====================================================

codepen.io

HTML
<div id="root"></div>


Settings:

JS:
1) Babel as preprocessor
Babel includes JSX processing. [ JavaScript + XML ]

2) extenal libraries
https://cdnjs.cloudflare.com/ajax/libs/react/18.1.0/umd/react.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js


Behaviour:

Save-automatically : off
Update: off

Save & close

==========================================


React.createElement("h1", {style: {'color':'red'}}, "Welcome to React World!!!");

creates React Node ==> similar to DOM [ Document Object Model]



ReactDOM.render(Welcome, document.getElementById("root"));

other popular renders are:
react-tv
react-native
..

=====================================

const diffs = [
	{
		newNode: { "1"},
		oldNode: { "One"},
		index: 0
	},
	{
		newNode: { "Three"},
		index: 2
	}
]

diffs.forEach( elem => {
	if(diff.oldNode) {
			document.replaceHild(elem.newNode, elem.index);
	} else {
			document.appendChild(elem.newNode);
	}

});

 Reconciliation is the process through which React updates the Browser DOM.

 ===========================================================


React.createElement("ul", null, React.createElement("li", null, "One"), React.createElement("li", null, "Two"));

To create React elements / Node we can use
* Functional components ==> javascript functions which return JSX
* Class Components ==> javascript class with render() method returning JSX

The Returned JSX is converted to React.createElement() by Babel

function Welcome() {
  return <ul>
       		<li>One</li>
       		<li>Two</li>
    	</ul>
}
console.log(Welcome);
console.log(Welcome());
ReactDOM.render(<Welcome />, document.getElementById("root"));

================================================

<img src="logo.gif" width="100px" height="50px" />

src, width, height which are attributes of DOM ; In React we term them as props

* props

mechanism where parent passes data to child

{variable} ==> interpolation

function Welcome(props) {
  return  <div>
        	<h1>{props.title}</h1>
   			<h3>{props.location}</h3>
    	</div>
}

ReactDOM.render(<Welcome title="Welcome to React" location="Virtual Training"/>, document.getElementById("root"));


---

function Welcome({title, location}) {
  return  <div>
        	<h1>{title} </h1>
    		<h3>{location}</h3>
       </div>
}

---------------------------------------------
https://reactjs.org/docs/thinking-in-react.html
UI - UX ==> Wireframe ==> Layers

```
var data = [
{"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
{"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
{"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
{"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
{"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

function ProductList({title, products}) {
  return <div>
 		<h1>{title}</h1>
 		{
 			products.map(product => <ProductRow product={product}/>)
 		}
  </div>
}

function ProductRow({product}) {
  return <div>
  		{product.name}, {product.price}, {product.category}
  </div>
}

ReactDOM.render(<ProductList title="List of Products" products={data} />, document.getElementById("root"));

```

Problem statement as Task

recipes.png
recipes-json.txt

=============

npx create-react-app customerapp

============================
class Component
Build application , event handling, unit testing and E2E

===========================================================

class components

import {Component} from 'react';

class ProductList extends Component {
	state = {
		products: []
	}
	constructor(props) {
		super(props);
	}
	removeProduct() {

	}

	editProduct() {

	}
	// returns JSX like function component return type
	render() {
		return <div>

		</div>
	}
}

render() ==> similar to what we returns from functional components

OOP

Object contains state and behaviour
state of an object is mutated by behaviour/actions/methods

BankingAccount:
balance; // state

credit(amt);
debit(amt);

=====================

DOM Button;
color, caption, size ==> state
behaiour=> onClick(), onmouseOver(), ...


====

npx create-react-app customerapp

OR

npm i yarn -g
yarn create react-app customerapp

==========================================

  "react": "^18.1.0",
  "react-dom": "^18.1.0",

 "react-scripts": "5.0.1", ==> wrapper to run webpack cli

 ==========
index.js

 upto React version <18

 import ReactDOM from 'react-dom';

 ReactDOM.render(<App/>, document.getElementById("root"));


 form Version 18+

import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

===============================

.App {
  text-align: center;
}

without react: <div class="App">

With React:	
 <div className="App">

 In React "class" is a keyword to declare a class components; hence we use "className" to apply "css"


$ npm start

===============
CustomerRow
<button type="button" onClick={() => this.deleteRow(id)}>&times;</button>

    deleteRow(id) {
        console.log("Customr Row", id);
    }

==========

<ul>
	<li>One</li>
	<li>Two</li>
<ul>

	VDOM

	{
		"type": "ul",
		"children": [
				{
					"type": "li",
					"children" : "One"
				},

				{
					"type": "li",
					"children" : "Two"
				},
		]
	}
     
--
We try to add "Three" ==> Prepand

{
		"type": "ul",
		"children": [
				{
					"type": "li",
					"children" : "Three"
				},
				{
					"type": "li",
					"children" : "One"
				},

				{
					"type": "li",
					"children" : "Two"
				},
		]
	}


<u>
	<li>Three</li>
	<li>One</li>
	<li>Two</li>
</u>

document.createElement("li") ; ==> three times

==============

With Key


	{
		"type": "ul",
		"children": [
				{
					"type": "li",
					"children" : "One",
					"key" : 1
				},

				{
					"type": "li",
					"children" : "Two",
					"key" : 2
				},
		]
	}


	{
		"type": "ul",
		"children": [
				{
					"type": "li",
					"children" : "Three",
					"key" : 3
				},
				{
					"type": "li",
					"children" : "One",
					"key" : 1
				},

				{
					"type": "li",
					"children" : "Two",
					"key" : 2
				},

		]
	}

diffs algorithm runs
document.prepand("li" with three);

==============================================

Whenever state or props changes ==> Reconcillation happens ==> diffs algorithim based on vdoms ==> render()

 this.setState({
     customers: custs
 });

===============================================

let ob = {
	name: "Peter";
}

let p = {
	"name": "iPhone",
	"update": function(d) {
		this.name = d;
	}
}
 
p.update("Oppo");


let ref = p.update; // gets function definition of "update"

ref("samsung"); // within update() ==> context is lost [ this is no longer pointing to "p"]

==

let r = p.update.bind(ob);
r("test");

==============

data
Rachel green
Monica Geller
Ross Geller
Chandler Bing

text box : Geller

filtered data:
Monica Geller
Ross Geller


text box : Bing
Chandler Bing

=======================================================================

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

https://www.w3schools.com/js/js_function_bind.asp

=====================


Task for Today:
[
{"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
{"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
{"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
{"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
{"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}]

ProductList, ProductRow, Search

search by category
delete a product

=================================
 
Day 3:

customerapp> npm i cypress


Recap:
npx create-react-app customerapp
=> creates a scafollding code with react-scripts to use "webpack"
=> index.js and App.js 

"start", "test", "build" and "eject" scripts are laready configured

npm start ==> runs webpack-dev-server in development mode on port 3000

Class Component and Functional Components

* state and behaviour
* setState({
	stateVariable: value
  })

  this is going to update the state asynchronoulsy and triggers reconcillation 

  React Develpoment Tools chrome extension

* Event handling onClick, onChange, onSubmit, onMouseOver, onMouseHover, ...
	doTask() {

	}

	1) <button onClick={this.doTask()}>
			This way of binding is wrong; because as soon as view is rendered the doTask() method is invoked
			i.e., before you click the button

	2) <button onClick={this.doTask}>
			This is also not correct, because the "context" is lost;
			i.e., within doTask() => "this" is undefined;
			this function doTask() if "this" pointer is not used this way of binding works
	3) <button onClick={this.doTask.bind(this)}>
			Correct way of binding
			"Context" is retained using bind; "this" refers to the component where this line of code exists
	4) <button onClick={() => this.doTask()}>
			Another way of binding using Arrow functions; works fine; prefer "3" instead of "4" for performance


* Reconillation happens when props and state changes [setState]

---

React Unit testing components

* RTL ==> React Testing Library built on top of JEST

* Older versions of REact used Enzyme for testing components [ doesn't have support for latest react libarary]

 "test": "react-scripts test"

 npm test

 import { render, screen } from '@testing-library/react';

 screen api has the following methods
 1) screen.getByText(/customer application/i);
 returns "h1" because it holds
  <h1>Customer Application running</h1>

 2) screen.getByPlaceHolderText("search by name");
 returns
  <input
              placeholder="search by name"
              type="text"
            />

3) screen.getByRoleName("button");
returns first button

ByRoleName() to get form elements ==> button, select, radio, input, textarea

All the above methods we also have 
1) queryByRole("button") 
2) findByRole("button") ==> use this in case if components are created async way [ Promise ]

to return multiple elements:

3) getAllBy
4) queryAllBy
5) findAllBy
getBy* throws an error if the element is not found and queryBy* does not and returns null.

=========================


Testing Filter:

function filter(elems, predicate) {
    var result = [];
    forEach(elems, elem => {
        if(predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
}


test code:

const predicateMock = jest.fn(elem => elem % 2 == 0);

const data = [3,5,6,2];

const result = filter(data, predicateMock);
expect(result.length).toBe(2);

==================================================================================

https://eloquentjavascript.net/09_regexp.html
https://javascript.info/regular-expressions

==============================================================


E2E ==> End To End Testing on Running application [ selenium, cypress , protractor]

npm i cypress

"e2e" : "cypress open"

--

customerapp> npm start
customerapp> npm run e2e

cypress.json
{
    "testFiles" : "**/*.spec.js",
    "integrationFolder" : "e2e",
    "baseUrl" : "http://localhost:3000/"
}



=========================================

npx create-react-app phoneapp

phoneapp> npm install styled-components react-router-dom bootstrap
 
* styled-components


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);


* react-router-dom

To SPA ==> 
1) differnt URLS should render different views
2) Lazy load modules

<Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
    </Routes>

    http://localhost:3000/ ==> renders <App />
    http://localhost:3000/teams/3 ==> renders <Team />
    http://localhost:3000/teams/new ==> renders <NewTeamForm />
    http://localhost:3000/teams/ ==> <LeagueStandings />



* bootstrap ==> RWD
Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.
* RWD
* Navbar
* Card

* font-awesome ==> include CDN in index.html
for icons


* React Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level.


* axios
	to make API calls from react to RESTful web server to fetch JSON

===
JSX needs a single root element

function MyComp() {
	return <div>
			<A />
			<B />
			<C />
	</div>
}

function OtherComp() {
	return <div>
			<E />
			<F />
		 </div>
}

Above code introduces lots of <div /> tags

React.Fragment

function MyComp() {
	return <React.Fragment>
				<A />
				<B />
				<C />
	</React.Fragment>
}

OR


function MyComp() {
	return <>
				<A />
				<B />
				<C />
	</>
}


=================================================================================
var PersonContext = React.createContext();

class PersonProvider extends React.Component {
  state = {
    name : 'Smith',
    email : "",
     update : this.update.bind(this)
  };
  
  update(email) {
    this.setState({
        "email": email
    });
   }
  
  render() {
    return <PersonContext.Provider value={this.state}>
        {this.props.children}
      </PersonContext.Provider>
  }
}


class App extends React.Component{
  render() {
    return <PersonProvider>
        <First />
       </PersonProvider>
  }
}


class First extends React.Component {
  render() {
     return <Second/>
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))


<PersonProvider>
	<A/>
	<B/>
	<C/>
</PersonProvider>

<PersonProvider>
	<D/>
	<E/>
</PersonProvider>

=====================================

download and extract "share.zip" from "Github/Banuprakash/REACT"
1) copy "img" folder into "public"
2) copy "data.js" into "src" folder
3) copy "Button.js" into "components" folder
3) copy "Navbar.js" into "components" folder
4) overwrite "src/App.css"


=============

create 

ProductList.js
Product.js
Cart.js
CartList.js
Default.js
Details.js

=============

include "bootstrap"

==

```
 Configure Routes in App.js
  <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
           <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </Router>

Use Link instead of "a href" for Routes
<a href="resource"> </a> is for server side routing

<Link > uses client side routing


<Link to="/products" className="nav-link">   
                    Products
</Link>  

```
===============


App.js ==> lazy() and Suspense for Lazy loading Modules 

=======================================

component gets created consturctor() ==> render() ==> componentDidMount() ==> state changes ==> render()

render() ==> render view with mock content; then make API call

Make API calls in componentDidMount() and not in render() ==> Why? FCP

====================

```
class MyComp extends Component {
	state = {
		stockPrice : "Fetching..."
	}

	constructor(props){
		super(props);
		this.setState({
			stockPrice: "Fetching ..."
		});
	}

	render() {
		<>
			{this.state.stockPrice}
		</>
	}

	componentDidMount(){
		http://serviceprovider:8080/stockPrice?name=SOCG
			==> 
			this.setState({
				stockPrice: value from server
			})
	}
}

```

UI will show Fetching ... ==> componet did mount
Componet will re-render with latest value coming from server

=====================================
App.js ==> Lazy loading ..
Context.js
index.js
ProductList.js
Product.js
```
import { Component } from "react";
import { ProductConsumer } from "./Context";

export default class Product extends Component {

    render() {
        let {id, img} = this.props.product; // from parent
        return <div className="col-md-4 col-lg-3">
            <div className="card my-2">
                <div className="img-container">
                    <ProductConsumer>
                        {
                            value => {
                                return ( 
                                    <>
                                        <img src={img} onClick={() => value.handleDetail(id)}/>
                                    </>
                                )
                            }
                        }
                    </ProductConsumer>
                    
                </div>
            </div>
        </div>
    }
}
```
===

In Functional Components we can use Hooks
  let {detailProduct} = React.useContext(ProductContext);

  above code is same as Context Consumer

===========================

```
Product.js using useContext()

```
export default function Product(props) {
        let {id, img} = props.product; // from parent
        let {handleDetail} = React.useContext(ProductContext);
        return <div className="col-md-4 col-lg-3">
            <div className="card my-2">
                <div className="img-container">
                    <img src={img} onClick={() => handleDetail(id)}/>
                </div>
            </div>
        </div>
}

```

========================
https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc

Assignment: 

Context.js

```
increment = (id) => {
	let prd = this.getProduct(id);
	prd.count ++;
	prd.total = prd.price * prd.count;

	this.setState({
		cart: this.state.cart; // re-render
	})
}

```
decrement() ===> 

need to bind to CartList.js + and - button

=====================================================

1) Fake RESTful webserver

npm i axios

2) Perrrmance ==> re-render
3) Functional components ==> Hooks
4) HOC
5) State Management with Redux, Thunk and Saga

======================================================


Day 4

Reacap:
* styled-components ==> nothing bu DOM elements or React components for which styling can be done based on props
* react-router-dom ==> BrowserRouter, Routes, Route [ path and element], Link, lazy() and Suspense
* ReactContext ==> placeholder for data [ Provider and Consumer] ==> avoid passing props thro intermediary components [16.4]
ProductContext, CartContext, UserContext
* bootstrap and font-awesome

-------------
axios with JWT

You can send a get request with Headers (for authentication with jwt for example):

axios.get('https://example.com/getSomething', {
 headers: {
   Authorization: 'Bearer ' + token //the token is a variable which holds the token
 }
})

----------

Backend RESTful web services ==> Spring Boot, ExpressJS, ASP.NET, PHP

Fake RESTful 
JSON Server: Get a full fake REST API with zero coding

data.json ==> this acts like my database [ CRUD ]

{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}

GET, POST, PUT, DELETE

http://server:port/posts
http://server:port/comments
http://server:port/profile


npx json-server --port 1234 --watch data.json

Browser:
http://localhost:1234/products
http://localhost:1234/products/2
http://localhost:1234/products?company=apple

http://localhost:1234/customers
http://localhost:1234/orders


npm run build
==> generate a build code in "build" folder ==> take this contents to any server and deploy it

-----------------------------------------------------------

Re-Render of Components
------------------------
Whenever a state or props change a component re-renders and it's children also renders
class Child extends React.Component {
  render() {
    console.log("child renders");
    return <h1> Child {this.props.name} </h1>
  }
}

class Parent extends React.Component {
  state = {
    count : 0,
    name : "Banu"
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render() {
    console.log("Parent renders");
    return <>
      Name : {this.state.name} <br />
      Count : {this.state.count} <br />
      <Child name={this.state.name} />
      <button onClick={() => this.increment()}>Inc</button>
    </>
  }
}


ReactDOM.render(<Parent />, document.getElementById('root'))


===

Avoid Re-render
class Child extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.name !== nextProps.name;
  }
  render() {
    console.log("child renders");
    return <h1> Child {this.props.name} </h1>
  }
}

OR

class Child extends React.PureComponent {
   render() {
    console.log("child renders");
    return <h1> Child {this.props.name} </h1>
  }
}

=====

Avoid Re-render in functional Components

function Child(props) {
    console.log("child renders");
    return <h1> Child {props.name} </h1>
}

const MemoChild = React.memo(Child);

class Parent extends React.Component {
  state = {
    count : 0,
    name : "Banu"
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render() {
    console.log("Parent renders");
    return <>
      Name : {this.state.name} <br />
      Count : {this.state.count} <br />
      <MemoChild name={this.state.name} />
      <button onClick={() => this.increment()}>Inc</button>
    </>
  }
}


ReactDOM.render(<Parent />, document.getElementById('root'))

====================================================================

class ErrorBoundary extends React.Component {
state = {
	hasError: false
} 

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}


<ErrorBoundary>
	<A />
	<B />
	<C />
</ErrorBoundary>



<ErrorBoundary>
	<D />
	<E />
</ErrorBoundary>

==================================================================

React Hooks: Hooks are a new addition in React 16.8 [useXXXX()]
They let you use state and other React features of class without writing a class.
* class Component contains:
1) state
2) methods
3) life-cycle methods => componentDidMount, componentDidUpdate(), ...

class components are heavy compared to functional components [ extends Component ]

16.8 onwards ==> 98% will be functional components

React Hooks:

1) useContext() ==> hook used in functional component to act like Consumer of ReactContext
2) useState()
	let's us use state in functional components
```
function App() {
	let [count, setCount] = React.useState(0);
	let [user, setUser] = React.useState("Banu");

	return <>
			Count {count} User {user} <br />
			<button onClick={() => setCount(count + 1)}>Click </button>
	</>
}

ReactDOM.render(<App />, document.getElementById('root'))
```

same as:
```
class App extends Component {
	state = {
		count : 0,
		user : ""
	}

	setCount(no) {
		this.setState( {
			count: no
		})
	}

	setUser(u) {
		this.setState({
			user: u
		})
	}
}

```
3) useReducer
	==> if state is complex / conditionally mutate the state

	state = {
		cart: [{id, name, price, qty, count}, {id, name, price, qty, count} ]
	}

	Actions:
	"ADD_TO_CART"
	"REMOVE_FROM_CART"
	"REMOVE_CART"
	"INCREMENT"

	uses Action objects [ type and payload/data]
		{
			type: "REMOVE_FROM_CART",
			payload: 4
		}

		{
			type: "ADD_TO_CART",
			payload: {"id": 1, "name": "some", "qty" : 4}
		}

		{
			type:"REMOVE_CART"
		}

	-----------------------------

```
	let initalState = {count: 0};

	let countReducer = (state, action) => {
		switch(action.type) {
			case "INCREMENT": return {count : state.count + action.payload}
			case "DECREMENT" : return {count : state.count - 1}
			default: return state;
		}
	}

	function App() {
		let [state, dispatch] = React.useReducer(countReducer, initalState);

		function handleInc() {
			let action = {"type": "INCREMENT", payload: 10};
			dispatch(action);
		}
		return <>
			Count {state.count}   <br />
			<button onClick={handleInc}>Click </button>
	</>	
	}
	ReactDOM.render(<App />, document.getElementById('root'))
```
	-------------------

4) useEffect()
	simulate class component life-cycle methods; componentDidMount(), componentDidUpdate()

```
function App() {
	let [count, setCount] = React.useState(0);
	let [user, setUser] = React.useState("Banu");

	// similar to componentDidMount ==> called once 
	React.useEffect(() => {
		console.log("1. Effect", count)
	}, []);

	// similar to componentDidUpdate ==> called every time when state or props changes 
	React.useEffect(() => {
		console.log("2. Effect", count)
	});

 	// called once on mount and only when name changes
	React.useEffect(() => {
		console.log("3. Effect", count)
	}, [name, count]);

	return <>
			Count {count} User {user} <br />
			<button onClick={() => setCount(count + 1)}>Click </button>
	</>
}
```
==============

5) useMemo() is simialr to memoize() code we wrote on day 1
	to memoze a variable which is returned after heavy cpu intense operation
	like fibanocci

	const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

	
	{memoizedValue}
	
	```
	const memoizedValue = useMemo(() => fibannocci(number), [number]);

	let [number,setNumber] = React.useState(0);
	getFib() {
		// read the value of textbox
		setNumber(data from textbox);
	}
	<input type="text" />	<!-- 34 --> 
	<button onClick={() => getFib()}>Get Fibanocci REsult {memoizedValue}</div>
	```
=============

	React.memo() --> is to memozie the state and props of functional component

6) useCallback()

useCallback will return a memoized version of the callback

Without useCallback() and memo()

```


function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      Example: Title
    </h2>
  )
};


function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

function Count({ text, count }) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}


function ParentComponent() {
	const [age, setAge] = React.useState(25)
	const [salary, setSalary] = React.useState(50000)

	 const incrementAge = () => {
		setAge(age + 1)
	};

	const incrementSalary = () => {
   		setSalary(salary + 1000)
	}
  
	return (
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>
		</div>
	)
}

ReactDOM.render(<ParentComponent/>, document.getElementById("root"));

```

Using React.memo()

function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      Example: Title
    </h2>
  )
};

const MemoTitle = React.memo(Title);

function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

const MemoButton = React.memo(Button);

function Count({ text, count }) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}

const MemoCount = React.memo(Count);

function ParentComponent() {
	const [age, setAge] = React.useState(25)
	const [salary, setSalary] = React.useState(50000)

	 const incrementAge = () => {
		setAge(age + 1)
	};

	const incrementSalary = () => {
   		setSalary(salary + 1000)
	}
  
	return (
		<div>
			<MemoTitle />
			<MemoCount text="Age" count={age} />
			<MemoButton handleClick={incrementAge}>Increment Age</MemoButton>
			<MemoCount text="Salary" count={salary} />
			<MemoButton handleClick={incrementSalary}>Increment Salary</MemoButton>
		</div>
	)
}

ReactDOM.render(<ParentComponent/>, document.getElementById("root"));

===

useCallback()

```

function ParentComponent() {
	const [age, setAge] = React.useState(25)
	const [salary, setSalary] = React.useState(50000)

	 const incrementAge = React.useCallback(() => {
		setAge(age + 1)
	},[age]);

	const incrementSalary = React.useCallback(() => {
   		setSalary(salary + 1000)
	}, [salary]);
  
	return (
		<div>
			<MemoTitle />
			<MemoCount text="Age" count={age} />
			<MemoButton handleClick={incrementAge}>Increment Age</MemoButton>
			<MemoCount text="Salary" count={salary} />
			<MemoButton handleClick={incrementSalary}>Increment Salary</MemoButton>
		</div>
	)
}

ReactDOM.render(<ParentComponent/>, document.getElementById("root"));

```

7) useParams()

<Route path="/details/:id" element={<Details />} />

http://localhost:3000/details/5


import React  from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default function Details() {
	let [product, setProduct] = React.useState({});
   	let {id} = useParams();

   	React.useEffect(() => {
   		axios.get("http://localhost:1234/products/" + id). then( response => {
   			setProduct(response.data);
   		})
   	}, [id]);


     return <>
            <h1>Details!!!</h1>
            <h2>Company: {product.company}</h2>
            <h2>Price: {product.price}</h2>
            <h2>title: {product.title}</h2>
            <img src ={product.img} />
        </>
    
}

=========================

8) useRef(null)

for React Reference similar to React.createRef() in class component

class App extends React.Component {
	emailRef = React.createRef(); // refernence ==> pointer

	render() {
		return <>
			<input type="text" ref ={this.emailRef} />
			<button onClick = {() => this.doTask()}>Get Data</button>
		</>
	}

	doTask() {
		console.log(this.emailRef.current.value);
		this.emailRef.current.focus();
	}
}

============================================================================

State management with Redux

npx create-react-app reduxapp
 
React is not good for State management ; good for view handling ==> View Library

Redux ==> central state managment mechanism

Redux Characters:

1) Action Creator
	is a function which takes data from view and returns an action object

	Action object is one which is in the format of {type: "ADD_TO_CART", payload : data}

2) Store
	is a place where state resides
	Redux has a single store => Single Source of Truth

3) dispatch(action) is intercepted by Store

4) Reducer	
	* are functions which take state from store and action from dispatch
	* replicate the state
	* Mutate
	* return back the changed data to store
	* store updates

	a) RootReducer {"type": "ADD_TO_CART", payload:...}
	b) Many Reducers ==> ProductReducer, CartReducer, CustomerReducer
5) Smart Components ==> React components which understand Redux eco-sytem [ can handshake with redux]
	can store the redux state into context
	or pass data in the form of "props" to view components
6) View Components ==> just render data, handle actions

--
react-redux bridge:
 The connect() function connects a React component to a Redux store.  
 function connect(mapStateToProps, mapDispatchToProps)

// argument is redux state from store
 const mapStateToProps = (state) => {
 	return {
 		products: state.elements
 	}
 }

 const mapDispatchToProps = (dispatch) => {
 	return {
 		addProduct: prd => dispatch({type:"ADD_PRODUCT", payload: {...}}),
 		deleteProduct: id => dispatch({type:"DELETE_PRODUCT", payload: {id: id}})
 	}
 }

connect(mapStateToProps, mapDispatchToProps);

In my React component
	props.products refers of "state.elements" present in "redux store"
	{
		props.products.map(p => ...)
	}

<button onClick={() => props.addProduct({product data})}>Add</button>

=====================
https://createapp.dev/
OR

npm i -g yarn

yarn create-react myapp

npx create-react-app reduxexample
reduxexample>npm i redux react-redux

Redux Dev Tools:
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

==========================================

npm i learnyounode -g
npm install -g javascripting
npm install -g functional-javascript-workshop

===================================================


 



	


