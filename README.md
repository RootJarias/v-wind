# V-Wind

- Provides set of different variants components created with Tailwind CSS with better design and more functionalities.
- Provides different layouts that can be used in other projects.
- Provides tools to easily manage your project.


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

#### Library/Technology Used.

```
- Vue Router: To handle routings and layouts (https://v3.router.vuejs.org/installation.html#direct-download-cdn)

- Tailwind CSS: I've used tailwind CSS for utility classes. (https://tailwindcss.com/)

- Daisy UI: For tailwind code and UI enchancements. (https://daisyui.com/)

- Fontawesome: Used to apply icon in the page (https://fontawesome.com/docs/web/use-with/vue/)
```

#### Script Code Standards

```
Add this title comment when working on `<script>`:

1.) Base Imports
2.) Import Services
3.) Import Components
4.) Import 3rd party components/plugins
5.) Import Icons
6.) Import Stores
7.) Set Props
8.) Set Emits
9.) Set Datas
10.) Set Functions
11.) Initialize Functions
```
