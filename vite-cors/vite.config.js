import { defineConfig } from 'vite'
import viteCDNPlugin from 'vite-plugin-cdn-import'
export default defineConfig({
  server:{//开发服务器配置
    proxy:{//配置跨域
      "/api":{//key+描述对象，以后遇到/api开头的请求，都将代理到target属性对应的域中去
        target:'https://www.360.com',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,'')//是否要重写api路径，将api替换为空串
      }
    }
  },
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
