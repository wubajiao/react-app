/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2023-03-31 17:24:38
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2023-03-31 17:40:25
 */
import React, { useState } from 'react'

function B() {
  const [count, setCount] = useState(1)
  return (
    <div className='app' onClick={() => setCount(count + 1)}>
      hello React {count}
    </div>
  )
}

export default B
