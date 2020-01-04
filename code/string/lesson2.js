/* export default (str) => {
  // 建立数据结构，堆栈，保存数据
  let r = []
  // 给定任意子输入都返回第一个符合条件的子串
  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      return RegExp.$1
    } else {
      return ''
    }
  }
  // 通过for循环控制程序运行的流程
  for (let i = 0, len = str.length - 1; i < len; i++) {
    let sub = match(str.slice(i))
    if (sub) {
      r.push(sub)
    }
  }
  return r
} */
var countBinarySubstrings = (str) => {
  let arr = []
  let match = (str) => {
    //           ^ 起始; ()分组; + 一个或多个; | 或
    let first = str.match(/^(0+|1+)/)[0]
    //            ^1 取反操作(0=>1,1=>0), repeat(n),字符串重复n次
    let last = (first[0] ^ 1).toString().repeat(first.length)
    // 注意first和last是一组,外层有括号
    let reg = new RegExp(`^(${first}${last})`)
    if (reg.test(str)) {
      /* 非标准$1, $2, $3, $4, $5, $6, $7, $8, $9 属性是包含括号
      子串匹配的正则表达式的静态和只读属性 */
      return RegExp.$1
    } else {
      return ''
    }
  }
  // 通过循环匹配符合要求的字符 push 到数组 arr 中,返回 arr
  // match()传递的是str从第 i 个字符到最后一个
  // slice(begin[,end]) 方法提取一个字符串的一部分，并返回一新的字符串
  for (let i = 0, len = str.length - 1; i < len; i++) {
    let sub = match(str.slice(i))
    if (sub) {
      arr.push(sub)
    }
  }
  return arr
}
