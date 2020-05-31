const chalk = require('chalk')
const getNotes = require('./notes.js')

const note = getNotes() 

console.log(chalk.white.bggreen.bold('Success !'));
console.log(chalk.white.bgred.bold('Faliure !'));