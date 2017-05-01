const sequence = require(`./index`)

describe(`sequential-resolve`, () => {
  it(`is a function`, () => {
    expect(typeof (sequence)).toEqual(`function`)
  })

  it(`rejects (asynchronous)`, () => {
    const tasks = [
      () => Promise.resolve(`ignored result`),
      () => Promise.reject(Error(`gosh`))
    ]

    return (
      sequence(tasks)
      .then(r => expect(r).toBeUndefined())
      .catch(e => expect(e.message).toEqual(`gosh`))
    )
  })

  it(`rejects (synchronous)`, () => {
    const tasks = [
      () => Promise.resolve(`ignored result`),
      () => { throw Error(`gosh`) }
    ]

    return (
      sequence(tasks)
      .then(r => expect(r).toBeUndefined())
      .catch(e => expect(e.message).toEqual(`gosh`))
    )
  })

  it(`resolves all values in series`, () => {
    const two = jest.fn(() => Promise.resolve(`two`))
    const one = jest.fn(() => {
      expect(two).not.toHaveBeenCalled()
      return Promise.resolve(`one`)
    })

    const tasks = [
      one,
      two,
      `some string`
    ]

    return (
      sequence(tasks)
      .then(r => {
        expect(r).toEqual([ `one`, `two`, `some string` ])
      })
      .catch(e => expect(e).toBeUndefined())
    )
  })

  it(`resolves first value (resolveEagerly)`, () => {
    const one = jest.fn(() => Promise.resolve(`one`))
    const two = jest.fn(() => Promise.resolve(`two`))

    const tasks = [
      one,
      two
    ]

    return (
      sequence(tasks, { resolveEagerly: true })
      .then(r => {
        expect(r).toEqual([ `one` ])
        expect(two).not.toHaveBeenCalled()
      })
      .catch(e => expect(e).toBeUndefined())
    )
  })
})
