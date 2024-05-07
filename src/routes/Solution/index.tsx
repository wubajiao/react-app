/*
 * @Descripttion : 解决方案
 * @Author       : wuhaidong
 * @Date         : 2024-04-08 14:21:41
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-05-07 11:04:08
 */
import React from 'react'
import Banner from '@/components/Banner'
import Content from '@/components/Content'
import ContentTitle from '@/components/ContentTitle'

import './index.less'

import solution1 from '@/assets/images/solution1.png'
import solution2 from '@/assets/images/solution2.png'
import solution3 from '@/assets/images/solution3.png'

function Solution(props: any) {
  console.log('🚀 ~ Solution ~ props:', props)
  return (
    <div className='solution'>
      <Banner title='智慧安全城市与智慧应急' />
      <Content className='content1'>
        <ContentTitle text='智慧安全城市' />
        <div className='about'>
          <div className='left'>
            <p>
              智慧安全城市采用新一代信息技术，以城市“风险”与“能力”为基线，构建统一的城市安全风险监测预警体系、城市安全大数据治理体系、城市安全应急响应体系、城市安全评估监管应用体系，提高城市安全风险防范能力和风险应对能力，促进城市经济系统、社会系统和环境系统的良好运行。
            </p>
          </div>
          <div className='right'>
            <img src={solution1} alt='' />
            <img src={solution2} alt='' />
          </div>
        </div>
      </Content>
      <Content className='content2'>
        <ContentTitle text='智慧应急' />
        <div className='about'>
          <div className='left'>
            <p>
              智慧应急以“平战结合，以平为主”的理念，以大数据、云计算、物联网、融合通信等技术，集成海量应急监测数据和应急业务数据，进行数据挖掘、数据整合和数据分析，提升各级应急、安监、环保、燃气等部门在风险监测、事件处置、分析研判等方面的能力，做到“平”时能够满足各级部门的应急监测等各项应急管理工作的需要，“战”时能够满足应急值守、应急评估、应急决策和应急指挥等工作的需要，提高应对各类突发事故的应急管理能力、应急响应能力和应急科学决策水平。
            </p>
          </div>
          <div className='right'>
            <img src={solution3} alt='' />
          </div>
        </div>
      </Content>
    </div>
  )
}
export default Solution