// 这个插件一次性包含了很多必要插件
const postcssPresetEnv = require('postcss-preset-env')
module.exports = {
  plugins: [postcssPresetEnv()],
}
