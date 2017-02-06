# sequential-resolve

Run asynchronous/synchronous functions sequentially. Returns a promise that resolves when all promises in the sequence have been resolved, or rejects with the reason of the first promise in the sequence that rejects.

Expects all asynchronous operations to return a promise.

Version 0.x.x of this module used to do something different, if you need that functionality [sequential-map](https://github.com/rogerbf/sequential-map) might be what you are looking for.

## usage

```javascript
import resolve from 'sequential-resolve'

const tasks = [
  `ambitioner`,
  () => `och`,
  () => new Promise(resolve => setTimeout(resolve.bind(null, `regn`), 1000))
]

resolve(tasks)
.then(console.log)
.catch(console.log.bind(null, `error:`))
// [ `ambitioner`, `och`, `regn`]
```

## api

### `resolve([operations], [Promise])`

Returns a Promise.

- `operations` array of operations
- `Promise` override the global Promise object
