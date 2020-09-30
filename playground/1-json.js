

/* function jsonWorking() {
    const book = {
        title: 'SAVAGE SIROHI',
        author: 'Sirohi',
    };
    const bookJSON = JSON.stringify(book);
    console.log(book);
    const parsed = JSON.parse(bookJSON);
    console.log(parsed.author);
    console.log(parsed.title);
}

jsonWorking(); */

/* const fs = require('fs')

function jsonWorking() {
    const book = {
        title: 'SAVAGE SIROHI',
        author: 'Sirohi',
    };
    const bookJSON = JSON.stringify(book);
    fs.writeFileSync('1-json.json',bookJSON)

}

jsonWorking(); */

/* 
const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer)

const dataJSON = dataBuffer.toString() 
console.log(dataJSON)

 */

/* console.log(dataBuffer.toString()) */

const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')

const dataJSON = dataBuffer.toString()

const parsed = JSON.parse(dataJSON);

parsed.name = 'Shubham Singh'
parsed.age = 23
parsed.planet = 'Neptune'

const userJSON = JSON.stringify(parsed);

fs.writeFileSync('1-json.json', userJSON);

console.log(userJSON)