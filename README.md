# sequential-resolve

It's like `Promise.all` but in series.

## usage

```javascript
const sequence = require(`sequential-resolve`)

const tasks = [
  `ambitioner`,
  () => `och`,
  () => new Promise(resolve => setTimeout(resolve.bind(null, `regn`), 1000))
]

sequence(tasks)
.then(console.log)
.catch(console.log.bind(null, `error:`))
// [ `ambitioner`, `och`, `regn`]
```

## api

### `sequence(operations[, options])`

Returns a Promise.

- `operations` &lt;Array&gt;, collection of tasks
- `options` &lt;Object&gt;, available options:
  ```javascript
  {
    resolveEagerly: false // Default
  }
  ```
  `resolveEagerly` &lt;Boolean&gt;, resolve as soon as possible, skipping all remaining operations.
