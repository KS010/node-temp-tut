const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')    //utf8 will extract the file to read or it is one of the way to read file

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }                                   //this will append / overwrite the given input
)
console.log('done with this task')
console.log('starting the next one')