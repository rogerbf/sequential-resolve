const sequence = async (
  tasks,
  { resolveEagerly } = { resolveEagerly: false },
  results = []
) => {
  for await (const task of tasks) {
    const result = typeof task === `function` ? await task() : task
    results.push(result)
    if (resolveEagerly) {
      break
    }
  }
  return results
}

module.exports = sequence
