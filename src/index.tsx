/* eslint-disable import/no-import-module-exports */
/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2023-03-31 16:45:29
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-08 11:40:13
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// mock
import './mock/mockServer'

if (module && module.hot) {
  module.hot.accept()
}
const container: any = document.querySelector('#root')
const root = createRoot(container)
root.render(<App />)
