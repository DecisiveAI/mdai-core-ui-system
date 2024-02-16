import mensch from "mensch";

// Inspired by https://github.com/material-foundation/material-color-utilities/blob/main/typescript/utils/theme_utils.ts#L181-L191
export const applyThemeFromCss = (css: string) => {
  const targetElement = document.body;
  const parsedCss = mensch.parse(css);
  const rootRule = parsedCss?.stylesheet?.rules.find((rule) =>
    rule?.selectors?.includes(":root")
  );
  const mdColorDeclarations = rootRule?.declarations
    ?.filter(
      (declaration) =>
        declaration?.name.startsWith("--md-sys-color") ||
        declaration?.name.startsWith("--mdai-core-color")
    )
    .map(({ name, value }) => ({ name, color: value }));
  mdColorDeclarations?.forEach(({ name, color }) => {
    targetElement.style.setProperty(name, color);
  });
};
