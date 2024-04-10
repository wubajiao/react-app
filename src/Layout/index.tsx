/*
 * @Descripttion : 页面框架
 * @Author       : wuhaidong
 * @Date         : 2024-04-08 11:02:56
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-10 15:51:13
 */
import React from 'react'
import { Layout } from 'antd'
import { useRoutes } from 'react-router-dom'
import routes from '@/routes'
import Header from './Header'
import Footer from './Footer'

const { Content } = Layout

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
}

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
}

function App() {
  const ElementRouter = useRoutes(routes)
  return (
    <Layout style={layoutStyle}>
      <Header />
      <Content style={contentStyle}>{ElementRouter}</Content>
      <Footer />
    </Layout>
  )
}

export default App
