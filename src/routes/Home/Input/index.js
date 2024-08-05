/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2024-08-05 21:39:38
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-08-05 21:56:59
 */
import React, { useState } from 'react'
import './index.css'

function InputComponent({ onSubmit }) {
  const [inputValue, setInputValue] = useState('')
  const [displayValue, setDisplayValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = () => {
    setDisplayValue(inputValue)
    onSubmit(inputValue)
  }

  return (
    <div className='input-container'>
      <div className='input-wrap'>
        <input
          className='input-field'
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='输入你的内容'
        />
        <button type='button' className='submit-button' onClick={handleSubmit}>
          提交
        </button>
      </div>
      {/* 这一块可以注释去掉 */}
      <div>
        <h2>你输入的内容是:</h2>
        <p className='display-text'>{displayValue}</p>
      </div>
    </div>
  )
}
export default InputComponent
