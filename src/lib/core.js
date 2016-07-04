const map = (fn, collection, previous = []) => {
  return new Promise((resolve, reject) => {
    const runner = (fn, collection, previous) => {
      if (collection.length !== 1) {
        fn(collection.slice(0, 1).join())
          .then(val => {
            runner(fn, collection.slice(1), previous.concat(val))
          }).catch(e => reject(e))
      }
      else {
        fn(collection.slice(0, 1).join())
          .then(val => resolve(previous.concat(val))).catch(e => reject(e))
      }
    }
    runner(fn, collection, previous)
  })
}

module.exports = map
