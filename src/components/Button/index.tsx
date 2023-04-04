/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2023-04-04 12:09:01
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2023-04-04 15:42:17
 */
import React from 'react'

type IBuuton = {
  name: string
}
function Button(props: IBuuton) {
  const { name } = props
  return <div>{name}</div>
}

export default Button
