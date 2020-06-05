module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential'],
  rules: {
    // 此规则强制执行统一的行结尾，而不受操作系统，VCS 或整个代码库中使用的编辑器的影响。所以关闭
    'linebreak-style': 0,
    // 关闭在导入路径中一致使用文件扩展名
    'import/extensions': 0,
    // 关闭函数圆括号前的空白检测
    'space-before-function-paren': 0,
    // 建议不要使用一元自增自减运算符（++， --）
    'no-plusplus': 0,
    // 关闭 不要改参数的数据结构，保留参数原始值和数据结构。
    'no-param-reassign': 0,
    // 每行代码不得超过100个
    'max-len': 0,
    // 不需要在对象或解构赋值的大括号内强制执行一致的换行符。
    'object-curly-newline': 0,
    // 允许使用遍历器
    'no-restricted-syntax': 0,
    // 关闭箭头函数必须有返回值
    'array-callback-return': 0,
    // 允许'~'按位运算符
    'no-bitwise': [2, { allow: ['~'] }],
    // 禁止未使用的表达式
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true, // 允许在表达式中使用短路评估
        allowTernary: true, // 使用三元运算符
        allowTaggedTemplates: true, // 使用标记的模板文字
      },
    ],
    // parseInt转换string常需要带上基数
    radix: 0,
    // 正则使用转义字符
    'no-useless-escape': 0,
    // 仅强制执行对象解构，但不强制执行数组解构
    'prefer-destructuring': [2, { object: true, array: false }],
    // 禁止空块语句
    'no-empty': 0,
    // 允许函数存在未使用的参数
    'no-unused-vars': [0, { args: 'none' }],
    // 指定不希望在应用程序中使用的全局变量名称
    'no-restricted-globals': 0,
    // 允许使用按位运算符
    'no-bitwise': 0,
    // 根据代码分支允许函数具有不同的行为
    'consistent-return': 0,
    // 允许循环引包
    'import/no-cycle': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 0,
    'func-names': 0,
    'no-underscore-dangle': 0,
    'no-eval': 0,
    'no-lonely-if': 0,
    // 禁止在循环中编写函数 闭包
    'no-loop-func': 0,
    // 禁止嵌套三元表达式
    'no-nested-ternary':0,
    // 允许不严格要求的对象文字属性名称周围的引号
    'quote-props': [2, 'as-needed', { keywords: false, unnecessary: false, numbers: false }],
    // 禁止使用无关的包 样式报引入的路径不一样
    'import/no-extraneous-dependencies':0,
    // 在胡子语法里使用标签符{{a < b}}
    'vue/no-parsing-error': ['error', {'invalid-first-character-of-tag-name': false}],
    'vue/no-unused-vars': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
