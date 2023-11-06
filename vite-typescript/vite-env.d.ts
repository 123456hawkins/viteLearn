/// <reference types="vite/client" />
// 配置这个能读到.env变量
interface importMetaEnv{
  readonly VITE_PROXY:string;
}