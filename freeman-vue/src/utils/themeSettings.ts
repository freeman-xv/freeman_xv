/**
 * 改变主题颜色
 * @param {string} color 十六进制颜色字符串
 */
export function changeColor(color:string):void{
  const el = document.documentElement
  el.style.setProperty('--el-color-primary', color)
}