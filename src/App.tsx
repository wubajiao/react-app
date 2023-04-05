/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2023-03-28 18:07:24
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2023-04-05 21:46:58
 */
import React, { useEffect } from 'react'
import axios from 'axios'
import Button from '@/components/Button'
import B from './B'

function App() {
  const testAxios = () => {
    axios
      .get('/api/girl')
      .then((response) => {
        console.log('----', response)
      })
      .catch((error) => {
        console.log('----1', error)
      })
  }

  useEffect(() => {
    testAxios()
  }, [])

  return (
    <>
      <B />
      <Button name='按钮' />
      <div className='app'>hello React</div>
    </>
  )
}

export default App
