/*
 * @Descripttion : 联系我们
 * @Author       : wuhaidong
 * @Date         : 2024-04-08 14:21:41
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-05-07 22:16:28
 */
import React from 'react'
import Banner from '@/components/Banner'
import Content from '@/components/Content'
import ContentTitle from '@/components/ContentTitle'

import './index.less'

import contactImg from '@/assets/images/contact.png'

function Contact(props: any) {
  console.log('🚀 ~ Contact ~ props:', props)
  return (
    <div className='contact'>
      <Banner title='联系我们' />
      <Content className='content1'>
        <ContentTitle text='联系我们' />
        <div className='about'>
          <div className='left'>
            <p>联系地址：北京市昌平区回龙观西大街</p>
          </div>
          <div className='right'>
            <img src={contactImg} alt='' />
          </div>
        </div>
      </Content>
    </div>
  )
}
export default Contact
