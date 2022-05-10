/*
 * @Descripttion : StyleLint配置文件
 * @Author       : wuhaidong
 * @Date         : 2022-05-10 15:09:36
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-05-10 15:36:56
 */
module.exports = {
  // 'stylelint-config-prettier' 是 stylelint和prettier规则冲突解决
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'function-name-case': 'lower',
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'rule-empty-line-before': 'always',
  },
  ignoreFiles: ['node_modules/**/*', 'build/**/*'],
}
