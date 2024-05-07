/*
 * @Descripttion : 解决方案
 * @Author       : wuhaidong
 * @Date         : 2024-04-08 14:21:41
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-05-07 11:45:18
 */
import React from 'react'
import Banner from '@/components/Banner'
import Content from '@/components/Content'
import ContentTitle from '@/components/ContentTitle'

import './index.less'

import solution1 from '@/assets/images/solution1.png'
import solution2 from '@/assets/images/solution2.png'
import solution3 from '@/assets/images/solution3.png'
import solution4 from '@/assets/images/solution4.png'
import solution5 from '@/assets/images/solution5.png'
import solution6 from '@/assets/images/solution6.png'
import solution7 from '@/assets/images/solution7.png'

function Solution(props: any) {
  console.log('🚀 ~ Solution ~ props:', props)
  return (
    <div className='solution'>
      <Banner title='解决方案' />
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
      <Content className='content1'>
        <ContentTitle text='智慧园区' />
        <div className='about'>
          <div className='left'>
            <p>
              智慧园区平台面向化工园区、以石油和化工为主导产业的各类工业园区，以“安全为本、需求引领、技术驱动、服务赋能”为建设理念，通过先进的信息技术与创新的运营服务模式，打造安全、环保、安防、消防、能源、应急与公共服务一体化平台，解决安全底数不清、风险不明、管理手段与模式落后、监管效能低下、应急处置低效、运营服务能力不足等问题，全面提升园区安全管控、风险治理、应急管理与综合服务能力水平。
            </p>
          </div>
          <div className='right'>
            <img src={solution4} alt='' />
            <img src={solution5} alt='' />
          </div>
        </div>
      </Content>
      <Content className='content2'>
        <ContentTitle text='智慧物联' />
        <div className='about'>
          <div className='left'>
            <p>
              智慧物联包括物联网公共服务平台、物联网云主机终端、物联网智能终端等产品组成，能够满足各级政府、园区、企业的安全监控、消防监测、环境监测、设备管理、企业安防、生产监控等多个应用需求。
            </p>
          </div>
          <div className='right'>
            <img src={solution6} alt='' />
          </div>
        </div>
      </Content>
      <Content className='content1'>
        <ContentTitle text='智慧企业' />
        <div className='about'>
          <div className='left'>
            <p>
              智慧企业在大数据驱动下，整合企业内外各方资源与智慧，将更广泛的人的智力因素与制造技术的智能因素紧密融合在一起，实现跨界融合，以柔性管理模式应对环境突变的一种具有创新特征的组织结构。其目标在于通过制造与信息的融合，使得整个企业的计划、生产、流通、管理、服务等环节能进行自动识别、动态分析决策、精准执行，有效解决制造领域当中低端生产方式，在生产、管理、服务过程中实现自主决策、自主执行和自主演进的能力。
            </p>
          </div>
          <div className='right'>
            <img src={solution7} alt='' />
          </div>
        </div>
      </Content>
    </div>
  )
}
export default Solution
