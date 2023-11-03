import _ from 'lodash'
// vite在处理过程中发现有非绝对路径或者相对路径的路径会自动补全
import _2 from 'lodash-es'
// 依赖与构建：vite会找到对应的依赖，然后调用esbuild，将其他规范代码转为esmodule规范，然后放到当前目录下的noe_modules/.vite/deps,同时对esmodule规范的各个模块进行统一继承
console.log('lodash', _)
console.log('lodashes,_2')
export const count = 0
