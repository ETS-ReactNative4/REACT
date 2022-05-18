import Person from './Person'; 
import {add, sub} from './compute';
import {random} from 'lodash';
import "./style.css";

console.log(random(1,100));
console.log("Hello Webpack!!!");
console.log(add(4,5));
console.log(sub(14,5));
let p = new Person("George", 34);
console.log(p.getName(), p.getAge());