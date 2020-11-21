# Nuxt Berry

> Build [Nuxt](https://github.com/nuxt/nuxt.js) apps using [Yarn 2 (berry)](https://github.com/yarnpkg/berry).

## Why use this?

Yarn 2 was released [earlier this year](https://dev.to/arcanis/introducing-yarn-2-4eh1).
It brings major improvements such as...

* [Improved workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
* [Plug'n'Play](https://yarnpkg.com/features/pnp)
* [Zero-Installs](https://yarnpkg.com/features/zero-installs)

These new features are particularly valuable to large monorepo projects with complex CI pipelines.

However, Nuxt does not currently install correctly when using
Yarn 2. [Some changes](https://github.com/nuxt/nuxt.js/issues/7142) need to be made to support Plug'n'Play
dependency resolution.  With Yarn 2 compatibility not coming natively [until Nuxt 3](https://github.com/nuxt/nuxt.js/pull/7295),
I created this light wrapper to make Nuxt 2 :heart: Yarn 2.

Nuxt Berry should behave exactly like Nuxt, but with Yarn 2 support.

**Important:** This is just a proof of concept right now. I do not recommend anyone use this in production yet.

## Intended usage

**Please note that this is not deployed yet!**

Once it is, usage will look like this...

```bash
yarn add nuxt-berry
```

Then add the following scripts to the `package.json` file for your project...

```json
{
  "scripts": {
    "dev": "nuxt-berry dev",
    "build": "nuxt-berry build",
    "start": "nuxt-berry start"
  }
}
```

## Try it out

For now, you should use this as a demo of future functionality.

First, clone this repo.  Then...

```bash
cd examples/basic-app

# run in dev mode
yarn dev

# or run in prod mode
yarn build
yarn start
```

Notice how you did not need to run `yarn install` at any point in the process? Yay Yarn 2!

## The road to v1

- [ ] Nuxt Berry isn't deployed anywhere. [(#1)](https://github.com/evanrlong/nuxt-berry/issues/1)
- [ ] Nuxt Berry doesn't resolve all dependencies properly inside Yarn 2 yet. [(#2)](https://github.com/evanrlong/nuxt-berry/issues/2)
- [ ] Nuxt Berry doesn't support `generate`. [(#3)](https://github.com/evanrlong/nuxt-berry/issues/3)
- [ ] Nuxt Berry doesn't support custom `rootDir`, `srcDir`, or `buildDir` properties in `nuxt.config.js`. [(#4)](https://github.com/evanrlong/nuxt-berry/issues/4)
- [ ] Nuxt Berry doesn't support auto component registration using `components: true`. [(#5)](https://github.com/evanrlong/nuxt-berry/issues/5)
- [ ] Nuxt Berry doesn't have any tests. [(#6)](https://github.com/evanrlong/nuxt-berry/issues/6)
- [ ] Nuxt Berry needs a new home. [(#7)](https://github.com/evanrlong/nuxt-berry/issues/7)

Please report any other issues [here](https://github.com/evanrlong/nuxt-berry/issues).

If this catches on and hits v1, I can maintain it until Nuxt 3 comes out.

## Why I built this

Short answer... I needed it for work.

Long answer... We have a large monorepo containing several Nuxt applications. We are tired of waiting 5-10 minutes
for our CI pipeline to run `yarn install` on every commit. We want to make the transition to Yarn 2, which will
significantly increase the performance of our CI pipelines, but we can't do it without Nuxt.

## License

[MIT](https://github.com/evanrlong/nuxt-berry/blob/main/LICENSE) (just like Nuxt)
