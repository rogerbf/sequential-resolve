const map = (projectionFn, collection, previous) => {
  return new Promise((resolve, reject) => {
    const runner = (projectionFn, collection, previous) => {
      if (collection.length !== 1) {
        projectionFn(collection.slice(0, 1).join())
          .then(val => {
            runner(projectionFn, collection.slice(1), previous.concat(val))
          }).catch(e => reject(e))
      }
      else {
        projectionFn(collection.slice(0, 1).join())
          .then(val => resolve(previous.concat(val))).catch(e => reject(e))
      }
    }
    runner(projectionFn, collection, previous)
  })
}

module.exports = map
