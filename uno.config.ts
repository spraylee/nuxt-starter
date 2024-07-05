import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno({
      // work with Mantine theme
      // dark: {
      //   dark: '[data-mantine-color-scheme="dark"]',
      //   light: '[data-mantine-color-scheme="light"]',
      // },
    }),
    presetIcons({
      // autoInstall: true,
      prefix: "",
    }),
  ],
});
