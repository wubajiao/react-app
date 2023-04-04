/* eslint-disable import/no-import-module-exports */
/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2023-03-31 16:45:29
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2023-04-04 18:07:35
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

if (module && module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.querySelector('#root'))
