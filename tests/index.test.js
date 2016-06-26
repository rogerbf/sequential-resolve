const map = require('../src/index.js')

const arr = ['a', 'b', 'c']
const delay = 1000

const promiseFactory = val => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(val)
    }, delay)
  })
}

console.time('Projecting')

map(promiseFactory, arr, [])
  .then(arr => {
    console.log(arr)
    console.timeEnd('Projecting')
  })

console.log(`Should return results after about ${delay * arr.length} ms`)
