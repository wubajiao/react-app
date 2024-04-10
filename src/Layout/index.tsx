/*
 * @Descripttion : 页面框架
 * @Author       : wuhaidong
 * @Date         : 2024-04-08 11:02:56
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-10 15:08:01
 */
import React from 'react'
import { Layout, Flex } from 'antd'
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
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
}

function App() {
  const ElementRouter = useRoutes(routes)
  return (
    <Flex gap='middle' wrap='wrap'>
      <Layout style={layoutStyle}>
        <Header />
        <Content style={contentStyle}>{ElementRouter}</Content>
        <Footer />
      </Layout>
    </Flex>
  )
}

export default App
