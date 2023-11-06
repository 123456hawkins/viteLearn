console.log('hello')
let str:string="helloworld"
interface PersonField{
  name:string;
  age:number;
}

function demo(params:PersonField){
  console.log("name",params.name);
}

// "build":"tsc --noEmit && vite build"
// 在package.json假设可以在build阶段报错
let a='asdfa'
// a=99
// 企业级应用：ts如何约束
// 如何让ts错误输出到控制台

console.log("meta",import.meta.env.VITE_PROXY);
