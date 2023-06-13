// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const namestake = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./6-alternate-syntax-flavors')

console.log(data.items);
console.log(data.singlePerson.name.toUpperCase());

require('./7-mind-granade')

sayHi('susan')
sayHi(namestake.john)
sayHi(namestake.peter)