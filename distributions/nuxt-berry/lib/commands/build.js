import { loadNuxt, build } from 'nuxt'

const run = async (options = {}) => {
  options.for = 'build'
  const nuxt = await loadNuxt(options)
  await build(nuxt)
}

export default { run }
