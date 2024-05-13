/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2024-04-10 12:11:10
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-05-13 17:29:37
 */
import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Layout } from 'antd'

import './index.less'

import logoImg from '@/assets/images/logo.png'

const { Header } = Layout

function LayoutHeader() {
  const [items] = useState([
    {
      path: '/home',
      title: '关于德安',
      children: [
        { title: '公司简介', path: '/home?id=homeSection1' },
        { title: '客户成功', path: '/home?id=homeSection2' },
        { title: '合作伙伴', path: '/home?id=homeSection3' },
      ],
    },
    {
      path: '/solution',
      title: '解决方案',
      children: [
        { title: '智慧安全城市', path: '/solution?id=solutionSection1' },
        { title: '智慧应急', path: '/solution?id=solutionSection2' },
        { title: '智慧园区', path: '/solution?id=solutionSection3' },
        { title: '智慧企业', path: '/solution?id=solutionSection4' },
        { title: '智慧物联', path: '/solution?id=solutionSection5' },
      ],
    },
    {
      path: '/product',
      title: '产品研发',
      children: [
        { title: '工业互联网平台', path: '/product?id=productSection1' },
        { title: '实景三维数字化平台', path: '/product?id=productSection2' },
        { title: '智能终端', path: '/product?id=productSection3' },
        { title: '智能监控平台', path: '/product?id=productSection4' },
        { title: '安全双控体系平台', path: '/product?id=productSection5' },
        { title: '空间数据治理平台', path: '/product?id=productSection6' },
      ],
    },
    {
      path: '/hr',
      title: '人才招聘',
      children: [
        { title: 'java开发工程师', path: '/hr?id=hrSection1' },
        { title: '前端开发工程师', path: '/hr?id=hrSection2' },
        { title: '销售经理', path: '/hr?id=hrSection3' },
        { title: '项目经理', path: '/hr?id=hrSection4' },
      ],
    },
    { path: '/contact', title: '联系我们' },
  ])
  const [scroll, setScroll] = useState<boolean>(false)
  const [scrollHeight, setScrollHeight] = useState<number>(0)

  const location = useLocation()
  const { pathname, search } = location

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

  useEffect(() => {
    // 获取url参数
    const urlParams = new URLSearchParams(search)
    const id = urlParams.get('id')
    const element = document.querySelector(`#${id}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [search])

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
              <div>{item.title}</div>
              {item.children && (
                <div className='sub-nav'>
                  {item.children.map((child) => (
                    <NavLink to={child.path} key={child.title} className='sub-nav-item'>
                      {child.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </Header>
  )
}

export default LayoutHeader
