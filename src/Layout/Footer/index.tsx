/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2024-04-10 12:11:10
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-10 12:18:54
 */
import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
}

function LayoutFooter() {
  console.log('LayoutFooter')
  return <Footer style={footerStyle}>Footer</Footer>
}

export default LayoutFooter
