/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2024-04-08 11:02:56
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-08 11:12:49
 */
import React from 'react'
import { Layout, Flex } from 'antd'

const { Header, Footer, Content } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
}

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
}

function App({ children }: any) {
  return (
    <Flex gap='middle' wrap='wrap'>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>{children}</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Flex>
  )
}

export default App
