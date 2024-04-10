/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2024-04-10 12:11:10
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-10 15:05:08
 */
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Layout } from 'antd'

import './index.less'

const { Header } = Layout

function LayoutHeader() {
  const [items] = useState([
    { path: '/home', title: '首页' },
    { path: '/abut', title: '关于' },
    { path: '/home/SubChild', title: '首页-child' },
    { path: '/noFound', title: 'noFound' },
  ])

  const location = useLocation()
  const { pathname } = location

  return (
    <Header className='header-wrap'>
      <nav className='nav'>
        {items.map((item) => (
          <NavLink className={`nav-item ${pathname === item.path ? 'active' : ''}`} to={item.path} key={item.path}>
            {item.title}
          </NavLink>
        ))}
      </nav>
    </Header>
  )
}

export default LayoutHeader
