# vue3_sample_app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

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

### Type-Check, Compile and Minify for Production

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

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


### プロジェクト作成時のエラー

```
Option 'importsNotUsedAsValues' is deprecated and will stop functioning in TypeScript 5.5. Specify compilerOption '"ignoreDeprecations": "5.0"' to silence this error.
  Use 'verbatimModuleSyntax' instead.ts
```

tsconfig.node.jsonの`compilerOptions`に`"ignoreDeprecations": "5.0"`を追加



# Vue3学習時の注意事項

Veturプラグインを無効化すること
代わりにVue Language Features (Volar)を有効にする


## vue3_sample_app

✔ Project name: … vue3_sample_app
✔ Add TypeScript? … Yes
✔ Add JSX Support? … Yes
✔ Add Vue Router for Single Page Application development? … Yes
✔ Add Pinia for state management? … Yes
✔ Add Vitest for Unit Testing? … Yes
✔ Add an End-to-End Testing Solution? › Cypress
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … Yes

state-managment: paina


## vue コンポーネントメモ

```<script setup lang="ts">```と書かないと、import先でエラーになる

## pinia memo

### store

defineStoreを使用して、storeを定義する

第一引数に任意のid(string)を、第二引数にsetup関数として、無名関数をかく
→ returnを書かないといけない

もしくは、option オブジェクトとして、書く(state, getter, actionをMap型（オブジェクト）で書く)
→オブジェクトで定義しているので、returnの必要はない


### 教材


https://blog.logrocket.com/complex-vue-3-state-management-pinia/