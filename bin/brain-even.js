#!/usr/bin/env node
import { askName, askIsEven } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
askIsEven(name);
