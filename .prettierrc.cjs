module.exports = {
  // 基础配置
  printWidth: 100, // 每行最大字符数
  tabWidth: 2, // 缩进空格数
  useTabs: false, // 使用空格而非制表符
  semi: true, // 使用分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 仅在需要时为对象属性添加引号

  // JSX 配置
  jsxSingleQuote: false, // JSX 中使用双引号

  // 尾随逗号
  trailingComma: 'all', // 多行时尽可能使用尾随逗号

  // 括号空格
  bracketSpacing: true, // 对象字面量中的空格 { foo: bar }
  bracketSameLine: false, // 多行 HTML 元素的 > 放在最后一行末尾

  // 箭头函数参数
  arrowParens: 'always', // 箭头函数单参数时也使用括号

  // Vue 文件配置
  vueIndentScriptAndStyle: false, // Vue 文件中 <script> 和 <style> 标签内不缩进

  // 换行符
  endOfLine: 'lf', // 使用 LF 换行符

  // HTML 空格敏感度
  htmlWhitespaceSensitivity: 'css', // 根据 CSS display 属性决定

  // 是否格式化嵌入的代码块
  embeddedLanguageFormatting: 'auto',
};
