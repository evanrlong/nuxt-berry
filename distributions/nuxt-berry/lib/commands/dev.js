import { loadNuxt, build } from 'nuxt'

const run = async (options = {}) => {
  options.for = 'dev'
  const nuxt = await loadNuxt(options)
  build(nuxt)
  await nuxt.listen()

  const port = nuxt.options.server.port
  const host = nuxt.options.server.host === '' ? 'localhost' : nuxt.options.server.host

  console.log()
  console.log(`Server started at http://${host}:${port}`)
  console.log()
}

export default { run }
