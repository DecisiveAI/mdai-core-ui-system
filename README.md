# MyDecisive Core UI System

This repository and package are where our UI components live! Our UI core is primarily based on the @material/web web components library.

# Getting Started

## Installation

```sh
npm i --save @mydecisive/ui
```

## Usage

Import the JS package and code into your app with:

```ts
// importing this file will import all web components. You do not need to import individual components where they are used in your application.
import "mydecisive-core-ui-system";

// import styles. Vite-based projects should be able to accept these imports and work like 🪄 magic 🪄. Webpack projects may need a CSS loader.
import "mydecisive-core-ui-system/mdai-base.css";
// import a color theme
import "mydecisive-core-ui-system/mdai-theme-console.css";
// or
import "mydecisive-core-ui-system/mdai-theme-website.css";
```

# Development

## Run the demo app locally

```sh
npm run dev
```

## Build the library

```sh
npm run build
```

## Build a hostable copy of the demo app

```sh
npm run build -- --mode demo
```
