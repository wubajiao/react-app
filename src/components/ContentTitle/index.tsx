/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2024-04-10 17:32:25
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-11 10:45:49
 */
import React from 'react'

import './index.less'

function ContentTitle({ text }: any) {
  return (
    <div className='content-title'>
      <div className='center'>{text}</div>
    </div>
  )
}

export default ContentTitle
