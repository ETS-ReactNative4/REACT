import Person from './Person'; 
import {add, sub} from './compute';

import "./style.css";

console.log("Hello Webpack!!!");
console.log(add(4,5));
console.log(sub(14,5));
let p = new Person("George", 34);
console.log(p.getName(), p.getAge());