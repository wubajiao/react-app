/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2023-03-28 18:07:24
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-08 11:09:53
 */
import React, { useEffect } from 'react'
import axios from 'axios'
import Layout from '@/components/Layout'
import './app.less'

function App() {
  const testAxios = () => {
    axios
      .get('/api/girl')
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

  return <Layout>111</Layout>
}

export default App
