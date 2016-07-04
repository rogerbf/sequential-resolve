const map = require('../src/index.js')

const arr = ['a', 'b', 'c']

const delay1s = val => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(val)
    }, 1000)
  })
}

const delay500ms = val => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(val)
    }, 500)
  })
}

map(delay1s, arr, [])
  .then(arr => {
    console.log('3000ms:', arr)
  })

map(delay500ms, arr, [])
  .then(arr => {
    console.log('1500ms:', arr)
  })
