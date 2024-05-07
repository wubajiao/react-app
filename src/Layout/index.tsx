/*
 * @Descripttion : 页面框架
 * @Author       : wuhaidong
 * @Date         : 2024-04-08 11:02:56
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-05-07 22:46:22
 */
import React from 'react'
import { Layout, FloatButton } from 'antd'
import { useRoutes } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { CustomerServiceOutlined } from '@ant-design/icons'
import routes from '@/routes'
import Header from './Header'
import Footer from './Footer'

const { Content } = Layout

const contentStyle: React.CSSProperties = {
  minHeight: 120,
  color: '#fff',
  backgroundColor: '#fff',
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
      <FloatButton.Group style={{ right: 24 }}>
        <FloatButton
          icon={<CustomerServiceOutlined />}
          tooltip='联系我们'
          href='https://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODAwMzIxOF80ODk0MjJfNDAwODg5MTI1MV8'
          target='_blank'
        />
        <FloatButton.BackTop visibilityHeight={0} tooltip='回到顶部' />
      </FloatButton.Group>
    </Layout>
  )
}

export default App
