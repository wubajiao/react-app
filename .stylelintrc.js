/*
 * @Descripttion : StyleLint配置文件
 * @Author       : wuhaidong
 * @Date         : 2022-05-10 15:09:36
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-10 17:09:28
 */
module.exports = {
  // 'stylelint-config-prettier' 是 stylelint和prettier规则冲突解决
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'comment-empty-line-before': 'never',
    'declaration-empty-line-before': null,
    'function-name-case': null,
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'rule-empty-line-before': 'never',
  },
  ignoreFiles: ['node_modules/**/*', 'build/**/*'],
}
