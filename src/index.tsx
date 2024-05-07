/* eslint-disable import/no-import-module-exports */
/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2023-03-31 16:45:29
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-05-07 12:26:37
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'

// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/swiper-bundle.css'

// mock
import './mock/mockServer'

if (module && module.hot) {
  module.hot.accept()
}
const container: any = document.querySelector('#root')
const root = createRoot(container)
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
)
