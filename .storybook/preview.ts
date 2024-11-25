import type { Preview } from "@storybook/svelte";
import { themes } from "@storybook/theming";
import "../static/smui.css";
import "../styles/mdai-base.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
