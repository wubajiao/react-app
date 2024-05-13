/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2024-04-10 17:32:25
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-05-07 11:01:07
 */
import React from 'react'

import './index.less'

function ContentTitle({ text, className, id }: any) {
  return (
    <div className={`content-title ${className || ''}`} id={id}>
      <div className='center'>{text}</div>
    </div>
  )
}

export default ContentTitle
