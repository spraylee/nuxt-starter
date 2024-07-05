import { defineConfig, presetIcons, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({}),
    presetIcons({
      // autoInstall: true,
      prefix: '',
    }),
  ],
  transformers: [transformerDirectives()],
})
