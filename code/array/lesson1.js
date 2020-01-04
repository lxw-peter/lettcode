// export default (str) => {
//   // 建立电话号码键盘映射
//   let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
//   // 把输入字符串按单字符分隔变成数组，234=>[2,3,4]
//   let num = str.split('')
//   // 保存键盘映射后的字母内容，如 23=>['abc','def']
//   let code = []
//   num.forEach(item => {
//     if (map[item]) {
//       code.push(map[item])
//     }
//   })
//   let comb = (arr) => {
//     // 临时变量用来保存前两个组合的结果
//     let tmp = []
//     // 最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
//     for (let i = 0, il = arr[0].length; i < il; i++) {
//       for (let j = 0, jl = arr[1].length; j < jl; j++) {
//         tmp.push(`${arr[0][i]}${arr[1][j]}`)
//       }
//     }
//     arr.splice(0, 2, tmp)
//     if (arr.length > 1) {
//       comb(arr)
//     } else {
//       return tmp
//     }
//     return arr[0]
//   }
//   return comb(code)
// }

export default str => {
  // 键盘映射关系
  var phoneNumber = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 输入为空或为1 的情况下 返回空数组
  if (str === '' || str.indexOf(1) > 0) return []
  // 把输入字符串按单字符分隔变成数组，234=>[2,3,4]
  var num = str.split('')
  // 临时变量用来保存前两个组合的结果
  var arr = []
  // 遍历num,将对应的字母数组push到arr上
  num.forEach(item => {
    if (phoneNumber[item]) {
      arr.push(phoneNumber[item])
    }
  })
  // 只输入一个数字
  if (!arr[1]) {
    return arr[0].split('')
  }
  let comb = (arr) => {
    let tmp = []
    // 最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
    for (var i = 0, lenI = arr[0].length; i < lenI; i++) {
      for (var j = 0, lenJ = arr[1].length; j < lenJ; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    // 将tmp替换code的前两个字符
    arr.splice(0, 2, tmp)
    // 当arr中只剩下tmp一个数组时返回tmp
    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    return arr[0]
  }
  return comb(arr)
}
