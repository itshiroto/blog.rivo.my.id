import { defineConfig } from 'unocss'
import { presetUno, presetWebFonts, presetTypography, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        serif: "IBM Plex Serif"
      }
    }),
    presetTypography(),
    presetIcons()
  ],
})
