/**
 * 随机颜色
 * @export
 * @param {boolean} type true为rgb格式   false为十六进制格式
 * @return {*}  {string}
 */
export function rondomColor(type:boolean):string {
  if (!type) {
      var res = `rgb(${rondom(0, 255)}, ${rondom(0, 255)},${rondom(0, 255)})`
      return res
  }
  function change(str:string) {
      if (str.length == 1) {
          return '0' + str
      }
      return str
  }
  var one = change(rondom(0, 255).toString(16))
  var two = change(rondom(0, 255).toString(16))
  var three = change(rondom(0, 255).toString(16))
  var res = `#${one}${two}${three}`
  return res
}

/**
 * 范围内随机整数
 * @export
 * @param {number} beginNum 开始数字
 * @param {number} endNum 结束数字
 * @return {*}  {number}
 */
export function rondom(beginNum:number, endNum:number):number {
  return beginNum + Math.floor(Math.random() * (endNum + 1))
}


/**
 * 验证密码是否为字母+字符串组成
 * @export
 * @param {*} password
 * @return {*} 
 */
export function validatePassword(password:string) {
  const pattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{10,16}$/;
  return pattern.test(password);
}