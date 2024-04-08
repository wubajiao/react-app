/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2024-04-05 14:26:45
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-08 11:21:01
 */
import Mock from 'mockjs'

Mock.mock('/api/data', 'get', {
  name: '@name',
  'age|1-100': 100,
  'gender|1': ['男', '女'],
})

Mock.mock('/api/post/list', 'get', [
  {
    value: '1',
    label: '文章1',
  },
  {
    value: '2',
    label: '文章2',
  },
  {
    value: '3',
    label: '文章3',
  },
  {
    value: '4',
    label: '文章4',
  },
  {
    value: '5',
    label: '文章5',
  },
])
