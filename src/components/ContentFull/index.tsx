/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2024-04-10 17:32:25
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-05-07 11:00:33
 */
import React from 'react'

import './index.less'

function Content({ children, className }: any) {
  return (
    <div className={`content-full ${className || ''}`}>
      <div className='content-full-center'>{children}</div>
    </div>
  )
}

export default Content
