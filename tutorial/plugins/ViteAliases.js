// vite插件必须返回给vite一个对象
const fs = require('fs')
const { functions } = require('lodash')
const path = require('path')

function diffDirAndFile(dirFilesArr = [], basePath = '') {
  const result = {
    dirs: [],
    files: [],
  }
  dirFilesArr.forEach((name) => {
    const currentFileStat = fs.statSync(
      path.resolve(__dirname, basePath + '/' + name)
    )
    console.log('current file stat', currentFileStat)
    const isDirectory = currentFileStat.isDirectory()
    if (isDirectory) {
      result.dirs.push(name)
    } else {
      result.files.push(name)
    }
  })
  return dirFilesArr
}
function getTotalSrcDir() {
  const result = fs.readdirSync(path.resolve(__dirname, '../src'))
  const diffResult = diffDirAndFile(result, '../src')
  console.log('diffResult', diffResult)
  const resolveAliasObj = {}
  diffResult.forEach((dirName) => {
    const key = `@${dirName}`
    const absPath = fs.readdirSync(
      path.resolve(__dirname, '../src' + '/' + dirName)
    )
    console.log('key', key)
    resolveAliasObj[key] = absPath
  })
  console.log(resolveAliasObj)
  return resolveAliasObj
}
module.exports = () => {
  return {
    config(config, env) {
      // config:目前的一个配置对象
      // env:mode:string,command:string
      console.log(config, env)
      // config函数可以返回一个对象，这个对象是部分的viteconfig配置【其实就是你想改的那一部分】
      const obj = getTotalSrcDir()
      return {
        resolve: {
          alias: obj,
        },
      }
    },
  }
}
