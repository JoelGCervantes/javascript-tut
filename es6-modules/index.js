// impot modules using object destructuring
import { PI, getArea, getCircumference, getVolume } from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const vol = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${vol.toFixed(2)}cm^3`);
