/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2024-04-08 14:21:41
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-11 11:03:42
 */
import React from 'react'
import Banner from '@/components/Banner'
import Content from '@/components/Content'
import ContentTitle from '@/components/ContentTitle'

import './index.less'

import logo2 from '@/assets/images/logo2.png'
import honor1 from '@/assets/images/安标国家中心.png'
import honor2 from '@/assets/images/新奥能源公司.png'
import honor3 from '@/assets/images/国家应急管理部.png'
import honor4 from '@/assets/images/山东国舜公司.png'

import partner1 from '@/assets/images/中国安全生产科学研究院.png'
import partner2 from '@/assets/images/北京超图公司.png'
import partner3 from '@/assets/images/杭州数梦工场科技有限公司.png'

// 荣誉资质
const honorList = [
  { logo: honor1, name: '安标国家矿用产品安全标志中心' },
  { logo: honor2, name: '新奥能源控股有限公司' },
  { logo: honor3, name: '应急管理部国家减灾中心' },
  { logo: honor4, name: '山东国舜建设集团有限公司' },
]

// 合作伙伴
const partners = [
  { logo: partner1, name: '中国安全生产科学研究院' },
  { logo: partner2, name: '北京超图软件股份有限公司 ' },
  { logo: partner3, name: '杭州数梦工场科技有限公司' },
]

function Home(props: any) {
  console.log('🚀 ~ Home ~ props:', props)
  return (
    <div className='home'>
      <Banner title='关于我们' />
      <Content>
        <ContentTitle text='公司简介' />
        <div className='about'>
          <div className='left'>
            <img src={logo2} alt='logo2' />
          </div>
          <div className='right'>
            <p>
              德安荟聚了安全应急、大数据、物联网、云计算、人工智能和空间地理信息、实景三维等领域的高级专业人才，致力于为安全应急行业提供国内外领先的数字化转型服务。
            </p>

            <p>
              德安自主研发工业互联网平台、物联网智能终端、企业设备健康状态智能监控、企业安全双控体系平台、空间数据治理平台、实景三维数字化平台等产品，始终秉承“让安全看得见”的企业使命，提供智慧安全城市、智慧应急、智慧园区、智慧企业、智慧物联的整体解决方案。通过不断的战略创新、组织创新、技术创新、模式创新、服务创新，把德安打造成百亿级企业级互联网集团公司。
              研究院签订
            </p>

            <p>
              2020年，德安与中国安全生产科学研究院签订战略合作伙伴，借助双方优势资源，进行市场、技术和应用的全面融合，共同为安全应急提供技术和服务支持。
            </p>
          </div>
        </div>
        <div className='about' style={{ marginTop: '50px' }}>
          <div className='right'>
            <p>企 业 宗 旨： 为客户、员工、股东创造价值</p>

            <p>企 业 定 位： 全国安全产业运营商</p>

            <p>企 业 使 命： 让城市与工业更安全、更智慧</p>

            <p>核心价值观： 诚信、精专、创新、合作、激情</p>

            <p>核 心 口 号： 因为专注，所以专业</p>
          </div>
        </div>
        <ContentTitle text='荣誉资质' />
        <div className='honor'>
          {honorList.map((item: any) => {
            return (
              <div key={item.name} className='honor-item'>
                <img src={item.logo} alt='' />
                <div>{item.name}</div>
              </div>
            )
          })}
        </div>
        <ContentTitle text='合作伙伴' />
        <div className='honor'>
          {partners.map((item: any) => {
            return (
              <div key={item.name} className='honor-item'>
                <img src={item.logo} alt='' />
                <div>{item.name}</div>
              </div>
            )
          })}
        </div>
      </Content>
    </div>
  )
}
export default Home
