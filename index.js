const resolve = (tasks = [], P = Promise) => {
  return new Promise((resolve, reject) => {
    const run = (queue = tasks, results = []) => {
      Promise.resolve(
        queue.length > 0 ? queue.slice(0, 1).pop() : Promise.reject()
      )
      .then(
        next =>
          Promise.resolve(typeof (next) === `function` ? next() : next)
          .then(data => run(queue.slice(1), [ ...results, data ]))
        ,
        resolve.bind(null, results)
      )
      .catch(reject)
    }
    run()
  })
}

module.exports = resolve
