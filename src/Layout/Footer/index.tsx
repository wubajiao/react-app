/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2024-04-10 12:11:10
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-11 14:49:10
 */
import React from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import Content from '@/components/Content'

import './index.less'
import qrImg from '@/assets/images/公司二维码.jpg'

const { Footer } = Layout

const about = [
  { href: '/', name: '公司简介' },
  { href: '/home', name: '合作伙伴' },
  { href: '/home', name: '客户成功' },
]

const solution = [
  { href: '/home', name: '智慧安全城市' },
  { href: '/home', name: '智慧应急' },
  { href: '/home', name: '智慧园区' },
]

const product = [
  { href: '/home', name: '工业互联网平台' },
  { href: '/home', name: '企业设备健康状态智能监控' },
  { href: '/home', name: '企业安全双控体系平台' },
  { href: '/home', name: '空间数据治理平台' },
  { href: '/home', name: '实景三维数字化平台' },
  { href: '/home', name: '物联网智能终端' },
]

const hr = [
  { href: '/home', name: 'java开发工程师' },
  { href: '/home', name: '前端开发工程师' },
  { href: '/home', name: '销售经理' },
  { href: '/home', name: '项目经理' },
]

function LayoutFooter() {
  console.log('LayoutFooter')
  return (
    <Footer className='footer'>
      <Content>
        <div className='top'>
          <div className='left'>
            <div className='item'>
              <div className='title'>关于德安</div>
              {about.map((item: any) => {
                return (
                  <div key={item.name} className='nav'>
                    <Link to={item.href} className='td'>
                      {item.name}
                    </Link>
                  </div>
                )
              })}
            </div>
            <div className='item'>
              <div className='title'>解决方案</div>
              {solution.map((item: any) => {
                return (
                  <div key={item.name} className='nav'>
                    <Link to={item.href} className='td'>
                      {item.name}
                    </Link>
                  </div>
                )
              })}
            </div>
            <div className='item'>
              <div className='title'>产品研发</div>
              {product.map((item: any) => {
                return (
                  <div key={item.name} className='nav'>
                    <Link to={item.href} className='td'>
                      {item.name}
                    </Link>
                  </div>
                )
              })}
            </div>
            <div className='item'>
              <div className='title'>人才招聘</div>
              {hr.map((item: any) => {
                return (
                  <div key={item.name} className='nav'>
                    <Link to={item.href} className='td'>
                      {item.name}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='right'>
            <img src={qrImg} alt='qrImg' />
          </div>
        </div>
        <div className='bottom'>
          <span>@北京德安物联科技有限公司</span>
          <span> 地址：北京市昌平区回龙观西大街</span>
          <span>京ICP备.........</span>
        </div>
      </Content>
    </Footer>
  )
}

export default LayoutFooter
