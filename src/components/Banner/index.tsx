/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2024-04-10 17:32:25
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-10 22:40:51
 */
import React from 'react'
import bannerImg from '@/assets/images/banner.png'

import './index.less'

function Banner({ title = '关于我们' }: any) {
  return (
    <div className='banner' style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className='center'>
        <div className='title'>{title}</div>
      </div>
    </div>
  )
}

export default Banner
