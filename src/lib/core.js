const map = (projectionFn, collection, previous) => {
  return new Promise(resolve => {
    const runner = (projectionFn, collection, previous) => {
      if (collection.length !== 1) {
        projectionFn(collection.slice(0, 1))
          .then(val => {
            runner(projectionFn, collection.slice(1), previous.concat(val))
          })
      }
      else {
        projectionFn(collection.slice(0, 1))
          .then(val => resolve(previous.concat(val)))
      }
    }
    runner(projectionFn, collection, previous)
  })
}

module.exports = map
