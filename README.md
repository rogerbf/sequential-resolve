# sequential-resolve

Run tasks, that might yield a promise, sequentially.

Before v1 this used to do something different, if you need that functionality [sequential-map](https://github.com/rogerbf/sequential-map) might be what you are looking for.

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

### `resolve([tasks], [Promise])`

Returns a Promise.

- `tasks` array of tasks
- `Promise` override the global Promise object
