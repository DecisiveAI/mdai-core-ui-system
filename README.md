# MyDecisive Core UI System

This repository and package are where our UI components live! Our UI core is primarily based on the @material/web web components library.

<div style="text-align: center; font-size: 2rem; font-weight: bold; padding: 24px 0;"><a href="https://decisiveai.github.io/mdai-core-ui-system/">🐙 Try the demo! 🐙</a></div>

# Components

| Component | `mdai` Web Component | React component   | material-web base component | Demo | Stability |
| --------- | -------------------- | ----------------- | --------------------------- | ---- | --------- |
| Button    | `mdai-button`        | `MdaiReactButton` | `md-*-button`               | ✅   | Preview   |
| Chips     | 🔜                   | 🔜                | `md-chipset`, `md-*-chip`   | ✅   |           |
| Headings  | Styles only          | N/A               | N/A                         | ✅   | Preview   |
| Icon      | 🔜                   | 🔜                | `md-icon`                   | ✅   |           |
| Menu      | 🔜                   | 🔜                | `md-menu`, `md-menu-item`   | ✅   |           |
| Select    | 🔜                   | 🔜                | `md-*-select`               |      |           |
| Switch    | 🔜                   | 🔜                | `md-switch`                 | ✅   |           |
| Tabs      | 🔜                   | 🔜                | `md-tabs`, `md-*-tab`       |      |           |

# Getting Started

## Installation

```sh
npm i --save @mydecisiveai/core-ui
```

## Usage

Import the JS package and code into your app with:

```ts
// importing this file will import all web components. You do not need to import individual components where they are used in your application.
import "@mydecisiveai/core-ui";

// import styles. Vite-based projects should be able to accept these imports and work like 🪄 magic 🪄. Webpack projects may need a CSS loader.
import "@mydecisiveai/core-ui/mdai-base.css";
// import a color theme
import "@mydecisiveai/core-ui/mdai-theme-console.css";
// or
import "@mydecisiveai/core-ui/mdai-theme-website.css";
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
