/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2024-04-10 17:32:25
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-11 09:44:21
 */
import React from 'react'

import './index.less'

function Content({ children }: any) {
  return (
    <div className='content'>
      <div className='center'>{children}</div>
    </div>
  )
}

export default Content
