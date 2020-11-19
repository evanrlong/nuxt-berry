import dev from './dev'
import build from './build'
import start from './start'
import path from 'path'
import PnpWebpackPlugin from 'pnp-webpack-plugin'

const packageDir = path.resolve(__dirname, '..', '..')
const appDir = process.cwd()
const srcDir = appDir
const buildDir = path.resolve(appDir, '.nuxt')

const options = {
  rootDir: appDir,
  configOverrides: {
    rootDir: packageDir,
    srcDir,
    buildDir,
    build: {
      extend (config) {
        config.resolve.plugins = [
          ...config.resolve.plugins || [],
          PnpWebpackPlugin.bind(buildDir, module, 'nuxt-berry'),
          PnpWebpackPlugin.bind(srcDir, module, 'nuxt-berry'),
          PnpWebpackPlugin
        ]

        config.resolveLoader.plugins = [
          ...config.resolveLoader.plugins || [],
          PnpWebpackPlugin.moduleLoader(module)
        ]
      }
    }
  }
}

process.chdir(packageDir)

const command = process.argv.slice(2)[0]

switch (command) {
  case 'dev':
    dev.run(options)
    break
  case 'build':
    build.run(options)
    break
  case 'start':
    start.run(options)
    break
  default:
    console.log('Possible commands: dev, build, start')
}
