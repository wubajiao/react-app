/*
 * @Descripttion : prettier 测试文件
 * @Author       : wuhaidong
 * @Date         : 2022-05-10 10:08:02
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-05-10 11:16:32
 */

const singleQuote = '是否单引号，jsxSingleQuote 表示jsx语法下是否单引号'
const tabWidth = 2
const trailingComma = {
  text: '对象的最后一个属性末尾也会添加,',
}
const bracketSpacing = { text: '在对象中的括号之间打印空格， {a: 5} 格式化为 { a: 5 }' }
const endOfLine =
  '换行符，可选配置有 lf ，cr ，crlf ，会有三种的原因是因为各个操作系统之间的换行符不一致，这里有历史原因，有兴趣的同学自行了解吧，许多有名的开源库都是使用 lf ，我们姑且也跟跟风吧。'
const semi = '不要分号结束符'

const PrintWidth =
  '单行代码最长字符长度，超过之后会自动格式化换行;单行代码最长字符长度，超过之后会自动格式化换行;单行代码最长字符长度，超过之后会自动格式化换行;单行代码最长字符长度，超过之后会自动格式化换行 '

const getArrowParens = (a) => {
  const ArrowParens =
    '箭头函数的参数无论有几个，都要括号包裹。比如 (a) => {} ，如果设为 avoid ，会自动格式化为 a => {} 。'
  return ArrowParens
}
