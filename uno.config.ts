import { defineConfig, presetIcons, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: {
    'icon-btn':
      'w-8 h-8 rounded flex items-center justify-center hover:bg-gray-400/20 transition-colors bg-transparent border-1px border-solid border-gray-400/20',
  },
  content: { pipeline: { exclude: [/node_modules/, /\.nuxt/, /\.output/, /dist/] } },
  presets: [
    presetUno({}),
    presetIcons({
      // autoInstall: true,
      prefix: '',
    }),
  ],
  transformers: [transformerDirectives()],
})
