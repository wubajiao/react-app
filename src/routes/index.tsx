/*
 * @Descripttion : 路由集
 * @Author       : wuhaidong
 * @Date         : 2024-04-08 14:20:58
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-05-07 11:38:06
 */
import React from 'react'
import { Navigate } from 'react-router-dom'
import Home from './Home'
import Solution from './Solution'
import Product from './Product'
import About from './About'

const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/solution',
    element: <Solution />,
  },
  {
    path: '/product',
    element: <Product />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <div>页面丢失了</div>,
  },
]

export default routes
