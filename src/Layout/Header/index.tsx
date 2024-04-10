/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2024-04-10 12:11:10
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-10 17:25:57
 */
import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Layout } from 'antd'

import './index.less'

import logoImg from '@/assets/images/logo.png'

const { Header } = Layout

function LayoutHeader() {
  const [items] = useState([
    { path: '/home', title: '关于德安' },
    { path: '/solution', title: '解决方案' },
    { path: '/product', title: '产品研发' },
    { path: '/hr', title: '人才招聘' },
    { path: '/contact', title: '联系我们' },
  ])
  const [scroll, setScroll] = useState<boolean>(false)
  const [scrollHeight, setScrollHeight] = useState<number>(0)

  const location = useLocation()
  const { pathname } = location

  const handleScroll = () => {
    const height = window.scrollY
    setScrollHeight(height)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (scrollHeight > 40) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }, [scrollHeight])

  return (
    <Header className={`header-wrap ${scroll && 'scroll'}`}>
      <nav className='nav'>
        <div className='left'>
          <img src={logoImg} alt='logo' className='logo' />
        </div>
        <div className='right'>
          {items.map((item) => (
            <NavLink
              className={`nav-item ${pathname === item.path ? 'active' : ''} ${scroll && 'scroll'} `}
              to={item.path}
              key={item.path}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </nav>
    </Header>
  )
}

export default LayoutHeader
