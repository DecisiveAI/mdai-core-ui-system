<script lang="ts" context="module">
  import consoleTheme from "./lib/styles/mdai-theme-console.css?inline";
  import websiteTheme from "./lib/styles/mdai-theme-website.css?inline";
  enum THEME {
    CONSOLE = "CONSOLE",
    WEBSITE = "WEBSITE",
  }

  const CSS_THEME_MAP = {
    [THEME.CONSOLE]: consoleTheme,
    [THEME.WEBSITE]: websiteTheme,
  };
</script>

<script lang="ts">
  import { applyThemeFromCss } from "./applyThemeFromCss";
  import "./lib/index";
  import "./lib/styles/mdai-base.css";
  import Highlight from "svelte-highlight";
  import { xml, typescript } from "svelte-highlight/languages";
  import monokai from "svelte-highlight/styles/monokai";

  let theme = THEME.CONSOLE;
  $: applyThemeFromCss(CSS_THEME_MAP[theme]);

  let menuIsOpen = false;

  const switchTheme = () => {
    theme = theme === THEME.CONSOLE ? THEME.WEBSITE : THEME.CONSOLE;
  };
</script>

<svelte:head>
  {@html monokai}
</svelte:head>

<main>
  <img src="logo.svg" class="logo" alt="MyDecisive" />
  <h3>MyDecisive UI System</h3>
  <div class="blurb-box">
    <p>
      We are currently in the process of building out our component set based on <a
        href="https://material-web.dev"
        target="_blank">Material Web</a
      >. See the
      <a
        href="https://github.com/DecisiveAI/mydecisive-core-ui-system/blob/main/README.md#components"
        target="_blank">README.md</a
      >
      for progress on components.
    </p>
  </div>
  <div class="theme-selector-container">
    <h5>Theme</h5>
    <div class="theme-selector">
      Console
      <md-switch class="theme-selector-switch" on:change={switchTheme} />
      Website
    </div>
  </div>
  <div class="demos">
    <div class="component-overview">
      <h3>Buttons</h3>
      <div class="component-preview row">
        <mdai-button on:click={() => console.log("Text button!")}
          >Text button</mdai-button
        >
        <mdai-button
          variant="outlined"
          icon="account_tree"
          on:click={() => console.log("Outlined button!")}
          >Outlined button w/ icon</mdai-button
        >
        <mdai-button
          variant="filled"
          on:click={() => console.log("Filled button!")}
          >Filled button</mdai-button
        >
        <mdai-button
          icononly
          variant="outlined"
          icon="celebration"
          on:click={() => console.log("Icon button!")}
        ></mdai-button>
      </div>
      <div class="code-block">
        <Highlight
          language={xml}
          class="code-block"
          code={`
<mdai-button on:click={() => console.log("Text button!")}>
  Text button
</mdai-button>
<mdai-button
  icon="account_tree"
  variant="outlined"
  on:click={() => console.log("Outlined button!")}>
  Outlined button w/ icon
</mdai-button>
<mdai-button
  variant="filled"
  on:click={() => console.log("Filled button!")}>
  Filled button
</mdai-button>
<mdai-button
  icononly
  variant="outlined"
  icon="celebration"
  on:click={() => console.log("Icon button!")}></mdai-button>`.trim()}
        />
      </div>
    </div>
    <div class="component-overview">
      <h3>Chips</h3>
      <div class="component-preview row">
        <md-chip-set>
          <md-filter-chip label="Filter chip"></md-filter-chip>
          <md-input-chip label="Input chip"></md-input-chip>
          <md-assist-chip label="Assist chip"></md-assist-chip>
          <md-suggestion-chip label="Suggestion chip"></md-suggestion-chip>
        </md-chip-set>
      </div>
      <div class="code-block">
        <Highlight
          language={xml}
          class="code-block"
          code={`
<md-chip-set>
  <md-filter-chip label="Filter chip"></md-filter-chip>
  <md-input-chip label="Input chip"></md-input-chip>
  <md-assist-chip label="Assist chip"></md-assist-chip>
  <md-suggestion-chip label="Suggestion chip"></md-suggestion-chip>
</md-chip-set>`.trim()}
        />
      </div>
    </div>
    <div class="component-overview">
      <h3>Headings</h3>
      <div class="component-preview column">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>
      <div class="code-block">
        <Highlight
          language={xml}
          class="code-block"
          code={`
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
  `.trim()}
        />
      </div>
    </div>
    <div class="component-overview">
      <h3>Icon</h3>
      <div class="component-preview row">
        <md-icon>celebration</md-icon>
        <md-icon>image</md-icon>
        <md-icon>account_tree</md-icon>
        <md-icon>cake</md-icon>
      </div>
      <div class="code-block">
        <Highlight
          language={xml}
          class="code-block"
          code={`
<md-icon>celebration</md-icon>
<md-icon>image</md-icon>
<md-icon>account_tree</md-icon>
<md-icon>cake</md-icon>
            `.trim()}
        />
      </div>
    </div>
    <div class="component-overview">
      <h3>Menu</h3>
      <md-filled-button
        id="menu-target"
        on:click={() => (menuIsOpen = !menuIsOpen)}
        >Click here for menu!</md-filled-button
      >
      <md-menu
        positioning="fixed"
        anchor="menu-target"
        open={menuIsOpen}
        on:close-menu={(e) => {
          menuIsOpen = false;
          const menuItem = e?.detail?.itemPath?.[0];
          alert("You clicked menu item: " + menuItem?.dataset?.menuvalue);
        }}
      >
        <md-menu-item data-menuvalue={1}>Item 1</md-menu-item>
        <md-menu-item data-menuvalue={2}>Item 2</md-menu-item>
        <md-menu-item data-menuvalue={3}>Item 3</md-menu-item>
      </md-menu>
      <div class="code-block">
        <Highlight
          language={xml}
          class="code-block"
          code={`
<md-filled-button id="menu-target" on:click={...}>Click here for menu!</md-filled-button>
<md-menu positioning="fixed" anchor="menu-target" open={...} on:close-menu={onCloseMenu}>
  <md-menu-item data-menuvalue={1}>Item 1</md-menu-item>
  <md-menu-item data-menuvalue={2}>Item 2</md-menu-item>
  <md-menu-item data-menuvalue={3}>Item 3</md-menu-item>
</md-menu>`.trim()}
        />
      </div>
      <div class="code-block">
        <Highlight
          language={typescript}
          class="code-block"
          code={`
// How to get the selected menu item
const onCloseMenu = (e: Event) => {
  menuIsOpen = false;
  const menuItem = e?.detail?.itemPath?.[0];
  alert("You clicked menu item: " + menuItem?.dataset?.menuvalue);
}
`.trim()}
        />
      </div>
    </div>
    <div class="component-overview">
      <h3>Switch</h3>
      <div class="component-preview row">
        <md-switch></md-switch>
        <md-switch selected></md-switch>
      </div>
      <div class="code-block">
        <Highlight
          language={xml}
          class="code-block"
          code={`
<md-switch></md-switch>
<md-switch selected></md-switch>`.trim()}
        />
      </div>
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img.logo {
    height: 256px;
  }

  .blurb-box {
    max-width: 800px;
    background-color: var(--mdai-very-dark-grey);
    padding: 32px;
    margin: 32px;
  }

  .theme-selector-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .theme-selector-container h5 {
    margin: 8px;
  }

  .theme-selector {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .theme-selector-switch {
    margin: 0 8px;
  }

  .component-overview {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .component-preview.row {
    display: flex;
    width: 100%;
  }

  .component-preview.row {
    flex-direction: row;
    justify-content: space-evenly;
  }

  .component-preview.column {
    flex-direction: column;
  }

  .code-block {
    width: 100%;
  }
</style>
