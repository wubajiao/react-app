/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2023-04-04 12:09:01
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2023-04-04 14:07:54
 */
import React from 'react'

type IBuuton = {
  name: string
}
function Button(props: IBuuton) {
  return <div>{props.name}</div>
}

export default Button
