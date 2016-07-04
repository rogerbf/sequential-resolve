# sequential-resolve

## install

```
npm install sequential-resolve
```

## usage

``` js
const sequence = require('sequential-resolve')

const letters = ['a', 'b', 'c']

const slowCharCoder = val => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(val.charCodeAt(0))
    }, 1000)
  })
}

sequence(slowCharCoder, letters, [])
  .then(charCodes => {
    console.log(charCodes)
    // Logs [ 97, 98, 99 ] after ~3000 ms
  }
)

```
