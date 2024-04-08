/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2024-04-08 10:57:57
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-08 11:00:27
 */
import React from 'react'
import { Button, Flex } from 'antd'

function App() {
  return (
    <Flex gap='small' wrap='wrap'>
      <Button type='primary'>Primary Button</Button>
      <Button>Default Button</Button>
      <Button type='dashed'>Dashed Button</Button>
      <Button type='text'>Text Button</Button>
      <Button type='link'>Link Button</Button>
    </Flex>
  )
}

export default App
