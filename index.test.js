const resolve = require(`./index`)

test(`resolves`, () => {
  const tasks = [
    `ambitioner`,
    () => `och`,
    () => Promise.resolve(`regn`)
  ]

  resolve(tasks)
  .then(result => expect(result).toEqual([ `ambitioner`, `och`, `regn` ]))
  .catch(error => expect(error).toBeUndefined())

  resolve()
  .then(result => expect(result).toEqual([]))
  .catch(error => expect(error).toBeUndefined())
})

test(`rejects`, () => {
  const tasks = [
    `ambitioner`,
    () => `och`,
    () => Promise.reject(`regn`)
  ]

  resolve(tasks)
  .then(result => expect(result).toBeUndefined())
  .catch(error => expect(error).toEqual(`regn`))
})

test(`rejects when task throws`, () => {
  const task = () => { throw Error(`an error`) }
  resolve([ task ])
  .then(result => expect(result).toBeUndefined())
  .catch(error => expect(error.message).toEqual(`an error`))
})
