import { defineConfig } from 'vite'
import viteCDNPlugin from 'vite-plugin-cdn-import'
export default defineConfig({
  plugins: [
    viteCDNPlugin({
      modules: [
        {
          name: 'lodash',
          var: '_',
          path: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js',
        },
      ],
    }),
  ],
})
