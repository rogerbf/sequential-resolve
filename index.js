const resolve = (tasks = [], P = Promise) => {
  return new P((resolve, reject) => {
    const run = (queue = tasks, results = []) => {
      P.resolve(
        queue.length > 0 ? queue.slice(0, 1).pop() : P.reject()
      )
      .then(
        next =>
          P.resolve(typeof (next) === `function` ? next() : next)
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
