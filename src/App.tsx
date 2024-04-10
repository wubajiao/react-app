/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2023-03-28 18:07:24
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-10 14:40:17
 */
import React, { useEffect } from 'react'
import axios from 'axios'
import Layout from '@/Layout'

import './app.less'

function App() {
  const testAxios = () => {
    axios
      .get('/api/post/list')
      .then((response) => {
        // 请求成功
        console.log('----', response)
      })
      .catch((error) => {
        console.log('----1', error)
      })
  }

  // 初始化
  useEffect(() => {
    testAxios()
  }, [])

  return <Layout />
}

export default App
