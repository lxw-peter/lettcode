// export default (str) => {
//   // 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
//   let arr = str.split(' ')
//   // 对数组进行遍历，然后每个元素进行反转
//   let result = arr.map(item => {
//     return item.split('').reverse().join('')
//   })
//   return result.join(' ')
// }

// export default (str) => {
//   // 1. 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
//   // 2. 对数组进行遍历，然后每个元素进行反转
//   return str.split(' ').map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// export default (str) => {
//   // 1. 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
//   // 2. 对数组进行遍历，然后每个元素进行反转
//   return str.split(/\s/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// export default (str) => {
//   // 1. 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
//   // 2. 对数组进行遍历，然后每个元素进行反转
//   return str.match(/[\w']+/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

/* 练习 */

/* 方案一: 将字符串按空格分割成数组,通过map逐个分割反转合并成新的数组,最后进行拼接 */
// export default str => {
//   let arr = str.split(' ')
//   let newArr = arr.map(item => {
//     return item.split('').reverse().join('')
//   })
//   window.console.log(newArr)
//   return newArr.join(' ')
// }

/* 方案二: 与原理方案一相同,区别在于直接返回,而没有通过变量 */
// export default str => {
//   return str.split(' ').map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

/* 方案三: 与原理方案二相同,区别在于使用 split 参数的第二种写法--正则表达式  */
// \s :匹配匹配任何空白字符，包括空格、制表符、换页符等等
// g : 所有符合要求的字符串
// export default str => {
//   return str.split(/\s/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

/* 方案四: 与原理方案二相同,区别在于使用 match 匹配符合正则要求的字符串  */
// \w : 匹配字母或数字或下划线或汉字
// + : 重复一次或多次
// []: 分组
// (): 分组
export default str => {
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
